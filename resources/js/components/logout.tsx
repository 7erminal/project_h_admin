import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import Api from './../core/api';

const Logout: React.FC = () => {
    const [loading, setLoading] = useState(false)

    const submitLogout = (e) => {
        e.preventDefault()

        console.log("Form not submitted")

            console.log("Validation passed")
            // console.log(validateRegistrationForm())
            setLoading(true)


            new Api().logout().then(response=>{
                console.log("Getting data")
                console.log(response)
                console.log(response.status)
    
                setLoading(false)
    
                if(response.status == 200 || response.status == 204){

                    window.location.replace("/");
    
                   console.log("Successfully logged out")
                }
    
            }).catch(error => {
                setLoading(false)
                console.log("Error returned is ... ")
                console.log(error)
            })
        
    }


    return <form action="/logout" method="post" onSubmit={submitLogout}>
    <button className="btn btn-link" type="submit" >
    <i className="zmdi zmdi-power"></i> Logout</button>
</form>
}

if(document.getElementById('logout')){
    createRoot(document.getElementById('logout')!).render(<Logout />)
}