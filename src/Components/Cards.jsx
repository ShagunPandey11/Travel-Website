import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

const Cards=()=>{
    return(
        <div className="cards">
            <h1>Check out the epic Destinations!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="all-cards-items">
                        <CardItem 
                            src='/Images/img-9.jpg'
                            text="Explore the hidden waterfall deep inside the waterfall jungle"
                            path='/services'
                            label='Adventure'
                        />
                        <CardItem 
                            src='/Images/img-2.jpg'
                            text="Travel through the island of bali through a Private Cruise."
                            path='/services'
                            label='Luxury'
                        />                  
                    </ul>
                    <ul className="all-cards-items">
                        <CardItem 
                            src='/Images/img-3.jpg'
                            text="Set Sail in the Atlantic Ocean visiting."
                            path='/services'
                            label='Mystery'
                        />
                        <CardItem 
                            src='/Images/img-4.jpg'
                            text="Experience Football on top of the Himalyan Mountains."
                            path='/services'
                            label='Adventure'
                        />     
                        <CardItem 
                            src='/Images/img-8.jpg'
                            text="Ride through the Sahara Desert on a guided camel tour."
                            path='/services'
                            label='Adventure'
                        />                 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

