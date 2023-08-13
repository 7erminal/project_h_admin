import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import Api from './../core/api'
import WLineGraph from "./../core/funcs";
import { Customers, Service, Requests, RequestNotice } from '../structs/structs'

const ServicesRequestedChart: React.FC = () => {
    const [requests, setRequests] = useState<Array<Requests>>([])
    const [services, setServices] = useState<Array<Service>>([])
    const [requestNotices, setRequestNotices] = useState<Array<RequestNotice>>([])
    const [categories, setCategories] = useState<Array<string>>([])

    const allRequests = ():void => {
        new Api().getAllRequests()
                .then(response => {
                        console.log("Get the real requests")
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

    const allServices = ():void => {
        new Api().getAllServices()
                .then(response => {
                        console.log("Get the services other cluster")
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
        // allRequestNotices()
        allServices()
    },[]);

    useEffect(() => {
        console.log("About to use reducer")
        // console.log(services.reduce((ser, curr) => {
        //     let groupKey = curr['category_name'];
        //     console.log("Services reducer")
        //     console.log(groupKey)
        //     console.log(ser)
        //     console.log(curr)

        //     if (!ser[groupKey]) {
        //         ser[groupKey] = [];
        //       }
        //       ser[groupKey].push(curr);
            
        //     return ser;
        // },{}))

        // Group services into categories
        var groupBy = requests.reduce((ser, curr) => {
            let groupKey = curr['service_name'];
            console.log("Services reducer")
            console.log(groupKey)
            console.log(ser)
            console.log(curr)

            if (!ser[groupKey]) {
                ser[groupKey] = [];
              }
              ser[groupKey].push(curr);
            
            return ser;
        },Object.create(null));

        // Get count of each category
        var catCount: Array<number> = []

        console.log("After grouping...array is now ")
        console.log(Object.keys(groupBy))
        Object.keys(groupBy).map((cat, i) => {
            console.log(groupBy[cat].length)
            var ccount = groupBy[cat].length
            catCount.push(ccount)
        })

        setCategories(Object.keys(groupBy))
        new WLineGraph().pieGraph(Object.keys(groupBy), catCount, 'percent-chart3', 'pie')
    },[services]);

    return <div className="chart-percent-3 m-b-40">
    <h3 className="title-3 m-b-25">Requested services chart by %</h3>
    {
        categories.map((cat, i) => {
            return <div className="chart-note m-b-5">
            <span className="dot dot--blue"></span>
            <span>{ cat }</span>
        </div>
        })
    }
    <div className="chart-wrap m-t-60">
        
        <canvas id="percent-chart3"></canvas>
    </div>
</div>
}

if(document.getElementById('services-requested-pie-chart')){
    createRoot(document.getElementById('services-requested-pie-chart')!).render(<ServicesRequestedChart />)
}