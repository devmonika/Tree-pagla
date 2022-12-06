import React from 'react';
import img from '../../assets/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-lime-600 text-white">
            <div>
                <img src={img} alt='' className='h-20'/>
                <p className="font-bold">
                TreePagla <br/>Providing services since 2019
                </p> 
                <p>Copyright © 2022 - All right reserved</p>
            </div> 
            </footer>
        </div>
    );
};

export default Footer;