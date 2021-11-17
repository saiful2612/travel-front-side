import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceOrder.css';

const PlaceOrder = (props) => {
    const{name, duration, description, image, cost,benifits, doctor, cabin } = props.desireService || { };
    
    console.log(image);

    return (
        <div className="container cardBody row pt-5">
            <div className="cardStyles text-center text-sm-center col-12 mb-5">

                <img src={image} className="img-fluid card-image" alt="" />
                <h3 className=""> {name}</h3>            
                <h5>Tour length : {duration}</h5>
                <h4 className="mt-3">Tour Cost : <span className="amount-style">{cost}</span> Taka</h4>
                <p className="px-4">{description}</p>
                <p> <span className="offer-writting">We offer :</span> <small>{benifits}</small> </p>
                
                <Link to="/home"><button className="btn btn-primary button-style">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default PlaceOrder;