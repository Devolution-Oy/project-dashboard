import React from 'react';
import './Login.css';
function Login() {
  return (
    <div className = "LoginAll">
      <form method="post">
        <div className = "inputCenter">
          <div className = "inputLogin">
            <label>
                Email
              <br></br>
              <input type="email" name="email" placeholder="Email address"/>
            </label>
            <br></br><br></br>
            <label>
                Password
              <br></br>
              <input type="password" name="password" placeholder="Password" />
            </label>
            <br></br>
            <input className = "button" type="submit" value="Log In" data-testid="submit"/>
          </div>
        </div>
      </form>
    </div>

  );
}
export default Login;
