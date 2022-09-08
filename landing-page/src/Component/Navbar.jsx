import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link} from 'react-router-dom';
// import Login from "./login";



function Navbar(){
    

    

    const [nav,setnav] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 50){
            setnav (true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    return(
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#main' className='logo'>
                <img src={logo} alt='' />
            </a>
            <input type='checkbox' className="menu-btn" id='menu-btn'/>
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><a href="#main">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#course">Course</a></li>
                <li><a href="#testimonials">Testimonial</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <Link to="/login">
                <button  className="button button3">Log In</button>
                </Link>
                
               
               {/* <button className="button button2">Join For Free</button>*/}
            </ul>
            
            
        </nav>)


}
export default Navbar;