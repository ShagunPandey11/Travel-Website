import React from "react";
import './HeroSection.css';
import Button from './Button';

const HeroSection=()=>{
    return(
        <div className="hero-container">
            <video src="/Videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' butttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' butttonSize='btn--large'>
                    WATCH TRAILOR
                </Button>
            </div>    

        </div>
    )
}

export default HeroSection;