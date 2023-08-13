import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import SummarySlab from "./widgets/summary_slab";
import Api from '../core/api'
import { Customers, Service, Requests, RequestNotice } from '../structs/structs'
// import WLineGraph from "./../core/funcs";

const SummarySlabs: React.FC = () => {
    const [services, setServices] = useState<Array<Service>>([])
    const [requests, setRequests] = useState<Array<Requests>>([])
    const [requestNotices, setRequestNotices] = useState<Array<RequestNotice>>([])
    const [customers, setCustomers] = useState<Array<Customers>>([])

    const allServices = ():void => {
        new Api().getAllServices()
                .then(response => {
                        console.log("Get the services")
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

    const allRequests = ():void => {
        new Api().getAllRequests()
                .then(response => {
                        console.log("Get the services")
                        console.log(response)

                        if(response['success']==true){
                            console.log("Success is true")

                            setRequests(response['data'])

                        } else {
                            console.log("an error occurred")
                        }
                        
                        }
                    );
    }

    const allRequestNotices = ():void => {
        new Api().getAllRequestNotices()
                .then(response => {
                        console.log("Get the services")
                        console.log(response)

                        if(response['success']==true){
                            console.log("Success is true")

                            setRequestNotices(response['data'])

                        } else {
                            console.log("an error occurred")
                        }
                        
                        }
                    );
    }

    const allCustomers = ():void => {
        new Api().getAllCustomers()
                .then(response => {
                        console.log("Get the services")
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
        allServices();
        allRequests();
        allRequestNotices();
        allCustomers();
        // new WLineGraph().drawGraph([52, 60, 55, 50, 65, 80, 57, 115],['January', 'February', 'March', 'April', 'May', 'June', 'July', ''])
    },[]);

    return <div className="row">
        <div className="col-lg-3">
            <SummarySlab items={services} colorCode="c1" narration="Services"/>
        </div>
        <div className="col-lg-3">
            <SummarySlab items={requests!} colorCode="c2" narration="Requests"/>
        </div>
        <div className="col-lg-3">
            <SummarySlab items={requestNotices!} colorCode="c3" narration="Notices"/>
        </div>
        <div className="col-lg-3">
            <SummarySlab items={customers!} colorCode="c4" narration="Customers"/>
        </div>
</div>
}
 
if(document.getElementById('summary-overview')){
    createRoot(document.getElementById('summary-overview')!).render(<SummarySlabs />)
}