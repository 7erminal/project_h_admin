import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import WLineGraph from "./../core/funcs";
import Api from './../core/api'
import { Customers, Service, Requests, RequestNotice } from '../structs/structs'

const CustomerAcquisitionsGraph: React.FC = () => {
    const [customers, setCustomers] = useState<Array<Customers>>([])
    const [yPlain, setYPlain] = useState<Array<number>>([])
    const [yPlain2, setYPlain2] = useState<Array<number>>([])
    const [xPlain, setXPlain] = useState<Array<string>>([])

    const allCustomers = ():void => {
        new Api().getAllCustomers()
                .then(response => {
                        // console.log("Get the requests")
                        // console.log(response)

                        var req_resp: Array<Customers> = []

                        if(response['success']==true){
                            // console.log("Success is true")

                            response['data'].map((resp: Customers, i: number) => {
                                var date_ = new Date(resp['created_at'])
                                resp['created_at'] = date_
                            })
                            

                            setCustomers(response['data'])

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
        var dates_: Array<Date> = []
        var x_plain: Array<string> = []
        var x_plain_formatted_date: Array<string> = []
        var y_plain: Array<number> = []
        var y_plain2: Array<number> = []

        customers.map((resp: Customers, i: number)=>{
            console.log(resp)
            console.log(resp.created_at)
            // var date_ = new Date(resp['created_at'])
            // console.log("Date revamped is ")
            // console.log(date_)

            dates_.push(resp.created_at)

            // console.log(date_.get)
        })

        console.log("Max date is ")
        // Get the max date
        var max_date = new Date(Math.max.apply(Math, dates_))

        // populate date array 
        const o = 30
        var i = 30

        x_plain.push(max_date.toDateString())
        while(i > 0){
            // console.log(o-i)
            // console.log("Date was ")
            // console.log(max_date)
            max_date.setDate(max_date.getDate()-1)
            // console.log("Date now is ")
            // console.log(max_date)
            x_plain.push(max_date.toDateString())
            i--
        }

        // Loop through date array to populate y array
        x_plain.map((x: string)=>{
            console.log("The date is ")
            console.log(x)
            
            console.log(customers.filter(req => req.created_at.toDateString() == x).length)

            y_plain.push(customers.filter(req => req.created_at.toDateString() == x).length)

            y_plain2.push(customers.filter(req => req.created_at.toDateString() == x && req.is_host == 1).length)

            x = x.split(" ")[1]+" "+x.split(" ")[2]
            x_plain_formatted_date.push(x)
            
            console.log(x)
        })

        setXPlain(x_plain_formatted_date)
        setYPlain(y_plain)
        setYPlain2(y_plain2)

        console.log(max_date)
        console.log(max_date.setDate(max_date.getDate()-30))
        console.log(max_date)
    }, [customers])

    useEffect(()=>{
        new WLineGraph().drawGraph(yPlain,yPlain2,xPlain)
    },[xPlain, yPlain])

    return <></>
}

if(document.getElementById('customers-acquisition-chart')){
    createRoot(document.getElementById('customers-acquisition-chart')!).render(<CustomerAcquisitionsGraph />)
}