import React from 'react';
import './Login.css';
function Login() {
  return (
    <div>
      <main className='main-content'>
      </main>
      <form method="post">
        <div className = "inputCenter">
          <label>
            <div className = "emailText">
              Email :
            </div>
            <input type="email" name="email" placeholder="Email address"/>
          </label>
          <br></br>
          <label>
            <div className = "passwordText">
              Password :
            </div>
            <input type="password" name="password" placeholder="Password" />
          </label>
        </div>
        <br></br>
        <div className = "buttonCenter">
          <input className = "button" type="submit" value="Log In" data-testid="submit"/>
        </div>
      </form>
    </div>

  );
}
export default Login;
