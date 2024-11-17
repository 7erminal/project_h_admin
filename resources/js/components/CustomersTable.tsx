import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Api from './../core/api'
import UserDetails from './UserDetails'
import { Customer } from '../structs/structs'
import EditUserDetails from './EditUserDetails'

const CustomersTable: React.FC = () => {
    const [customers, setCustomers] = useState<Array<Customer>>([]);
    const [showUserDetails, setShowUserDetails] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer>()
    const [showEditUserDetails, setShowEditUserDetails] = useState(false)
    const [firstLoad, setFirstLoad] = useState(false)

    const handleUserDetailsClose = () => setShowUserDetails(false);
    const handleUserDetailsShow = (sc: Customer) => {
        setShowUserDetails(true)
        setSelectedCustomer(sc)
    };

    const handleEditUserDetailsClose = () => setShowEditUserDetails(false);
    const handleEditUserDetailsShow = () => {
        setShowUserDetails(false);
        setShowEditUserDetails(true)
    };

    const allCustomers = ():void => {
        new Api().getAllCustomers()
                .then(response => {
                        console.log("Get the customers")
                        console.log(response)

                        if(response['success']==true){
                            console.log("Success is true")

                            setCustomers(response['data'])
                        } else {
                            console.log("an error occurred")
                        }
                        
                        }
                    );
    }

    useEffect(() => {
        allCustomers();
    },[]);

    useEffect(() => {
        allCustomers();
        handleEditUserDetailsClose()

        if(firstLoad==false){
            setFirstLoad(true)
        } else {
            handleUserDetailsShow(selectedCustomer!)
        }
    },[selectedCustomer]);

    return <div className="table-responsive m-b-40">
         <h3 className="title-5 m-b-35">Customers</h3>
    <table className="table table-borderless table-data3">
        <thead>
            <tr>
                <th></th>
                <th>Customer Name</th>
                <th>Username</th>
                <th>Mobile Number</th>
                <th>Customer Number</th>
                <th>date registered</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Is Host</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                customers.map((customer: Customer, i: number)=>{
                    var date_ = new Date(customer.created_at).toDateString()
                    return <tr key={i}>
                        <td><span style={{backgroundImage: "url('https://ayekooo.com/media/"+customer.picture+"')", height: '50px', width: '50px', borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center'}}></span></td>
                        <td>{ customer.first_name } { customer.last_name }</td>
                        <td>{ customer.username }</td>
                        <td>{ customer.mobile_number }</td>
                        <td>{ customer.customer_number }</td>
                        <td className="process">{ date_ }</td>
                        <td>{ customer.email }</td>
                        <td>{ customer.dob }</td>
                        <td>{ customer.gender }</td>
                        <td>{ customer.is_host }</td>
                        <td><a href="#" onClick={()=>handleUserDetailsShow(customer)}>Edit</a></td>
                    </tr>
                })
            }
            
        </tbody>
    </table>
    <UserDetails show={showUserDetails} handleClose={handleUserDetailsClose} selectedCustomer={selectedCustomer} handleEditUserShow={handleEditUserDetailsShow} />
    <EditUserDetails show={showEditUserDetails} handleClose={handleEditUserDetailsClose} selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer} />
</div>
}

if(document.getElementById('customers-table')){
    createRoot(document.getElementById('customers-table')!).render(<CustomersTable />)
}