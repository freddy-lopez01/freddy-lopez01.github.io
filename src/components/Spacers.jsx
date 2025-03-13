import React, { useEffect } from "react";
import "./Spacers.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Spacers = ({ title }) => {
  useEffect(() => {
    // Target elements with the class 'box' and apply GSAP animations
    gsap.to(".box", {
      x: 400, // Example: Move the element 100px to the right
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".box",  // Trigger the animation when '.box' enters the viewport
        start: "top 90%",  // Start animation when the top of the '.box' is 80% from the top of the viewport
        end: "bottom top", // End the animation when the bottom of the '.box' hits the top of the viewport
        scrub: true,       // Smoothly scrubs the animation
      }
    });
	gsap.to(".subbox1", {
      x: 500, // Example: Move the element 100px to the right
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".box",  // Trigger the animation when '.box' enters the viewport
        start: "top 30%",  // Start animation when the top of the '.box' is 80% from the top of the viewport
        end: "bottom top", // End the animation when the bottom of the '.box' hits the top of the viewport
        scrub: true,       // Smoothly scrubs the animation
      }
    });
	gsap.to(".subbox2", {
      x: 500, // Example: Move the element 100px to the right
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".box",  // Trigger the animation when '.box' enters the viewport
        start: "top 30%",  // Start animation when the top of the '.box' is 80% from the top of the viewport
        end: "bottom top", // End the animation when the bottom of the '.box' hits the top of the viewport
        scrub: true,       // Smoothly scrubs the animation
      }
    });
	gsap.to(".subbox3", {
      x: 500, // Example: Move the element 100px to the right
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".box",  // Trigger the animation when '.box' enters the viewport
        start: "top 30%",  // Start animation when the top of the '.box' is 80% from the top of the viewport
        end: "bottom top", // End the animation when the bottom of the '.box' hits the top of the viewport
        scrub: true,       // Smoothly scrubs the animation
      }
    });
  }, []);  // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="spacers-container">
      <div className="box"> {title} </div> {/* Apply GSAP animation to this box */}
	  	<div className="subtitles">
      		<div className="subbox1"> Supercomuting</div> {/* Apply GSAP animation to this box */}
      		<div className="subbox2"> Engineering</div> {/* Apply GSAP animation to this box */}
      		<div className="subbox3"> System Administration </div> {/* Apply GSAP animation to this box */}
	  	</div>
    </div>
  );
};

export default Spacers;
