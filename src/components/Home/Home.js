import React, { useEffect, useState } from 'react';
import './Home.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Service from '../Service/Service';

const Home = () => {
    const [service, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://ghastly-dracula-35437.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <h1 className="home-serv">Services</h1>
            <div className="container ">
                <div className="row g-4">
                    {
                        service.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>
                        )
                    }

                </div>

            </div>

            <div>
                <div className="extra1">
                    <h5>Our Traveler say</h5>
                    <h1>What Our Traveller Say</h1>
                    <h1>About Us</h1>
                </div>
                <div className="cart-extra1">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col ">
                            <div class="card h-100 p-3 cart-img">
                                <img className="" src="https://i.ibb.co/3FH370z/dina.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Dina Jems</h5>
                                    <p class="card-text">The journey was a surreal dream. This world was about knowing the person you’d always wanted to be and setting your foot down to it, remembering the person you’d thought you were as a child and rejoicing in its living, breathing actuality.</p>
                                </div>

                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 p-3 cart-img">
                                <img className="cart-img" src="https://i.ibb.co/Lg9nsmS/jahid.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Jahid Hassan</h5>
                                    <p class="card-text">The journey was a surreal dream. This world was about knowing the person you’d always wanted to be and setting your foot down to it, remembering the person you’d thought you were as a child and rejoicing in its living, breathing actuality.</p>
                                </div>

                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 p-3 cart-img">
                                <img className="cart-img" src="https://i.ibb.co/stVZD6y/shawan.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Shwan Pull</h5>
                                    <p class="card-text">The journey was a surreal dream. This world was about knowing the person you’d always wanted to be and setting your foot down to it, remembering the person you’d thought you were as a child and rejoicing in its living, breathing actuality.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subscrib-m">
                <h1>Subscribe To Our Tour Plan Treavel Agency For Latest Update</h1>
                <div>
                    <div class="dis-f">
                        <input type="text" class="form-control" placeholder="Enter your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;