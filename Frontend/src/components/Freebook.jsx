import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";
const Freebook = () => {

  const [book, setBook] = useState([])
    useEffect(()=>{
         const getBook = async()=>{
            try{
           const res= await axios.get("http://localhost:4001/book");
           console.log(res.data)
           setBook(res.data.filter((data) => data.category === "Free"))
            }
            catch(error){
             console.log(error)
            }
         }
         getBook();
    },[])
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mb-11 ">
        <div>
        <h1 className="text-2xl  font-bold pb-2 ">Free Offered Courses</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sunt quam dolor minima explicabo, error doloremque deserunt magni expedita quos.</p>
        </div>
       
      

      <div>
      <Slider {...settings}>
       {
        book.map((item)=>(
          <Card item={item} key={item.id} />  
        )
        
        )
       }
      </Slider>
      </div>
      </div>
    </>
  );
};

export default Freebook;
