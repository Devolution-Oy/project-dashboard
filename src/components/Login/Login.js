import React from 'react';

function Login() {
  return (
    <div>
      <main className='main-content'>
        <p>Login page</p>
      </main>
      <form method="post">
        <label>
          Email :
          <input type="email" name="email" placeholder="email"/>
        </label>
        <br></br>
        <label>
          Password :
          <input type="password" name="password" placeholder="password" />
        </label>
        <br></br>
        <input type="submit" value="Envoyer" />
      </form>
    </div>

  );
}
export default Login;
