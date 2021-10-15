import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import sign from "jwt-encode";
import Logo from "../media/logo/logo-ibik-web.png";
import Background from "../media/bg/bg-3.jpg";

export function Signin() {

    const [postData,setPostData] = useState({username:'',password:''});
    const dispatch = useDispatch();
    
    const submitPost = (e) =>{
        e.preventDefault();
        let publicKey = "PWL123!@#$";
        let encription = sign(postData,publicKey);
        //dispatch({type:"SIGN_IN",param:encription});        

        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
            'token': encription 
        });
        var config = {
            method: 'post',
            url: 'http://localhost/program/IBIK/pemograman-web-lanjut-2021-2022/middleware/APIRequest/authentification',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
            .catch(function (error) {
            console.log(error);
        });

    }

    return (
        <div className="d-flex flex-column flex-root">
            <div className="login login-4 login-signin-on d-flex flex-row-fluid" id="kt_login">
                <div className="d-flex flex-center flex-row-fluid bgi-size-cover bgi-position-top bgi-no-repeat">
                    <div className="login-form text-center p-7 position-relative overflow-hidden">
                        <div className="d-flex flex-center mb-15">
                            <a href="#">
                                <img src={Logo} alt="IBIK" />
                            </a>
                        </div>
                        <div className="login-signin">
                            <div className="mb-20">
                                <h3>Sign In To Admin</h3>
                                <div className="text-muted font-weight-bold">Enter your details to login to your account:</div>
                            </div>
                            <form className="form fv-plugins-bootstrap fv-plugins-framework" id="kt_login_signin_form" novalidate="novalidate"  onSubmit={submitPost} autoComplete="off" >
                                <div className="form-group mb-5 fv-plugins-icon-container">
                                    <input type="text" name="Username" className="form-control h-auto form-control-solid py-4 px-8" value={postData.username} onChange={(e)=>setPostData({...postData, username:e.target.value })} placeholder="Username" />
                                <div className="fv-plugins-message-container"></div></div>
                                <div className="form-group mb-5 fv-plugins-icon-container">
                                    <input type="password" name="Password" className="form-control h-auto form-control-solid py-4 px-8" value={postData.password} onChange={(e)=>setPostData({...postData, password:e.target.value })} placeholder="Password" />
                                <div className="fv-plugins-message-container"></div></div>
                                
                                <button id="kt_login_signin_submit" className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4">Sign In</button>
                                <div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin