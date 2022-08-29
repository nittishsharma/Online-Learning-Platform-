
import Navbar from "./Navbar";
import learning from "../images/learning.png"
import Partner from "./Partner";
import React,{useState}from "react";
import Login from "./login/login";



    export default function Header(){
        const [isShowLogin,setIsShowLogin] =useState(true);

        const handleLoginClick = () =>{
            setIsShowLogin((isShowLogin)=> !isShowLogin);
        } ; 
    
    return (
        <>
        <div id='main'>
           
            <Navbar handleLoginClick={handleLoginClick}/>
            <div className="overlayer">
        <Login isShowLogin={isShowLogin} />
        </div>
            
            <div className="name">
                <h1><span>Learn Everything</span></h1>
                <h1>You Want To Know</h1>
                <p className="details">WE Inspire & YOU Create</p>
                <button className="button button1">Log In</button>
                <button className="button button2">Join For Free</button>
            </div>
            
            

            <img className="name-img" src={learning} alt="Deatail" />
            
        </div>
        <Partner />
        
        
        </>
    )
};

