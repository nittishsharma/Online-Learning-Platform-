import React from "react";

function About(props) {
    return (
        <div id="about">
            <div className="about-image">
                <img src={props.img} alt="" />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>
                    Develop skills for real career growth with Cutting-edge curriculum designed in guidance with
                    industry and academia to develop yours skills Leading practitioners who bring current
                    best practices and case studies to sessions that fit into your work schedule.



                </p>
            </div>

        </div>
    )
}

export default About;