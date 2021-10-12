import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import sign from "jwt-encode";

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
        <div id="auth">
            <div className="container">            
                <form action="" method="post" onSubmit={submitPost} >
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="Username" className="form-control" value={postData.username} onChange={(e)=>setPostData({...postData, username:e.target.value })}  />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="Password" className="form-control" value={postData.password} onChange={(e)=>setPostData({...postData, password:e.target.value })}  />
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-success" type="submit">Sign In</button>
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Signin