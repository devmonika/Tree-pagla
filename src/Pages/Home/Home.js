import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { webName } from '../../App';
import About from '../About/About';
import Customer from '../Customer/Customer';
import Heroarea from '../Heroarea/Heroarea';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
// import HomeService from './HomeService/HomeService';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`https://tree-pagla-server.vercel.app/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <HelmetProvider>
            <Helmet>
				<title>Home - {webName}</title>
			</Helmet>
            <div>
                <div>
                <Heroarea></Heroarea>
                </div>
                <div>
                    <About></About>
                </div>
                <div>
                <h1 className='my-8 text-4xl font-semibold uppercase text-lime-600'>SERVICES I PROVIDE</h1>
                <div className='my-8 flex justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            services?.slice(0,3).map(service =><Service  key={service._id} service={service}></Service>)
                        }
                    </div>
                </div>
                <button className="btn bg-lime-600 border border-none hover:bg-lime-600 hover:text-white mb-8"><Link to="/services">More Services</Link></button>
            </div>
                <div>
                    <Customer></Customer>
                </div>
                <div>
                    <Testimonial></Testimonial>
                </div>
            </div>
        </HelmetProvider>
        
    );
};

export default Home;