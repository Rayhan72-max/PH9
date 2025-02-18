import React from 'react';
import Banner from '../Components/Banner';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import back from "../../src/assets/Winter/blob-haikei.svg"
import Map from 'react-map-gl/maplibre';
import GoogleMapReact from 'google-map-react';
AOS.init();


const Home = (props) => {
    return (
        <div>


            <Banner></Banner>


            <div>
                <section data-aos-delay="80" data-aos="slide-right">
                    <h1 className='font-bold text-3xl text-center text-blue-500 mt-4'>About</h1>
                    <p className='px-6'>
                        Here you can help millions of people every year lacking of proper clothes in winter season. The people from the rural part of the country are the main victims of winter season. They lack of clothes because they don't have enough money to buy clothes. You can donate your old clothes and we will be receving it.
                    </p>
                </section>
                <section data-aos-delay="80" data-aos="slide-left">
                    <h1 className='font-bold text-3xl text-center mt-4 text-blue-500'>How it Works</h1>
                    <p className='px-6'>There are so many different points from where we will receive your clothes.It would be better if you register first. If you are already signedUp the Login now.</p>
                </section>
                <section>
                    <h1 className='font-bold text-3xl text-center mt-4 text-blue-500'>What People Say About Us:</h1>
                    <section className='grid grid-cols-4 gap-4 mt-2'>
                        <div className='bg-gray-400 p-2 text-white'>
                            <h1>Rayhan</h1>
                            <p>I can trust this foundation.</p>
                            <div className="flex">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className='bg-gray-400 p-2 text-white'>
                            <h1>Kabir</h1>
                            <p>I have never saw so much organized fundation before. That's best foundation</p>
                            <div className="flex">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className='bg-gray-400 p-2 text-white'>
                            <h1>Shafin</h1>
                            <p>Volunters are so friendly. They will help you whenever you need</p>
                            <div className="flex">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className='bg-gray-400 p-2 text-white'>
                            <h1>Habib</h1>
                            <p>The volunteers behavior is so polite.</p>
                            <div className="flex">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </section>
                </section>
                <section>
                    <h1 className='font-bold text-3xl text-center text-blue-500 mt-4'>Our Goal</h1>
                    <p className='text-center'>We want to ensure no People suffers from cold just because of clothes. That's why we need your help most So please help us anyhow you can.</p>
                </section>
            </div>
        </div>
    );
};

export default Home;