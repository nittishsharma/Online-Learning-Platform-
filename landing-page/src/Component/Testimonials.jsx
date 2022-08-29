import React from "react";
import Testimonialimg from "./Testimonialimg";




function Testimonial(){
    return(
        <>
        <div id="testimonials">
            <div className="testimonials-text1  left">
                <h2>Why should you choose Developer's Arena?</h2>
                <p>It is a challenge to put together multiple different tools to build a training ecosystem all by yourself.
                 We offer you a comprehensive toolkit including a website builder, payments system,
                 and multiple options to create online courses so you can focus on what you love: shaping bright minds.</p>
            </div>
            <div className="testimonials-2  right">
                <p>"I was looking for a fully integrated platform to host both recorded courses and live lessons. TrainerCentral
                 offers everything I need including a website builder and email marketing options. It's a hub for a training startup
                  like mine."</p>
                  <div >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv5ScTX6mGrUeqSyCna-GRBROsfzSa-AAA3w&usqp=CAU" />
                  <p >Muthuramalingam.K.S,</p>
                  <span>Training Entrepreneur, Sri Ram Stocks Solution</span>
                  </div>
                  
                  
                               
            </div>
            

        </div>
        </>
    )
}
export default Testimonial;