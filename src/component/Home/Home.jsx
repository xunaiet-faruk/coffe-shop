import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Fotter from './Fotter';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Fotter/>
        </div>
    );
};

export default Home;