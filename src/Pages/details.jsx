import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = (props) => {
    const newCampains = useLoaderData();
    console.log(newCampains)
    const id = useParams();
    console.log(id.id)

    const newCampain = newCampains.find(c=>c.id==id.id);
    console.log(newCampain.title)
    const handleClick = (e) =>{
        e.preventDefault();
        document.getElementById("donatForm").reset();
        toast("Thank You!"+"\n"+"We will reach your destination soon.")
        
    }

    return (
        <div>
            
                <div className="card bg-base-100 w-96 shadow-sm m-auto mt-2">
                <figure>
                    <img
                        src={newCampain.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{newCampain.title}</h2>
                    <p>{newCampain.description}</p>
                    <h2>{newCampain.division}</h2>
                    <h2>{newCampain.status}</h2>
                    <h2>{newCampain.contactInfo}</h2>
                </div>
                <form id='donatForm' onSubmit={handleClick} className='flex flex-col gap-1'>
                    <h1 className='text-4xl font-bold'>Choose Your Donation:</h1>
                    <label>Quantity</label>
                    <input type='text' name='quantity' placeholder='2 Blanket' ></input>
                    <label>Item</label>
                    <input type='text' name='quantity' placeholder='Blanket,Jacket' ></input>
                    <label>Pick Up Location</label>
                    <input type='text' name='quantity' placeholder='House 12,Road 5,Dhanmondi' ></input>
                    <label>Additional Notes</label>
                    <input type='text' name='quantity' placeholder='write a note' ></input>
                    <button type='submit' className='btn btn-primary w-full'>Submit</button>
                    <ToastContainer position="top-center"></ToastContainer>
                </form>
            </div>
            
        </div>
    );
};

export default Details;