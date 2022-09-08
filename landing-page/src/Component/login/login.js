import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

// css modules ={styles.login_container}
const Login = () => {
    const navigate = useNavigate();
    
    const[email, setEmail] =useState('');
    const[password, setPassword] =useState('');

  
    const loginUser = async (e) => {
        e.preventDefault();

        const res =  await fetch('/login',{
            method : "POST",
            headers : {
                "Content-Type" :"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        
        });
        const data =res.json();

        if(res.status === 400 || !data){
            window.alert("Invaild ")
        }else{
            window.alert("Login Succesfull")
            navigate("/dashboard")
        }
    }



    return (
        <form method="POST">
        <div className={styles.login_container}>

            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} >
                        <h1>Login to Your Account</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value ={email}
                            onChange ={(e) => setEmail(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value ={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            className={styles.input}
                        />
                        <button type="submit" className={styles.green_btn} onClick={loginUser}>
                            Log In
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>New Here ?</h1>
                    <Link to="../register">
                        <button type="button" className={styles.white_btn}>
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </form>
    );


};

export default Login;