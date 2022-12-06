import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { webName } from '../../App';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`https://tree-pagla-server.vercel.app/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <HelmetProvider>
            <Helmet>
                <title>Services - {webName}</title>
            </Helmet>
            <h1 className='my-8 text-4xl font-semibold uppercase text-lime-600'>Services</h1>
            <div className='my-8 flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>) 
                    }
                </div>
            </div>
            <button className='btn bg-lime-600 text-white border border-none mb-8 hover:bg-lime-600'><Link to='/addservices'>Add Service</Link></button>
        </HelmetProvider>
    );
};

export default Services;