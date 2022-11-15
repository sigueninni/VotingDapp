import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Login() {

  let navigate = useNavigate();
  const Signin = async () => {
    navigate("admin", { replace: true });
  };


  return (
    <div className="Login">
     {/*  <div>Login</div>
      <button className='loginButton' onClick={Signin}>
        Login with your Metamask
      </button> */}

     
            <img className='Login-Img--metamaskLogo' alt="Login with your Metamask" />
            <button className="Login-buttons__login" onClick={Signin}>
              Connect to MetaMask
            </button>
          


    </div>
  );
}

export default Login;