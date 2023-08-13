import React, { useState, useRef } from "react";
import { createRoot } from 'react-dom/client'
import Api from './../core/api'
// import { useNavigate } from "react-router-dom";
import { Dna } from  'react-loader-spinner'
import Modal from "./Modal";

const RegisterForm: React.FC = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showModal, setShowModal] = useState(false)

    const form_  = useRef<null | HTMLFormElement>(null)


    // const navigate = useNavigate();

    const validateRegistrationForm = () => {
        if(username == '' || email == '' || password == '' || repassword == ''){
            setErrorMessage("Please complete the form")
            return false;
        }

        if(password != repassword){
            setErrorMessage("Passwords do not match")
            return false;
        }

        return true;
    }

    const submitRegistration = (e) => {
        e.preventDefault()

        console.log("Form not submitted")

        if(!validateRegistrationForm()){
            console.log("Validation failed")

            setShowModal(true)
            // return <Modal children="error" show={true}/>
        } else {
            console.log("Validation passed")
            console.log(validateRegistrationForm())
            setLoading(true)
            setErrorMessage('')

            const params = {
                name: name,
                username: username,
                password: password, 
                password_confirmation: repassword,
                email: email,
            }

            new Api().register(params).then(response=>{
                console.log("Getting data")
                console.log(response)
                console.log(response.status)
    
                setLoading(false)
    
                if(response.status == 204){
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
            case 'name':
				setName(e.target.value)
				break;
            case 'username':
				setUsername(e.target.value)
				break;
			case 'email':
				setEmail(e.target.value)
				break;
            case "password":
                setPassword(e.target.value)
                break;
            case "repassword":
                setRepassword(e.target.value)
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
    <form ref={form_} action="/" method="get" onSubmit={submitRegistration}>
        {showModal == true ? <div className="row"><div className="col">{ errorMessage }</div></div> : ''}
    <div className="form-group">
            <label>Name</label>
            <input value={name} className="au-input au-input--full" type="text" name="name" placeholder="name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e)} />
        </div>
        <div className="form-group">
            <label>Username</label>
            <input value={username} className="au-input au-input--full" type="text" name="username" placeholder="Username" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e)} />
        </div>
        <div className="form-group">
            <label>Email Address</label>
            <input value={email} className="au-input au-input--full" type="email" name="email" placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e)} />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input value={password} className="au-input au-input--full" type="password" name="password" placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e)} />
        </div>
        <div className="form-group">
            <label>Renter Password</label>
            <input value={repassword} className="au-input au-input--full" type="password" name="repassword" placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e)} />
        </div>
        <div className="login-checkbox">
            <label>
                <input type="checkbox" name="aggree" />Agree the terms and policy
            </label>
        </div>
        <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">register</button>
        <div className="social-login-content">
            <div className="social-button">
                <button className="au-btn au-btn--block au-btn--blue m-b-20">register with facebook</button>
                <button className="au-btn au-btn--block au-btn--blue2">register with twitter</button>
            </div>
        </div>
    </form>
    <div className="register-link">
        <p>
            Already have account?
            <a href="#">Sign In</a>
        </p>
    </div>
    {/* <Modal children="error" show={showModal}/> */}
</div>
}

if(document.getElementById('register-form')){
    createRoot(document.getElementById('register-form')!).render(<RegisterForm />)
}