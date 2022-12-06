import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/logo.png';
import { AuthContext } from '../../Context/Authprovider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
  
  
  
    const signOut = () =>{
      logOut()
      .then( ()=>{
  
      })
      .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-lime-600">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-lime-600 rounded-box w-52">
                        <li className='text-white'><Link to='/' className='hover:bg-lime-600 focus:bg-lime-600'>Home</Link></li>
                        <li className='text-white'><Link to='/services' className='hover:bg-lime-600 focus:bg-lime-600'>Services</Link></li>
                        <li className='text-white'><Link to='/blog' className='hover:bg-lime-600 focus:bg-lime-600'>Blog</Link></li>
                    </ul>
                    </div>
                    <div className='flex'>
                        <img src={img} alt='' className='h-10'/>
                        <Link to='/' className="text-white font-semibold upper-case text-2xl"> TreePagla</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    <li className='text-white'><Link to='/' className='hover:bg-lime-600 focus:bg-lime-600'>Home</Link></li>
                   
                    <li className='text-white'><Link to='/services' className='hover:bg-lime-600 focus:bg-lime-600'>Services</Link></li>
                    <li className='text-white'><Link to='/blog' className='hover:bg-lime-600 focus:bg-lime-600'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end outline-white">
                {
                    user?.uid ?
                    
                    <>
                    <span><Link to='/addservices'><button className=" hover:bg-lime-600 text-white">Add Service</button></Link></span>
                    <span><Link to='/myreview'><button className="hover:bg-lime-600 text-white mx-3">My Review</button></Link></span>
                    <span><button onClick={signOut} className="btn btn-outline hover:bg-lime-600 text-white">Log Out</button></span>
                    </>
                    
                    :
                    <>
                    <Link to="/login" className="btn btn-outline hover:bg-lime-600 text-white">Login</Link>
                    </>
                }
                
                </div>
                </div>
        </div>
    );
};

export default Header;