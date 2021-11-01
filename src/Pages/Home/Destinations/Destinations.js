import React from 'react';
import  './Destinations.css'
import Menubar from '../../Header/Menubar/Menubar';
import Destination from '../Destination/Destination';

const Destinations = () => {
    return (
        <div>
            <Menubar/>
            
            <Destination></Destination>
        </div>
    );
};

export default Destinations;