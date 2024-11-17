import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Customer } from '../structs/structs'
import { Col, Container, Modal, Row, Table, Button, Form } from "react-bootstrap";
import Api from './../core/api'
import Loader from "./widgets/Loader";

type Props = {
    show: boolean
    handleClose: ()=>void
    selectedCustomer: Customer | undefined
    setSelectedCustomer: Dispatch<SetStateAction<Customer | undefined>>
}

const EditUserDetails: React.FC<Props> = ({show, handleClose, selectedCustomer, setSelectedCustomer})=>{
    const [editableCustomer, setEditableCustomer] = useState<Customer>()
    const [loader, setLoader] = useState(false)

    const handleLoaderClose = () => setLoader(false);
    const handleLoaderShow = () => setLoader(true);

    useEffect(()=>{
        setEditableCustomer(selectedCustomer)
    },[selectedCustomer])

    const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const val = e.target.value
        const param = e.target.name

        console.log("param is "+param)
        console.log(editableCustomer?.[param])

        let tempEditableUser = editableCustomer

        tempEditableUser![param] = val

        // tempEditableUser!.first_name= val

        // tempEditableUser?.reduce((o, k) => o[k] = o[k] || {}, tempEditableUser)[param] = val;
        
        setEditableCustomer({...editableCustomer, ...tempEditableUser!})
    }

    const submitChanges = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const params = {
            'first_name': editableCustomer?.first_name,
            'last_name': editableCustomer?.last_name,
            'username': editableCustomer?.username,
            'address': editableCustomer?.address,
            'email': editableCustomer?.email,
            'mobile_number': editableCustomer?.mobile_number,
            'location': editableCustomer?.location,
            'delivery_location': editableCustomer?.delivery_location
        }

        console.log("About to send request to update user")

        handleLoaderShow()
        new Api().updateCustomer(params, editableCustomer?.id)
                .then(response => {
                    handleLoaderClose()
                        console.log("Get the customers")
                        console.log(response)

                        if(response.data.success==true){
                            console.log("Success is true")

                            // setCustomers(response['data'])
                            setSelectedCustomer({...selectedCustomer!, ...editableCustomer})
                        } else {
                            console.log("an error occurred")
                        }
                        
                        }
                    )
                    .catch(e=>{
                        console.log("ERROR UPDATING USER")
                        console.log(e)
                    });
    }

    return <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={submitChanges}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First name" name="first_name" value={editableCustomer?.first_name} onChange={onChangeFunc} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" name="last_name" value={editableCustomer?.last_name} onChange={onChangeFunc} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" name="username" value={editableCustomer?.username} onChange={onChangeFunc} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" name="email" value={editableCustomer?.email} onChange={onChangeFunc} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" placeholder="Mobile number" name="mobile_number" value={editableCustomer?.mobile_number} onChange={onChangeFunc} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" name="address" value={editableCustomer?.address} onChange={onChangeFunc} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder="Location" name="location" value={editableCustomer?.location} onChange={onChangeFunc} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Delivery Location</Form.Label>
                                <Form.Control type="text" placeholder="Delivery Location" name="delivery_location" value={editableCustomer?.delivery_location} onChange={onChangeFunc} />
                            </Form.Group>
                            <div style={{height: '85px', width: '100%', backgroundColor: '#FFF9F7', borderRadius: '10px', marginTop: '10px', marginBottom: '30px', textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}><Button type="submit" variant="light">Save</Button></div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        <Loader show={loader} handleClose={handleLoaderClose} />
  </Modal>
}

export default EditUserDetails