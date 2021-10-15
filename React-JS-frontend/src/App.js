import logo from './logo.svg';
import './App.css';
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

  const IsAuth = true;

  if(IsAuth){
    console.log("TRUE");
  }else{
    console.log("FALSE");
  }

  //JSX
  return (
    <Switch>
      <Route path="/sign-in" component={Signin} />
      <Route path="/sign-out" component={SignOut} />

      {(IsAuth) ? (
        <Layout />
      ) : (
        <Redirect to="/sign-in" />
      )}

    </Switch>
  );
}

export default App;
