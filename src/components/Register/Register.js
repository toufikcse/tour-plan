import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Register.css';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";


const Register = () => {

    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    const handleNamechange = e => {
        setName(e.target.value);

    }
    const handleEmailchange = e => {
        setEmail(e.target.value);

    }
    const handlePasswordchange = e => {
        setPassword(e.target.value);

    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be 6 carecter');
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // const user = result.user;

                setUserName();
                history.push('/home');
                // console.log(user);
                setError('');
                verifyEmail();
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className="color-back">
            <Header></Header>
            <div className="signin">
                <h2>Register: Create Account</h2>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleNamechange} className="input" type="text" name="" id="" placeholder="Name" />
                    <br />
                    <input onBlur={handleEmailchange} className="input" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePasswordchange} className="input" type="password" name="" id="" placeholder="password" />
                    <br />
                    {/* <input className="input" type="password" name="" id="" placeholder="re-enter password" />
                    <br /> */}
                    <div className="text-danger">{error}</div>
                    <br />
                    <input className="input" type="submit" value="Sign Up" />


                </form>
                <div>---------------------------------</div>
                <p>Already have an Account <Link to="/login">Log In</Link></p>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Register;