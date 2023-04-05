import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" required />
        <input type="password" placeholder="password" required />
        <button>Login</button>
        <p>There's an error!</p>
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
