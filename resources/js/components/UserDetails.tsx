import React from "react";
import { Customer } from '../structs/structs'
import { Col, Container, Modal, Row, Table, Button } from "react-bootstrap";

type Props = {
    show: boolean
    handleClose: ()=>void
    selectedCustomer: Customer | undefined | null
    handleEditUserShow: ()=>void
}

const UserDetails: React.FC<Props> = ({show, handleClose, selectedCustomer, handleEditUserShow})=>{
    return <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body>
            <Container>
                <Row>
                    <div style={{height: '85px', width: '100%', backgroundColor: '#FFF9F7', borderRadius: '10px', marginTop: '10px', marginBottom: '30px', textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}><span style={{backgroundImage: "url('https://ayekooo.com/media/"+selectedCustomer?.picture+"')", height: '70px', width: '70px', borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center'}}></span></div>
                </Row>
                <Row>
                    <Col>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Othernames</th>
                                    <th>Last Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{selectedCustomer?.first_name}</td>
                                    <td>{selectedCustomer?.other_names}</td>
                                    <td>{selectedCustomer?.last_name}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <div style={{height: '85px', width: '100%', backgroundColor: '#FFF9F7', borderRadius: '10px', marginTop: '10px', marginBottom: '30px'}}></div>
                <Row>
                    <Col>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Mobile Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{selectedCustomer?.email}</td>
                                    <td>{selectedCustomer?.gender}</td>
                                    <td>{selectedCustomer?.mobile_number}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <div style={{height: '85px', width: '100%', backgroundColor: '#FFF9F7', borderRadius: '10px', marginTop: '10px', marginBottom: '30px'}}></div>
                <Row>
                    <Col>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <td>ID Type</td>
                                    <td>{selectedCustomer?.ID_type_id}</td>
                                </tr>
                                <tr>
                                    <td>ID Number</td>
                                    <td>{selectedCustomer?.ID_number}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{selectedCustomer?.address}</td>
                                </tr>
                                <tr>
                                    <td>Customer Number</td>
                                    <td>{selectedCustomer?.customer_number}</td>
                                </tr>
                                <tr>
                                    <td>Mobile Number</td>
                                    <td>{selectedCustomer?.mobile_number}</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>{selectedCustomer?.location}</td>
                                </tr>
                                <tr>
                                    <td>Profession</td>
                                    <td>{selectedCustomer?.profession}</td>
                                </tr>
                                <tr>
                                    <td>Delivery Location</td>
                                    <td>{selectedCustomer?.delivery_location}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <div style={{height: '85px', width: '100%', backgroundColor: '#FFF9F7', borderRadius: '10px', marginTop: '10px', marginBottom: '30px', textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}><Button type="button" variant="light" onClick={handleEditUserShow}>Edit</Button></div>
            </Container>
        </Modal.Body>
  </Modal>
}

export default UserDetails