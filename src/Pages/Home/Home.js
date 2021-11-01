import React from 'react';
import Header from '../Header/Header';
import About from './About/About';
import Process from './Process/Process';
import Destination from './Destination/Destination';
import Success from './Success/Success';


const Home = () => {
    return (
        <div>
        <Header/>
        <Success/>
        <About/>
        
        <Process/>
        
        <Destination></Destination>
       
        
        </div>
    );
};

export default Home;