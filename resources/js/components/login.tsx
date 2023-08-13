import React, { useState } from "react";
import { createRoot } from 'react-dom/client'
import Api from './../core/api'
import { Dna } from  'react-loader-spinner'

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const validateRegistrationForm = () => {
        if(username == '' || password == ''){
            setErrorMessage("Please complete the form")
            return false;
        }


        return true;
    }

    const submitLogin = (e) => {
        e.preventDefault()

        console.log("Form not submitted")

        if(!validateRegistrationForm()){
            console.log("Validation failed")

            // setShowModal(true)
            // return <Modal children="error" show={true}/>
        } else {
            console.log("Validation passed")
            // console.log(validateRegistrationForm())
            setLoading(true)
            setErrorMessage('')

            const params = {
                username: username,
                password: password, 
            }

            new Api().login(params).then(response=>{
                console.log("Getting data")
                console.log(response)
                console.log(response.status)
    
                setLoading(false)
    
                if(response.status == 200 || response.status == 204){
                    // setSuccessStatus('success')
                    // setUsername('')
                    // setPassword('')
                    // setRepassword('')
                    // setEmail('')

                    // e.target.submit()

                    // form_.current?.submit()

                    window.location.replace("/");
    
                   console.log("Successfully added request")
    
                   if(response.data.message == "Password matches"){
    
                    // ReactSession.setStoreType("localStorage");
                    // ReactSession.set("emailRSession", response.data.email);
                    // ReactSession.set("nameRSession", response.data.name);
    
                    // navigate("/");
                   }
                }
    
            }).catch(error => {
                setLoading(false)
                console.log("Error returned is ... ")
                console.log(error)
            })
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.getAttribute('name')){
            case 'username':
				setUsername(e.target.value)
				break;
            case "password":
                setPassword(e.target.value)
                break;
			default:
				return null;
		}
    }

    return loading == true ? <div className="row" style={{justifyContent: 'center', display: 'flex', textAlign: 'center', paddingTop: '100px', paddingBottom: '100px'}}><Dna
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  /></div> : <div className="login-form">
    <form action="/" method="get" onSubmit={submitLogin}>
        {/* {{ csrf_field() }} */}
        <div className="form-group">
            <label>Username</label>
            <input value={username} className="au-input au-input--full" type="text" name="username" placeholder="Username" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e)} />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input value={password} className="au-input au-input--full" type="password" name="password" placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e)} />
        </div>
        <div className="login-checkbox">
            <label>
                <input type="checkbox" name="remember" />Remember Me
            </label>
            <label>
                <a href="#">Forgotten Password?</a>
            </label>
        </div>
        <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
        {/* <div className="social-login-content">
            <div className="social-button">
                <button className="au-btn au-btn--block au-btn--blue m-b-20">sign in with facebook</button>
                <button className="au-btn au-btn--block au-btn--blue2">sign in with twitter</button>
            </div>
        </div>  */}
    </form>
    <div className="register-link">
        <p>
            Don't you have account?
            <a href="#">Sign Up Here</a>
        </p>
    </div>
</div>
}

if(document.getElementById('login')){
    createRoot(document.getElementById('login')!).render(<LoginForm />)
}