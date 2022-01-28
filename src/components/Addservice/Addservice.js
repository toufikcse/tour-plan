import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import { useForm } from "react-hook-form";
import axios from 'axios';
import './Addservice.css';

const Addservice = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://ghastly-dracula-35437.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <Header></Header>
            <div className="m-5 add-s">
                <h1>Please Add a Service</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("img")} placeholder="Image url" />
                    <input type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea type="text" {...register("description")} placeholder="Description" />
                    <textarea type="text" {...register("highlight")} placeholder="Highlight" />
                    <input {...register("destination")} placeholder="Destination" />
                    <input {...register("departuretime")} placeholder="Departure Time,  Exm: 01 April, 2021 10.00AM" />
                    <input {...register("returntime")} placeholder="Return Time,   Exm: 08 April, 2021 10.00AM" />
                    <textarea type="text" {...register("included")} placeholder="Included" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input type="submit" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Addservice; <h1>Addservice</h1>