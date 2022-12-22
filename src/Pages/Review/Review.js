import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';

const Review = ({review, handleDelete, handleUpdate, setUpdateReview, updateReviewLoading}) => {
  const {user} = useContext(AuthContext);
  const{_id, message, detailsService_name, createdAt, detailsService_img, user_name} = review;
  console.log(message);
  // console.log(review);
  
const handleChange= event =>{

  event.preventDefault();
  setUpdateReview(event.target.value);
  console.log(event.target.value);
}
    return (

 


      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img className='h-80 w-96' src={detailsService_img} alt="Album"/></figure>
          <div className="card-body text-left">
            <h2 className="card-title">{detailsService_name}</h2>
            <p>{message}</p>
            <p>{user_name}</p>
            <p>{format(new Date(createdAt),'PP')}</p>
            
            <div className="card-actions justify-end">
              
              <div className='popup'>
              <label htmlFor="my-modal" className="btn my-8 bg-lime-600 hover:bg-lime-600 border border-none">Edit</label>
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                        <div className="modal-box">
                        <div className="modal-action">
                          <label htmlFor="my-modal" className="btn bg-transparent text-lime-600 border border-none hover:bg-transparent"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></label>
                          </div>
                        <form>
                          <div className='mb-7'>
                            <h2 className='text-left text-2xl ml-4'>Write a Review<span className='text-lime-600'>...</span></h2>
                          <div class="mt-3  p-3 w-full">
                            <textarea onChange={handleChange} name="message" rows="3" class="border p-2 rounded w-full" placeholder="Write something..."></textarea>
                          </div>

                          <div class="flex justify-between mx-3">
                            <div>
                              {
                                !updateReviewLoading && <button onClick={()=>handleUpdate(review)}  class="px-4 py-2 bg-lime-600 text-white rounded font-light hover:bg-lime-600">Submit</button>

                              }
                              {
                                updateReviewLoading && <p>Updating...</p>
                              }
                          </div>
                            
                          </div>
                            </div>
                          </form>
                          
                        </div>
                      </div>
              </div> 
              <button onClick={()=>handleDelete(_id)} className="btn bg-lime-600 hover:bg-lime-600 mt-8 0    border border-none">Delete</button>
            </div>
          </div>
        </div>
       










    );
};

export default Review;