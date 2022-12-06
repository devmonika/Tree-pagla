import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider';

const UserReview = ({showReview}) => {
    // console.log(showReview);
    const{user} = useContext(AuthContext);
    // console.log(user);
    // const{message} = showReviews;
    return (
        <div>
            <div class=" py-12 px-4 md:px-6 lg:px-40 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
            <div class="flex flex-col justify-start items-start w-full space-y-8">
                <div class="flex justify-start items-start">
                    <p class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-lime-600 dark:text-white ">Reviews</p>
                </div>
                <div class="w-full flex justify-start items-start flex-col bg-gray-50 dark:bg-gray-800 p-8">
                    <div class="flex flex-col md:flex-row justify-between w-full">
                        <div class="flex flex-row justify-between items-start">
                            <p class="text-xl text-left font-medium leading-normal text-red-800">{showReview.message}</p>
                            <button onclick="showMenu(true)" class="ml-4 md:hidden">
                                <img id="closeIcon" class="dark:hidden" src="../svg/svg2.svg" alt="stars"/>
                                <img id="closeIcon" class="hidden dark:block" src="../svg/svg2.svg" alt="stars"/>
                                <img id="openIcon" class="transform rotate-180 hidden dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productReview1-svg2.svg

" alt="stars"/>
                                <img id="openIcon" class="transform rotate-180 hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productReview1-svg2.svg

" alt="stars"/>
                                
                            </button>
                        </div>
                        <div class="cursor-pointer mt-2 md:mt-0">
                           <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productReview1-svg1.svg" alt="stars"/>
                           <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productReview1-svg1dark.svg" alt="stars"/>
                        </div>
                    </div>
                    <div class="md:block">
                        
                       
                        <div class="mt-6 flex justify-start items-center flex-row space-x-2.5">
                            <div>
                                <img className='rounded-lg' src={showReview.user_photo} alt="girl-avatar" />
                            </div>
                            <div class="flex flex-col justify-start items-start space-y-2">
                                <p class="text-base font-medium leading-none text-gray-800 dark:text-white">{user?.displayName ? user?.displayName : "Unknown"}</p>
                                <p class="text-sm leading-none text-gray-600 dark:text-white">{showReview.createdAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UserReview;