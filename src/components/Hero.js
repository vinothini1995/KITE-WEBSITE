import React from 'react'
import MainVideo from '../images/video22.mp4'
import './Hero.css'
import { Link } from 'react-router-dom'

const hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
            <div className="hero-text">
            <h2 className="font-weight-bold text-color-white text-4-5 line-height-2 line-height-sm-7 mb-0 appear-animation animated maskUp appear-animation-visible"
                                data-appear-animation="maskUp" data-appear-animation-delay="800"
                                style={{ animationDelay: '800ms' }}>Kind of work is so Best & Good</h2>
                   
                        <h1 className="text-color-white font-weight-bold text-8 pb-2 mb-4 appear-animation animated fadeInUpShorter appear-animation-visible"
                            data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1100"
                            style={{ animationDelay: '1100ms' }}><strong>Simplicity is the soul of efficiency</strong></h1>
                        
                      
                <div className="btn-group">
                    
                    <Link to="/about"
                            className="btn btn-primary custom-btn-border-radius custom-btn-arrow-effect-1 font-weight-bold text-3 px-5 btn-py-3 appear-animation animated fadeInUpShorter appear-animation-visible"
                            data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1300"
                            style={{ animationDelay: '1300ms' }}>
                            GET STARTED
                            <svg className="ms-2" version="1.1" viewBox="0 0 15.698 8.706" width="17">
                                <polygon stroke="#FFF" strokeWidth="0.1" fill="#FFF"
                                    points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 ">
                                </polygon>
                            </svg>
                        </Link>
                    
                </div>
            </div>
            
        </div>
    )
}

export default hero
