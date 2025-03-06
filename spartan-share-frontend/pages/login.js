import Image from 'next/image';
import React from 'react';
import './styles.css';

function LoginPage() {
  return (
    <div className="container">
      <div className="logo-section">
        <Image src="/logo3.jpg" alt="SpartanShare Logo" layout="responsive" width={600} height={160} priority />
      </div>
      <div className="vertical-line"></div>
      <div className="login-section">
        <div className="login-box">
          <h2>Log in</h2>
          <form>
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" />
            <button type="submit" className="login-btn">Log In</button>
            <div className="separator">— OR —</div>
            <button type="button" className="create-btn">Create New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
