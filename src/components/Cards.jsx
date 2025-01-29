import React from 'react';
import Button from './Button.jsx';
import './Cards.css';

function Card({ photo, title, description, buttonLabel, alignment = "left" }) {
  return (
    <div className={`card-container ${alignment === "right" ? "card-flip" : ""}`}>
      <img src={photo} alt={title} className="card-image" />
      <div className="description-box">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;




//import React from 'react';
//import Button from './Button.jsx';
//import './Cards.css';
//
//function Cards({ photo, title, description, buttonLabel }) {
//  return (
//    <div className="card-container">
//      <img 
//        src={photo} 
//        alt={title} 
//        className="card-image" 
//      />
//      <div className="description-box">
//        <h2 className="card-title">{title}</h2>
//        <p className="card-description">{description}</p>
//        <Button label={buttonLabel} size="medium" />
//      </div>
//    </div>
//  );
//}
//
//export default Cards;




//import './Cards.css'
//
//function Cards () {
//  return (
//    <div className="card-container">
//      <img 
//        src="https://media.sonos.com/images/znqtjj88/production/fefba3c63bdadf7c6eacb6fbb0c6e28bc3b00704-3400x2267.jpg?w=2048&q=100&fit=clip&auto=format"
//        alt="picture"
//        className="card-image"
//      />
//      <div className="description-box">
//        <h2 className="card-title">Welcome to my website</h2>
//        <p className="card-description">TBD</p>
//        <Button label="Shop Now" size="medium" />
//      </div>
//    </div>
//  )
//}
//
//export default Cards 
