import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {

    return (
        <div className="color-back">
            <Header></Header>
            <div className="about-container">
                <h1 className="welcome-color">Welcome</h1>
                <h2>Thank you so much, for visiting our website</h2>
                <h5 className="descirption"> Our Diagnostic lab very famous in dhaka. Many kinds of tests are done here. Our Diagnostic lab very famous in dhaka. Many kinds of tests are done here. All kinds of local and foreign medicines are available in our pharmacy. All kinds of local and foreign medicines are available in our pharmacy</h5>

                <h4>
                    If you have question please contact with us or Email: <span className="mail-color">tourplan24@gmail.com</span>
                </h4>
                <h5>
                    Address : 3rd flor, Shah-Ali Plaza, Dhanmondi-32, Dhaka-1216.
                </h5>
                <h5>Mobile : 01723780934, 01923780934</h5>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;