import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './ContactPage.css'
const ContactPage = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-dark contact"> Contact Us </h1>
            <p>email address:smjony@gmail.com</p>
            <p>Phone Number: 0195768175</p>
            <Footer></Footer>
        </div>
    );
};

export default ContactPage;