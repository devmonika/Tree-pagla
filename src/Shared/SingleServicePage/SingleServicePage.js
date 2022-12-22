import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../Context/Authprovider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import UserReview from '../../Pages/UserReview/UserReview';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const SingleServicePage = () => {
    const detailsService = useLoaderData();
    // console.log(detailsService);

    const{user} = useContext(AuthContext);
    // console.log(detailsService);

    const {details, image_url, price, title} = detailsService;
    const [showReviews, setShoeReview] = useState([]);
    // console.log(showReviews);

    useEffect(()=>{
        fetch(`https://tree-pagla-server.vercel.app/reviews?id=${detailsService._id}`)
        .then(res => res.json())
        .then(data => setShoeReview(data))
    },[detailsService._id]);
    
  
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        
        const addReview = {
            user_name :user.displayName,
            user_email:user.email,
            user_uid:user.uid,
            user_photo:user.photoURL,
            detailsService_name: detailsService.title,
            detailsService_id: detailsService._id,
            detailsService_img: detailsService.image_url,
            message,
            createdAt: new Date (),

        }
        console.log(addReview);

        fetch('https://tree-pagla-server.vercel.app/addreview',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(addReview)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
              toast.success("Review Added Successfully!", {
                position: toast.POSITION.TOP_CENTER
              });
                // alert('Review Added Successfully!');
                form.reset();
            }
        })
        .catch(err=>console.error(err));
    }
    return (
        <div>
            
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-100 md:block">
            <PhotoProvider>
                <PhotoView src={image_url}>
                    <img className="w-full" alt="" src={image_url} />
                </PhotoView>
            </PhotoProvider>
                
            </div> 
            
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600 dark:text-gray-300 "></p>
                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{title}</h1>
                </div>
                
                <div>
                    <p className="text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">{details}</p>
                </div>
                <div>
                <p className="text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">Price : {price}</p>
                </div>
                
            </div>
        </div>
        <div>
         
  
                   
                      
                      {
                        user?.uid ?
                        
                        <div className='popup'>
                        <label htmlFor="my-modal" className="btn my-8  bg-lime-600 hover:bg-lime-600 border border-none">Add Review</label>
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                      <div className="modal">
                        <div className="modal-box">
                        <div className="modal-action">
                          <label htmlFor="my-modal" className="btn bg-transparent text-lime-600 border border-none hover:bg-transparent"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></label>
                          </div>
                        <form onSubmit={handleSubmit}>
                          <div className='mb-7'>
                            <h2 className='text-left text-2xl ml-4'>Write a Review<span className='text-lime-600'>...</span></h2>
                          <div className="mt-3  p-3 w-full">
                            <textarea name="message" rows="3" className="border p-2 rounded w-full" placeholder="Write something..."></textarea>
                          </div>

                          <div className="flex justify-between mx-3">
                            <div>
                              <button className="px-4 py-2 bg-lime-600 text-white rounded font-light hover:bg-lime-600">Submit</button>
                          </div>
                            
                          </div>
                            </div>
                          </form>
                          
                        </div>
                      </div>
                        </div>
                        :
                        <div className='popup'>
                        <label htmlFor="my-modal" className="btn my-8 bg-lime-600 hover:bg-lime-600 border border-none">Add Review</label>
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                      <div className="modal">
                        <div className="modal-box">
                        <div className="modal-action">
                          <label htmlFor="my-modal" className="btn bg-transparent text-lime-600 border border-none hover:bg-transparent"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></label>
                          </div>
                        <form onSubmit={handleSubmit}>
                          <div className='mb-7'>
                            <h2 className='text-left text-lime-600 text-2xl uppercase ml-4'>Please Log In To Add a Review<span className='text-lime-600'>...</span></h2>
                            </div>
                          </form>
                          
                        </div>
                      </div>
                        </div>
                      }



    
  
      
      
    


        
        
      {
        showReviews.map(showReview => <UserReview key={showReview._id} showReview={showReview}></UserReview>)
      }
      
    
        </div>
      
    <ToastContainer></ToastContainer>
        </div>
    );
};

export default SingleServicePage;