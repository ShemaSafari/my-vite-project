
import React,{ useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import { slides } from "../assets/slides";

const Flagslider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToshow, setCardsToShow] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
  }

  useEffect(() => {
    const updateCardsToShow = () => {
      if(window.innerWidth <= 1024){
        setCardsToShow(slides.length);
    }else{
      setCardsToShow(1)
    };
};
    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return() => window.removeEventListener('resize', updateCardsToShow);

  },[])

  // const slides = [
  //   {
  //       image: `/Flags/Flag_of_Mozambique.svg.png`,
  //       title: 'Mozambique',
  //       path: '/Mozambique',
  //   },
  //   {
  //       image: `/Flags/SA flag.png`,
  //       title: 'South Africa',
  //       path: '/South Africa',
  //   },
  //   {
  //       image: `/Flags/Flag_of_Malawi.svg.png`,
  //       title: 'Malawi',
  //       path: '/Malawi',
  //   },
  //   {
  //       image: `/Flags/namibia.png`,
  //       title: 'Namibia',
  //       path: '/Namibia',
  //   },
  //   {
  //       image: `/Flags/Rwanda flag.png`,
  //       title: 'Rwanda',
  //       path: '/Rwanda',
  //   },
    
    // {
    //     image: `/Flags/Flag_of_Nigeria.svg.png`,
    //     title: 'Nigeria',
    //     path: '/Nigeria',
    // },
    // {
    //     image: `/Flags/flag-of-zimbabwe.webp`,
    //     title: 'Zimbambwe',
    //     path: '/Zimbabwe',
    // },
// ]
  return (
    <div className="bg-black    h-screen " style={{backgroundImage: `url(${'/ChatGPT-Image-africa.png'}`}}>
      <Navbar/>
      <h1 className='text-2xl text-center pt-7 text-white'><span className='text-2xl font-bold'>Explore </span> dishes through <span className='underline underline-offset-4 decoration-2 under font-light'>different countries</span></h1>
      
      {/* slider buttons */}
      <div className="flex justify-end items-center mb-8 mr-10">
        <button onClick={prevSlide}
        className="p-3 bg-gray-200 rounded mr-2 hover:bg-gray-300" arial label="previous">
          <img src="/bx-left-arrow.svg" alt="previous" />
        </button>
        
        <button onClick={nextSlide}
        className="p-3 bg-gray-200 rounded mr-2 hover:bg-gray-300" arial label="next">
          <img src="/bx-right-arrow.svg" alt="next" />
        </button>
      </div>

      {/*Flags slider */}
      <div className="overflow-hidden m-5 ">
        <div className="flex gap-8 transiton-transform duration-500
         ease-in-out" 
         style={{ transform: `translateX(-${(currentIndex * 25) / cardsToshow}%)` }}
         >
          {slides.map((slide, index)=>(
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={slide.image} path={slide.path} className="w-full h-auto mb-12 rounded-lg"/>
              <div className=" absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-2 py-2 shadow-md rounded-md">
                  <p className="text-center font-bold ">{slide.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    
    
  )
}

export default Flagslider
