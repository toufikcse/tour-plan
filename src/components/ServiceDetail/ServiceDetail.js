import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './ServiceDetail.css'

const ServiceDetail = (props) => {

    const { serviceId } = useParams();
    const [servicedetail, setServicedetail] = useState({})

    useEffect(() => {
        fetch('https://ghastly-dracula-35437.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {

                let result = data.find(service => service._id == serviceId);

                setServicedetail(result);
            })

    }, [serviceId])

    const { img, name, description, highlight, destination, departuretime, returntime, included, price } = servicedetail;

    return (

        <div >

            <Header></Header>

            <div className="card-style" >


                <img src={img} alt="..." />

                <h1 >{name}</h1>
                <p >{description}</p>
                <p >{highlight}</p>
                <h3>Destination : {destination}</h3>
                <h3>Departuretime : {departuretime}</h3>
                <h3>Returntime : {returntime}</h3>
                <h3>Included : {included}</h3>
                <h3>Price : ${price}</h3>
                <Link to=""><button className="button-cl">Add Order</button></Link>
            </div>
            <Footer></Footer>
        </div>

    );

};

export default ServiceDetail;