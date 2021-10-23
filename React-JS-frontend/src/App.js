import logo from './logo.svg';
import './App.css';
import jwt_decode from "jwt-decode";
//add ini
import {useState,useEffect}  from 'react';
import {useDispatch} from 'react-redux';
import { Route,Switch,Redirect } from "react-router-dom";

import Signin from "./Auth";
import Layout from './Template/Layout';

function App() {

  /*
  #Tipe variabel:
    const signout; //nilai yg konstanta
    let signout; //milik react
    var signout; //milik js
  */

  /*const nama2 = "halo";
  const [nama,setNama] = useState("hai"); //hanya untuk rfc
  console.log("Hasil variabel nama2:"+nama2);
  console.log("Hasil variabel nama:"+nama);
  setNama("pemograman web");
  nama = "pemograman web lanjut";
  console.log("Hasil setelah di set variabel nama:"+nama);*/

  const SignOut = () =>{
    console.log("Ini adalah sign out");
  } 


  const IsAuth = localStorage.getItem("AuthToken");
  const decodeAuth = jwt_decode(IsAuth);
  console.log(decodeAuth);
  
  const [isExpired,setIsExpired] = useState(false);
  const today = new Date(); //current time
  const expiredTime = new Date(decodeAuth.result.Expired); //time expired
  if(today > expiredTime){ //compare today dgn expiredtime
    setIsExpired(true);
  }else{
    setIsExpired(false);
  }
  

  //JSX
  return (
    <Switch>
      <Route path="/sign-in" component={Signin} />
      <Route path="/sign-out" component={SignOut} />

      {(IsAuth && isExpired) ? (
        <Layout />
      ) : (
        <Redirect to="/sign-in" />
      )}

    </Switch>
  );
}

export default App;
