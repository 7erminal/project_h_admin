import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import Api from './../core/api'
import WLineGraph from "./../core/funcs";
import { Customers, Service, Requests, RequestNotice } from '../structs/structs'

const CustomersChart: React.FC = () => {
    const [customers, setCustomers] = useState<Array<Customers>>([])

    const allCustomers = ():void => {
        new Api().getAllCustomers()
                .then(response => {
                        console.log("Get the customers for pie chart")
                        console.log(response)

                        if(response['success']==true){
                            console.log("Success is true")

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

    useEffect(() => {
        // console.log("About to draw graph")
        allCustomers()
    },[]);

    useEffect(() => {
        console.log("About to draw chart")
        console.log(customers)
        new WLineGraph().pieGraph(['Customers','Artisans'], [customers.filter(c => c.is_host == 0).length, customers.filter(c => c.is_host == 1).length])
    },[customers]);

    return <></>
}

if(document.getElementById('customers-pie-chart')){
    createRoot(document.getElementById('customers-pie-chart')!).render(<CustomersChart />)
}