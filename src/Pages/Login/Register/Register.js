import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { webName } from '../../../App';
import { AuthContext } from '../../../Context/Authprovider';

const Register = () => {

    const {creatUser} = useContext(AuthContext);
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        creatUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.error(error))
    }

    return (
        <HelmetProvider>
            <Helmet>
				<title>Register - {webName}</title>
			</Helmet>
            <div>
            <div class="max-w-md mx-auto bg-white shadow-xl rounded my-8">
                
                <div class="bg-lime-600 rounded shadow-lg pt-8 pb-16">
                    <div class="text-center text-white text-xl mb-6">Register Now!</div>
                    <form onSubmit={handleRegister} class="w-4/5 mx-auto">
                    <div class="flex items-center bg-white rounded shadow-md mb-4">
                        <span class="px-3">
                        <svg class="fill-current text-gray-600 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"/></svg>
                        </span>
                        <input class="w-full h-12 focus:outline-none" type="name" name="name" placeholder="Name" />
                        
                    </div>
                    <div class="flex items-center bg-white rounded shadow-md mb-4">
                        <span class="px-3">
                        <svg class="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
                        </span>
                        <input class="w-full h-12 focus:outline-none" type="email" name="email" placeholder="Email" />
                        
                    </div>
                    <div class="flex items-center bg-white rounded shadow-md mb-4">
                        <span class="px-3">
                        <svg class="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>
                        </span>
                        <input class="w-full h-12 focus:outline-none" type="password" name="password" placeholder="Password" />
                        
                    </div>
                    <p className='text-center text-white py-4'>Already have an account? Please <Link to='/login'>Login</Link></p>
                        <button type="submit" class="bg-white block mx-auto text-lime-600 text-sm  rounded shadow-md px-6 py-2">Submit</button>
                    </form>
                    
                </div>
                
            </div>
        </div>
        </HelmetProvider>
    );
};

export default Register;