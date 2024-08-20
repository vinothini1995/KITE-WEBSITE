import React from 'react'
import "./ServiceCarouselCss.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import python from '../images/python.png'
import cloud from '../images/cloud.png'
import android from '../images/android.png'
import database from '../images/database.png'
import js from '../images/js.png'
import html from '../images/html.png'

function TechnologyCarousel() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
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
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
          ]
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="featured-box-full featured-box-full-primary" style={{ backgroundColor: "#006699" }}>
                    <i className="fa"><img src={python} style={{ width: '30px', height: '30px' }} alt="Python" /></i>
                    <h4>Python</h4>
                    <p className="font-weight-light">Python is one of the most versatile programming languages and is used across diverse fields from web and game development to machine learning, AI, etc.</p>
                </div>
            </div>
            <div>
                <div className="featured-box-full featured-box-full-primary" style={{ backgroundColor: "#0077b3" }}>
                    <i className="fa"><img src={cloud} alt="Big Data" /></i>
                    <h4>Cloud</h4>
                    <p className="font-weight-light">Cloud computing is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user.</p>
                </div>
            </div>
            <div>

                <div className="featured-box-full featured-box-full-primary" style={{ backgroundColor: '#0088CC' }}>
                    <i className="fa"><img src={android} alt="Android" /></i>
                    <h4>Android / IOS</h4>
                    <p className="font-weight-light">Android is one of the most popular OS in the world of smart devices, which has contributed to the wide popularity of Android applications, for ease of communication and accessibility by the customers.</p>
                </div>
            </div>
            <div>

                <div className="featured-box-full featured-box-full-primary" style={{ backgroundColor: "#0099e6" }}>
                    <i className="fa"><img src={database} alt="Database" /></i>
                    <h4>Database</h4>
                    <p className="font-weight-light">A career as Database administrator, database analyst are always the best career options up for grabs right now, for its high salary, as its always important to manage huge amount of data for a company.</p>
                </div>
            </div>
            <div>
                <div className="featured-box-full featured-box-full-primary" style={{ backgroundColor: "#006699" }}>
                    <i className="fa"><img src={python} style={{ width: '30px', height: '30px' }} alt="Python" /></i>
                    <h4>Python Framework</h4>
                    <p className="font-weight-light">Django, Flask, and Fast API are the three main Python frameworks utilised while creating online applications. They are useful in a variety of situations. We'll assess each framework to assist you in selecting your use cases.</p>
                </div>
            </div>
            <div>

                <div className="featured-box-full featured-box-full-primary" style={{ backgroundColor: '#00aaff' }}>
                    <i className="fa"><img src={js} alt="JS Framework" /></i>
                    <h4>Js Framework</h4>
                    <p className="font-weight-light">Angular, ReactJs, Vue Js are a good option for those who want to steer their career in a different direction or just to upskill their basic knowledge. It is widely popular among developers, especially on high-traffic sites.</p>
                </div>
            </div>
            <div>

                <div className="featured-box-full featured-box-full-primary" style={{ backgroundColor: '#1ab2ff' }}>
                    <i className="fa"><img src={html} alt="HTML5&CSS3" /></i>
                    <h4>HTML5 / CSS3</h4>
                    <p className="font-weight-light">An expert in HTML5/CSS makes you to create attractive and interactive webpages. E-commerce websites like amazon, twitter, google, Facebook etc., </p>
                </div>
            </div>
            
        </Slider>
    )
}

export default TechnologyCarousel
