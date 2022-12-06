import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider';

const AddService = () => {
    const {user} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image_url = form.image_url.value;
        const email = user.email;
        const price = form.price.value;
        const details = form.details.value;
        // console.log(name, email, servicePhoto, price, serviceDetails);

        const addService = {
            serviceName:title,
            image_url,
            details,
            price,
            email,

        }
        if(details.length>100){
            alert("Please write Atleast 100 letters");
        };

        fetch('https://tree-pagla-server.vercel.app/addservices',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(addService)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('Service Added Successfully!');
                form.reset();
            }
        })
        .catch(err=>console.error(err));
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-4xl font-semibold my-8 text-lime-600">Add A Service</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body w-96">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" readOnly/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Service Name</span>
                    </label>
                    <input type="text" name="title" placeholder="service name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Photo</span>
                    </label>
                    <input type="text" name="image_url" placeholder="Service Photo " className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="price" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Details</span>
                    </label>
                    <input type="text" name="details" placeholder="service details" className="textarea py-10 input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-lime-600 hover:bg-lime-600 border border-none">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;