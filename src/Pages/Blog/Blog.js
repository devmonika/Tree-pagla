import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-5xl font-semibold text-lime-600 my-8'>Blogs</h2>
            <div className='text-left mb-10'>
           <div className="collapse shadow-lg mb-4 mt-10">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
                Difference between SQL and NoSQL?
            </div>
            <div className="collapse-content"> 
                <p>A SQL Database follows a table like structure which can have an unlimited number of rows and every data present inside the database is properly structured with Predefined Schemas, it is basically used to manipulate Relational Databases Management Systems. A NoSQL Database is a Distributed Database where the data is very unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited rows but it follows a Standard Schema Definition and can store all sorts of data models with large distributed data in the form of key-value pairs, graph databases, documents or wide-column stores.</p>
            </div>
            </div>
            <div className="collapse shadow-lg my-4">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
                What is JWT, and how does it work?
            </div>
            <div className="collapse-content"> 
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
            </div>
            </div>
            <div className="collapse shadow-lg my-4">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
                What is the difference between javascript and NodeJS?
            </div>
            <div className="collapse-content"> 
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            </div>
            <div className="collapse shadow-lg my-4">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
                How does NodeJS handle multiple requests at the same time?
            </div>
            <div className="collapse-content"> 
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;