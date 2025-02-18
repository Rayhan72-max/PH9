import React, { useState } from 'react';
import image1 from "../assets/Winter/images.jpg"
import image2 from "../assets/Winter/Blanket.jpg"
import image3 from "../assets/Winter/veterian.jpg"
import image4 from "../assets/Winter/women.jpg"
const Banner = (props) => {
    const [data,setData] = useState(false)
    return (
        <div className='bg-[url(../../src/assets/Winter/mesh-833.png)]'>
            <h1 data-aos="flip-up" className='text-4xl font-bold text-center text-blue-600' >Winter Donation</h1>
            <h1 className='text-3xl font-bold text-center mb-2'>Our Campains</h1>
            <div className='flex justify-center '>
            <div className="carousel w-3/4">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={image1}
                        className="w-full h-screen" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={image2}
                        className="w-full h-screen" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={image3}
                        className="w-full h-screen" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={image4}
                        className="w-full h-screen" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;