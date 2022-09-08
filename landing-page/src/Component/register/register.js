import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";


const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", password: "", cpassword: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        });
        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert(" Registration");
            console.log(" Registration");
            navigate("/login")
        }



    }


    return (
         <form method="POST"> 
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type="button" className={styles.white_btn}>
                            Log In
                        </button>
                    </Link>
                </div>
               
                    <div className={styles.right}>
                        <form className={styles.form_container} >
                            <h1>Create Account</h1>
                            <input
                                type="text"
                                placeholder=" Name"
                                name="name"
                               value={user.name}
                               onChange={handleInputs}
                                className={styles.input}
                            />

                            <input
                                type="email"
                                placeholder="Enter your Email"
                                name="email"
                               value={user.email}
                               onChange={handleInputs}
                                className={styles.input}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                               value={user.password}
                               onChange={handleInputs}
                                className={styles.input}
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="cpassword"
                                value={user.cpassword}
                               onChange={handleInputs}
                                className={styles.input}
                            />
                            <button type="submit" className={styles.green_btn} onClick={PostData}>
                                Register
                            </button>
                        </form>
                    </div>
                
            </div>
        </div>
     </form> 
    );

}

export default Register