import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Api from './../core/api'

type Host = {
    host_details_id: number;
    location_cordinates: string;
    office_address: string;
    service_coverage_zone: string;
    official_certifications: string;
    number_of_years_practice_speciality: string;
    number_of_years_experience: string;
    referrals: string;
    specializations: string;
    languages_spoken: string;
    created_at: string;
    host_name: string;
}

const HostsTable: React.FC = () => {
    const [hosts, setHosts] = useState<Array<Host>>([]);

    const allHosts = ():void => {
        new Api().getAllHosts()
                .then(response => {
                        console.log("Get the hosts")
                        console.log(response)

                        if(response['success']==true){
                            console.log("Success is true")

                            setHosts(response['data'])
                        } else {
                            console.log("an error occurred")
                        }
                        
                        }
                    );
    }

    useEffect(() => {
        allHosts();
    },[]);

    return <div className="table-responsive m-b-40">
         <h3 className="title-5 m-b-35">Artisans</h3>
    <table className="table table-borderless table-data3">
        <thead>
            <tr>
                <th>Host Name</th>
                <th>Specializations</th>
                <th>Office Address</th>
                <th>date</th>
                <th>Number of years Experience</th>
            </tr>
        </thead>
        <tbody>
            {
                hosts.map((host: Host, i: number)=>{
                    var date_ = new Date(host.created_at).toDateString()
                    return <tr key={i}>
                        <td>{ host.host_name }</td>
                        <td>{ host.specializations }</td>
                        <td>{ host.office_address }</td>
                        <td className="process">{ date_ }</td>
                        <td>{ host.number_of_years_experience }</td>
                    </tr>
                })
            }
            
        </tbody>
    </table>
</div>
}

if(document.getElementById('hosts-table')){
    createRoot(document.getElementById('hosts-table')!).render(<HostsTable />)
}