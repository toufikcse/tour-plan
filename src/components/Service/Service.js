import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const { _id, img, name, description } = props.service;
    console.log(props.service);
    const url = `/service/${_id}`;


    return (
        <div className="col-lg-4 col-sm-6 col-12 card-gap p-3 border bg-light">
            <img src={img} alt="image" />
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={url}><button className="button-cl">Book Now</button></Link>


        </div>

    );
};

export default Service;