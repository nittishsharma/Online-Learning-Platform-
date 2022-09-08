import React from 'react';
import Coursebox from './Coursebox';
import Courseimage from '../images/feature_1.png';
import Courseimage2 from '../images/feature_2.png';
import Courseimage3 from '../images/feature_3.png';

function Course(){
    return(
        <div id="course">
        <div className="a-container">
        <Coursebox  image={Courseimage} title="Java Script"/>
        <Coursebox  image={Courseimage2} title="React js"/>
        <Coursebox  image={Courseimage3} title="C#" />
        
        </div>
        </div>
    )
}
export default Course;