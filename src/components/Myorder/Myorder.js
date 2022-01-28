import React from 'react';
import useService from '../../hooks/useService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Myorder = (props) => {
    const [service] = useService();
    return (
        <div>
            <Header></Header>
            <div>

                <h4> total : {service.length}</h4>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Myorder;