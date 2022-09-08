import React from "react";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Course from "./Component/Course";
import Header from "./Component/Header";
import Testimonial from "./Component/Testimonials";
import aboutimage from "./images/Frame 19.png"

function Main() {
    return (

        <div className="App">

            <Header />
            <About img={aboutimage} title="Our Online Bootcamp Is An Immersive Learning Experience" />
            <Course />
            <Testimonial />
            <Contact />

        </div>

    );
}
export default Main;