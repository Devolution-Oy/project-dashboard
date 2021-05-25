import React from 'react';

function Login() {
  return (
    <div>
      <main className='main-content'>
        <p>Login page</p>
      </main>
      <form>
        <label>
          Email :
          <input type="email" name="email" />
        </label>
        <label>
          Password :
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>

  );
}
export default Login;
