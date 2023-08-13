import React from "react";
import { RequestResponse } from './../../structs/structs'

type Props = {
    requestResponses: Array<RequestResponse>
}

const ResponseMessageWidget: React.FC<Props> = ({requestResponses}) => {
    return <div className="table-responsive table-responsive-data2">
    <table className="table table-data2">
        <thead>
            <tr>
                <th>
                    <label className="au-checkbox">
                        <input type="checkbox" />
                        <span className="au-checkmark"></span>
                    </label>
                </th>
                <th>Response ID</th>
                <th>Response</th>
                <th>Is Accepted</th>
                <th>date</th>
                {/* <th>status</th>
                <th></th> */}
            </tr>
        </thead>
        <tbody>
            {
                requestResponses.map((response: RequestResponse, i: number)=>{
                    return <tr key={i} className="tr-shadow">
                    <td>
                        <label className="au-checkbox">
                            <input type="checkbox" />
                            <span className="au-checkmark"></span>
                        </label>
                    </td>
                    <td>{ response.request_response_id }</td>
                    <td className="desc">{ response.response }</td>
                    <td>
                        <span className="block-email">{ response.accepted == 1 ? 'Accepted' : 'Processing' }</span>
                    </td>
                    <td>{ new Date(response.created_at).toDateString() }</td>
                    {/* <td>
                        <span className="status--process">{ response.active == '1' ? 'Active' : 'Inactive' }</span>
                    </td>
                    <td>
                        <div className="table-data-feature">
                            <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                <i className="zmdi zmdi-mail-send"></i>
                            </button>
                            <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                <i className="zmdi zmdi-edit"></i>
                            </button>
                            <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                <i className="zmdi zmdi-delete"></i>
                            </button>
                            <button className="item" data-toggle="tooltip" data-placement="top" title="More">
                                <i className="zmdi zmdi-more"></i>
                            </button>
                        </div>
                    </td> */}
                    {/* 
                    <td>$679.00</td>
                    <td>
                        <div className="table-data-feature">
                            <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                <i className="zmdi zmdi-mail-send"></i>
                            </button>
                            <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                <i className="zmdi zmdi-edit"></i>
                            </button>
                            <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                <i className="zmdi zmdi-delete"></i>
                            </button>
                            <button className="item" data-toggle="tooltip" data-placement="top" title="More">
                                <i className="zmdi zmdi-more"></i>
                            </button>
                        </div>
                    </td> */}
                </tr>
                })
            }
        </tbody>
    </table>
</div>
}

export default ResponseMessageWidget