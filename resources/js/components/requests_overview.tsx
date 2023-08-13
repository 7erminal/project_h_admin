import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import SummarySlab from "./widgets/summary_slab";
import Api from '../core/api'
import { Customers, Service, Requests, RequestNotice } from '../structs/structs'
// import WLineGraph from "./../core/funcs";


const RequestsOverview: React.FC = () => {
    const [customers, setCustomers] = useState<Array<Customers>>([])
    const [requests, setRequests] = useState<Array<Requests>>([])
    const [requestNotices, setRequestNotices] = useState<Array<RequestNotice>>([])

    const allRequests = ():void => {
        new Api().getAllRequests()
                .then(response => {
                        console.log("Get the requests")
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
                        console.log("Get the request notices")
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


    useEffect(() => {
        // allServices();
        allRequests();
        allRequestNotices();
        // allCustomers();
        // new WLineGraph().drawGraph([52, 60, 55, 50, 65, 80, 57, 115],['January', 'February', 'March', 'April', 'May', 'June', 'July', ''])
    },[]);

    return <div className="row">
        <div className="col-lg-3">
            <SummarySlab items={requests!} colorCode="c3" narration="Requests"/>
        </div>
        <div className="col-lg-3">
            <SummarySlab items={requestNotices!} colorCode="c4" narration="Open Requests"/>
        </div>
        <div className="col-lg-3">
            <SummarySlab items={requests!.filter(r => r.active == '2')} colorCode="c1" narration="Pending Requests"/>
        </div>
</div>
}
 
if(document.getElementById('requests-overview-count')){
    createRoot(document.getElementById('requests-overview-count')!).render(<RequestsOverview />)
}