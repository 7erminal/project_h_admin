import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import Api from './../core/api'
import WLineGraph from "./../core/funcs";
import { Customers, Service, Requests, RequestNotice } from '../structs/structs'

const RequestsChart: React.FC = () => {
    const [requests, setRequests] = useState<Array<Requests>>([])
    const [requestNotices, setRequestNotices] = useState<Array<RequestNotice>>([])

    const allRequests = ():void => {
        new Api().getAllRequests()
                .then(response => {
                        console.log("Get the requests")
                        console.log(response)

                        var req_resp: Array<Requests> = []

                        if(response['success']==true){
                            // console.log("Success is true")

                            response['data'].map((resp: Requests, i: number) => {
                                var date_ = new Date(resp['created_at'])
                                resp['created_at'] = date_
                            })
                            

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
        // console.log("About to draw graph")
        allRequests()
        allRequestNotices()
    },[]);

    useEffect(() => {
        // console.log("About to draw graph")
        new WLineGraph().pieGraph(['Requests','Request Notices'], [requests.length, requestNotices.length])
    },[requests, requestNotices]);

    return <></>
}

if(document.getElementById('requests-pie-chart')){
    createRoot(document.getElementById('requests-pie-chart')!).render(<RequestsChart />)
}