import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-12">
                <div className="bg-white dark:bg-gray-800 border dark:border-gray-900 rounded-md flex items-center justify-center mx-4 md:w-2/3">
                    <div className="flex flex-col items-center py-16">
                        <img className="px-4 block" src="https://i.postimg.cc/FH88GpKb/download.jpg" alt=""/>
                        <h1 className="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800">OOPS!</h1>
                        <p className="px-4 pb-10 text-base leading-none dark:text-gray-200 text-center text-gray-600">No signal here! we cannot find the page you are looking for
                        </p>
                        <button className="mx-4 h-10 w-44  rounded-md text-white text-base bg-lime-600 hover:bg-bg-lime-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800"><Link to='/'>Go Back</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;