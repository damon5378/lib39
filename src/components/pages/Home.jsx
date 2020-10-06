import React from 'react';
import '../../App.css';
import { Cards } from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';


export const Home = () => {
    return (
        <>
            <Hero />
            <Cards />
            <Footer />
        </>
    )
}
