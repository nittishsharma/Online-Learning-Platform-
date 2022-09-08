
import Navbar from "./Navbar";
import learning from "../images/learning.png"
import Partner from "./Partner";
//import React,{useState}from "react";
import { Link } from "react-router-dom";





    export default function Header(){
        // const [isShowLogin,setIsShowLogin] =useState(true);

        // const handleLoginClick = () =>{
        //     setIsShowLogin((isShowLogin)=> !isShowLogin);
        // } ; 
    
    return (
        <>
        <div id='main'>
           
          <Navbar />  {/* handleLoginClick={handleLoginClick} */}
            <div className="overlayer">
        
        </div>
            
            <div className="name">
                <h1><span>Learn Everything</span></h1>
                <h1>You Want To Know</h1>
                <p className="details">WE Inspire & YOU Create</p>
                <Link to="./login">
                <button className="button button1">Log In</button>
                </Link>
                <Link to="./register">
                <button className="button button2">Join For Free</button>
                </Link>
            </div>
            
            

            <img className="name-img" src={learning} alt="Deatail" />
            
        </div>
        <Partner />
        
        
        
        </>
    )
};

