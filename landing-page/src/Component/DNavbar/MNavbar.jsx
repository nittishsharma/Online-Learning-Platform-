import React from 'react';
import { FaHome } from 'react-icons/fa';
import logo from './logo.png';


function DNavbar() {

    
    return (
        <>
            <div id='inline'>
               
                <div className='topnav'>
                    <a href="#home"><img src={logo} alt='' /></a>
                    <a href="#news">Tutorials</a>
                    <a href="#contact">References</a>
                    <a href="#about">Exercises </a>
                    <button className='btn'>User</button>
                    <button className='btn'>Get Certifide</button>
                </div>
                <div className="midnav">
                    <a href="/"><FaHome /></a>
                    <a href="#news">JAVASCRIPT</a>
                    <a href="#contact">REACT</a>
                    <a href="#about">NODE </a>
                </div>
            </div>
        </>
    );
}

export default DNavbar;

