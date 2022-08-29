import React from "react"


const Login=({isShowLogin}) => {
    return (
        <div className={`${isShowLogin ? "active" : ""} show`}>
        <div className="login">
            <h1>Login</h1>
            <label>Username</label>
            <input type="text" name="email" placeholder="Enter your Email"></input>
            <label>Password</label>
            <input type="password" name="password"placeholder="Enter your Password" ></input>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button" >Register</div>
        </div>
        </div>
    );
};

export default Login;