import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import Api from './../core/api'
import { RequestResponse } from './../structs/structs'
import ResponseMessageWidget from "./widgets/response_message_widget";

const ResponseMessages: React.FC = () => {
    const [requestResponses, setRequestResponses] = useState<Array<RequestResponse>>([])

    const getRequestResponseMessages = ():void => {
        new Api().getAllRequestResponses()
                .then(response => {
                        console.log("Get the request responses")
                        console.log(response)

                        if(response['success']==true){
                            console.log("Success is true")

                            setRequestResponses(response['data'])

                        } else {
                            console.log("an error occurred")
                        }
                        
                        }
                    );
    }

    useEffect(() => {
        getRequestResponseMessages();
    },[]);

    return (<div className="row">
    <div className="col-md-12">
        <h3 className="title-5 m-b-35">Response Messages</h3>
        <div className="table-data__tool">
            {/* <div className="table-data__tool-left">
                <div className="rs-select2--light rs-select2--md">
                    <select className="js-select2" name="property">
                        <option selected={true}>All Properties</option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                    </select>
                    <div className="dropDownSelect2"></div>
                </div>
                <div className="rs-select2--light rs-select2--sm">
                    <select className="js-select2" name="time">
                        <option selected={true}>Today</option>
                        <option value="">3 Days</option>
                        <option value="">1 Week</option>
                    </select>
                    <div className="dropDownSelect2"></div>
                </div>
                <button className="au-btn-filter">
                    <i className="zmdi zmdi-filter-list"></i>filters</button>
            </div> */}
            {/* <div className="table-data__tool-right">
                <button className="au-btn au-btn-icon au-btn--green au-btn--small">
                    <i className="zmdi zmdi-plus"></i>add item</button>
                <div className="rs-select2--dark rs-select2--sm rs-select2--dark2">
                    <select className="js-select2" name="type">
                        <option selected={true}>Export</option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                    </select>
                    <div className="dropDownSelect2"></div>
                </div>
            </div> */}
        </div>
        <ResponseMessageWidget requestResponses={requestResponses} />
    </div>
</div>);
}

if(document.getElementById('message-table')){
    createRoot(document.getElementById('message-table')!).render(<ResponseMessages />)
}