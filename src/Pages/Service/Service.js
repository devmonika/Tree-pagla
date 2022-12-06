import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { title, image_url, details, price} = service;
    return (
        <div>
            <div className="card w-96 h-82 bg-base-100 shadow-xl image-full">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title text-lime-500">{title}</h2>
                <p>{details?.slice(0, 100)}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                <button className="btn bg-lime-600 border border-none hover:bg-white hover:text-lime-600"><Link to={`/service/${service._id}`}>See Details</Link></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Service;