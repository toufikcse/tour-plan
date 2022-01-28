import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../slider/logo.jpg';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light ">

                <Link className="navbar-brand" to="/home">
                    <div className="logo-link">
                        <img className="img-logo" src={logo} alt="logo" />
                        <h1>Tour Plan</h1>
                    </div>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse resize-item" id="navbarTogglerDemo01">

                    <ul className="navbar-nav ">
                        <li className="nav-item item-size">
                            <Link className="nav-link active" to="/home">Home</Link>
                        </li>
                        <li className="nav-item item-size">
                            <Link className="nav-link " to="/manageallorder">ManageAllOrder</Link>
                        </li>
                        <li className="nav-item item-size">
                            <Link className="nav-link " to="/myorder">MyOrder</Link>
                        </li>
                        <li className="nav-item item-size">
                            <Link className="nav-link " to="/addservice">Addservice</Link>
                        </li>
                        <li className="nav-item item-size">
                            <Link className="nav-link " to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item item-size">
                            <Link className="nav-link " to="/about">About</Link>
                        </li>
                        {!user.email && <li className="nav-item item-size">
                            <Link className="nav-link " to="/register">Register</Link>
                        </li>}
                        {user.email && <span className="nav-link user-name " style={{ color: '#1d72fb', fontSize: '20px', fontWeight: 'bold' }}>{user.displayName}</span>}
                        {
                            user.email ?
                                <button className="log-out" onClick={logOut}>Log Out</button>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link item-size" to="/login">Log in</Link>
                                </li>}


                    </ul>
                </div>

            </nav>

        </div>
    );
};

export default Header;