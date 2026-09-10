import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
    const { data, fetchAllProducts } = getData()
    const navigate = useNavigate()

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 10 }}>
                <div 
                    style={{
                        ...style, 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        width: "42px", 
                        height: "42px", 
                        borderRadius: "50%", 
                        background: "#ffffff", 
                        border: "1px solid #e9d5ff",
                        color: "#6d28d9", 
                        position: "absolute", 
                        left: "30px",
                        boxShadow: "0 4px 14px rgba(109, 40, 217, 0.12)",
                        cursor: "pointer"
                    }}
                    className='hover:bg-purple-50 transition-all'
                >
                    <AiOutlineArrowLeft size={18} />
                </div>
            </div>
        )
    }
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 10 }}>
                <div 
                    style={{
                        ...style, 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        width: "42px", 
                        height: "42px", 
                        borderRadius: "50%", 
                        background: "#ffffff", 
                        border: "1px solid #e9d5ff",
                        color: "#6d28d9", 
                        position: "absolute", 
                        right: "30px",
                        boxShadow: "0 4px 14px rgba(109, 40, 217, 0.12)",
                        cursor: "pointer"
                    }}
                    className='hover:bg-purple-50 transition-all'
                >
                    <AiOutlineArrowRight size={18} />
                </div>
            </div>
        )
    }

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
    };

    return (
        <div className='relative'>
            <Slider {...settings}>
                {
                    data?.slice(0, 7)?.map((item, index) => {
                        return (
                            <div key={index} className='bg-gradient-to-b from-purple-50/40 via-white to-white py-12 md:py-20'>
                                <div className='max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-14 justify-between items-center px-6 md:px-12'>
                                    <div className='space-y-4 max-w-xl text-center md:text-left'>
                                        <span className='inline-block text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-100/80 px-3.5 py-1 rounded-full'>
                                            Featured Innovation
                                        </span>
                                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 line-clamp-2'>
                                            {item.title}
                                        </h1>
                                        <p className='text-slate-600 text-sm md:text-base line-clamp-3 leading-relaxed'>
                                            {item.description}
                                        </p>
                                        <div className='pt-2'>
                                            <button 
                                                onClick={() => navigate(`/products/${item.id}`)}
                                                className='bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2.5 rounded-full text-sm shadow-sm hover:shadow-md hover:shadow-purple-500/25 transition-all cursor-pointer'
                                            >
                                                Explore Now &rarr;
                                            </button>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div className='w-64 h-64 md:w-80 md:h-80 bg-white rounded-3xl p-6 border border-purple-100 shadow-[0_10px_35px_rgba(124,58,237,0.08)] flex items-center justify-center hover:scale-105 transition-transform duration-300'>
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className='max-h-full max-w-full object-contain'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }              
            </Slider>
            <Category/>
        </div>
    )
}

export default Carousel
