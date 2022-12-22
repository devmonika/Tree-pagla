import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faStopwatch, faUser } from '@fortawesome/free-solid-svg-icons';
const Customer = () => {
    return (
        <div>
            <h2 className='text-4xl font-semibold text-lime-600 my-8'>Happy Clients</h2>
            <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-y-10 my-10">
  
            <div className="">
                <div className="stat-figure text-2xl font-semibold text-lime-600">
                <FontAwesomeIcon icon={faStopwatch}></FontAwesomeIcon>
                </div>
                <div className="stat-title">Experience</div>
                <div className="stat-value">3years</div>
            </div>
            
            <div className="">
                <div className="stat-figure text-2xl font-semibold text-lime-600">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <div className="stat-title">Happy Clients</div>
                <div className="stat-value">1,200</div>
            </div>
            
            <div className="">
                <div className="stat-figure text-2xl font-semibold text-lime-600">
                <FontAwesomeIcon icon={faCube}></FontAwesomeIcon>
                </div>
                <div className="stat-title">Work Done</div>
                <div className="stat-value">1,200</div>
            </div>
            
            </div> 
        </div>
    );
};

export default Customer;