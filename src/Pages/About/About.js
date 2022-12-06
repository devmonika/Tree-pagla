import React from 'react';

const About = () => {
    return (
        <div>
            
        <div class="flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center my-8">
            <div class="md:py-20 lg:w-1/3 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28">
                <div class="flex flex-col items-center justify-center">
                    <h1 class="md:text-5xl text-3xl font-semibold text-center text-lime-600">About My Service</h1>
                    <p class="sm:w-96 w-full mt-6 text-base leading-6 lg:text-left text-gray-600">i provide a wide range of garden maintenance and section tidy up services. With me, you’ll have the best looking garden in the street, however for best results we recommend choosing one of our regular garden maintenance plans and have a range of options to suit your property and budget. We are also more than happy providing a one off garden maintenance and section tidy up service for you on a basis that suits you, simply get in touch with us below and we discuss the options with you.</p>
                    
                </div>
            </div>
            <div class="py-12 lg:w-1/3">
                <img src="https://i.postimg.cc/dVzPYtw5/garden-gc620fb8b5-1920.jpg" alt="image ow a woman studying" class="h-full rounded-md object-cover object-center md:block hidden" />
                <img src="https://i.postimg.cc/dVzPYtw5/garden-gc620fb8b5-1920.jpg" alt="image ow a woman studying" class="h-auto w-auto md:hidden block" />
            </div>
        </div>
    
        </div>
    );
};

export default About;