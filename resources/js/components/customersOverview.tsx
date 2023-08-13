import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import SummarySlab from "./widgets/summary_slab";
import Api from '../core/api'
import { Customers, Service, Requests, RequestNotice } from '../structs/structs'
// import WLineGraph from "./../core/funcs";


const CustomersOverview: React.FC = () => {
    const [customers, setCustomers] = useState<Array<Customers>>([])
    const [hosts, setHosts] = useState<Array<Customers>>([])

    const allCustomers = ():void => {
        new Api().getAllCustomers()
                .then(response => {
                        console.log("Get the customers")
                        console.log(response)

                        if(response['success']==true){
                            console.log("Success is true")

                            // var custs: Array<Customers> = []

                            // response['data'].map((resp:any, i: number) => {
                            //     console.log(resp['username'])
                            //     custs.push(
                            //         {
                            //             user_id: resp['user_id'],
                            //             username: resp['username'],
                            //             nationality: resp['nationality'],
                            //             email: resp['email'],
                            //             dob: resp['dob'],
                            //             date_joined: resp['date_joined'],
                            //             customer_number: resp['customer_number'],
                            //             first_name: resp['first_name'],
                            //             last_name: resp['last_name'],
                            //             ID_number: resp['ID_number'],
                            //             address: resp['address'],
                            //             gender: resp['gender'],
                            //             location: resp['location'],
                            //             profession: resp['profession'],
                            //             is_host: resp['is_host'],
                            //             is_active: resp['is_active'],
                            //             is_verified: resp['is_verified'] 
                            //         }
                            //     )
                            // })

                            console.log("Customers to set are ")
                            console.log(response['data'])

                            setCustomers(response['data'])

                            console.log(customers)

                        } else {
                            console.log("an error occurred")
                        }
                        
                        }
                    );
    }

    const getHosts = (customers_):void => {
        console.log("Setting hosts")
        console.log(customers_)
        setHosts(customers_.filter(c => c.is_host == 1))
    }

    useEffect(() => {
        // allServices();
        // allRequests();
        // allRequestNotices();
        allCustomers();
        // new WLineGraph().drawGraph([52, 60, 55, 50, 65, 80, 57, 115],['January', 'February', 'March', 'April', 'May', 'June', 'July', ''])
    },[]);

    useEffect(() => {
        getHosts(customers)
    },[customers])

    return <div className="row">
        <div className="col-lg-3">
            <SummarySlab items={customers!} colorCode="c3" narration="Customers"/>
        </div>
        <div className="col-lg-3">
            <SummarySlab items={hosts!} colorCode="c4" narration="Artisan"/>
        </div>
</div>
}
 
if(document.getElementById('customers-overview-number-of-services-hosted')){
    createRoot(document.getElementById('customers-overview-number-of-services-hosted')!).render(<CustomersOverview />)
}