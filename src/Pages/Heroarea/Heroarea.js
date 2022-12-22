import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/3.jpg'
const Heroarea = () => {
    return (
        <div>
            <div className="hero h-full">
                <img src={hero} alt=''/>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello Happiness!</h1>
                            <p className="mb-5">I am Monika, an Experienced gardener. Please Follow my services. Together you & i can make your garden beautiful.</p>
                            <Link to="/services"><button className="btn bg-lime-600 hover:bg-white hover:text-lime-600">Services</button></Link>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Heroarea;