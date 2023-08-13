import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Api from './../core/api'
import { Customers, Service, Requests, RequestNotice } from '../structs/structs'

type Host = {
    host_details_id: number;
    location_cordinates: string;
    office_address: string;
    service_coverage_zone: string;
    official_certifications: string;
    number_of_years_practice_speciality: string;
    number_of_years_experience: string;
    referrals: string;
    specializations: string;
    languages_spoken: string;
    created_at: string;
    host_name: string;
}

const ServicesTable: React.FC = () => {
    const [services, setServices] = useState<Array<Service>>([]);

    const allServices = ():void => {
        new Api().getAllCategories()
                .then(response => {
                        console.log("Get the hosts")
                        console.log(response)

                        if(response['success']==true){
                            console.log("Success is true")

                            setServices(response['data'])
                        } else {
                            console.log("an error occurred")
                        }
                        
                        }
                    );
    }

    useEffect(() => {
        allServices();
    },[]);

    return <div className="table-responsive m-b-40">
         <h3 className="title-5 m-b-35">Services</h3>
    <table className="table table-borderless table-data3">
        <thead>
            <tr>
                <th>Service Name</th>
                <th>Service Description</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {
                services.map((service: Service, i: number)=>{
                    // var date_ = new Date(service.).toDateString()
                    return <tr key={i}>
                        <td>{ service.service_name }</td>
                        <td>{ service.description }</td>
                        <td>{ service.active }</td>
                    </tr>
                })
            }
            
        </tbody>
    </table>
</div>
}

if(document.getElementById('services-table')){
    createRoot(document.getElementById('services-table')!).render(<ServicesTable />)
}