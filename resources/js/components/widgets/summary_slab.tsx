import React from "react";
import { Service } from './../../structs/structs'

type Props = {
    colorCode: string
    items: Array<any>
    narration: string
}

// type Service = {
//     service_name: string
//     description: string
//     process: string
//     active: string
//     location: string
//     price: string
//     expected_duration: string
//     part_payment_allowed: string
// }

const SummarySlab: React.FC<Props> = ({colorCode, items, narration}) => {
    var slabClass = "overview-item overview-item--"+colorCode;

    console.log("Items reached")
    console.log(items)

    return <div className={slabClass}>
        <div className="overview__inner">
            <div className="overview-box clearfix">
                <div className="icon">
                    <i className="zmdi zmdi-account-o"></i>
                </div>
                <div className="text">
                    <h2>{ items.length }</h2>
                    <span>{ narration }</span>
                </div>
            </div>
            <div className="overview-chart">
                <canvas id="widgetChart1"></canvas>
            </div>
        </div>
    </div>
}

export default SummarySlab;