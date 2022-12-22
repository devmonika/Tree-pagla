import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import Review from '../Review/Review';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const MyReview = () => {
    const {user} = useContext(AuthContext);
    const[reviews, setReviews] = useState([]);
    const[updateReview, setUpdateReview] = useState("");
    const [reload, setReload] = useState(0);
    const [updateReviewLoading, setUpdateReviewLoading] = useState(false);
// console.log(reviews);

    useEffect(()=>{
        fetch(`https://tree-pagla-server.vercel.app/myreview?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email, reload]);

    const handleDelete = (id) =>{
      
      const proceed = window.confirm('Are you sure?');
      if(proceed){
        fetch(`https://tree-pagla-server.vercel.app/myreview/${id}`,{
        method:'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
            toast.success("Data Deleted Successfully!", {
              position: toast.POSITION.TOP_CENTER
            });
            // alert("Data Deleted Successfully!");
            setReload(reload+1);           
          }
        })
      }
    }

    const handleUpdate = (review) =>{
      // console.log(id);
      setUpdateReviewLoading(true);
        fetch(`https://tree-pagla-server.vercel.app/myreview/${review._id}`,{
          
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({message:updateReview})
        })
        
        .then(res=>res.json())
        .then(data => {
          console.log(data);
          setUpdateReviewLoading(false);
          if(data.modifiedCount > 0){
            const element = document.getElementById('my-modal');
            element.checked = false;
            toast.success("Updated Successfully!", {
              position: toast.POSITION.TOP_CENTER
            });
            
            setReload(reload+1);       
          }
        })

        
    }
    
   
   
    return (
        <div className='grid grid-cols-1 gap-12 mx-10 my-12'>
          
          {
            reviews.map(review => <Review key={review._id} review={review} updateReviewLoading={updateReviewLoading} handleDelete={handleDelete} handleUpdate={handleUpdate} setUpdateReview={setUpdateReview}></Review>) 
          }
          
          <ToastContainer></ToastContainer>
        </div>
      
    );
};

export default MyReview;