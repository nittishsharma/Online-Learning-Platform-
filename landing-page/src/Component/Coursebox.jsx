import React from 'react';

function Coursebox(props){
    return(
        <div className='a-box'>
        <div className='a-b-img'>
        <img src={props.image} alt="java"/>
        </div>  
        <div className='s-b-text'>
            <h2>{props.title}</h2>
            <button className="button button3">Enroll Now</button>
        </div>  
        </div>
        
    )
}
export default Coursebox;