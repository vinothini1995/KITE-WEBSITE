import React from 'react'
import "./ServiceCarouselCss.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TestimonialCarousel() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
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
            <div className="card custom-border-radius-1">
                <div className="card-body">
                    <div
                        className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                        <blockquote>
                            <p
                                className="text-color-dark text-3 font-weight-light px-0 mb-2">
                                A wonderful organisation! Excellent customer help throughout the entire process. The team is extremely knowledgeable and goes above and above at every turn. </p>
                        </blockquote>
                        <div className="testimonial-author">
                            <p><strong className="font-weight-extra-bold">Thedal</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div>
            <div className="card custom-border-radius-1">
                <div className="card-body">
                    <div
                        className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                        <blockquote>
                            <p
                                className="text-color-dark text-3 font-weight-light px-0 mb-2">
                                For our project, Kite Career has always offered good service. Kitecareer has a solid technology team and ontime delivery.. Very happy to be associated with them.</p>
                        </blockquote>
                        <div className="testimonial-author">
                            <p><strong className="font-weight-extra-bold">BJMM</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div>
            <div className="card custom-border-radius-1">
                <div className="card-body">
                    <div
                        className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                        <blockquote>
                            <p
                                className="text-color-dark text-3 font-weight-light px-0 mb-2">
                                It provides a high standard of service. They are quick to address questions and concerns and produce quality work. We look forward to working with them in the futures </p>
                        </blockquote>
                        <div className="testimonial-author">
                            <p><strong className="font-weight-extra-bold">DSR Construction</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div>
            <div className="card custom-border-radius-1">
                <div className="card-body">
                    <div
                        className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                        <blockquote>
                            <p
                                className="text-color-dark text-3 font-weight-light px-0 mb-2">
                                We are grateful to Kite Career for their excellent assistance in helping us create our programme. Everyone was amazing, professional, and diligent. </p>
                        </blockquote>
                        <div className="testimonial-author">
                            <p><strong className="font-weight-extra-bold">KBM</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div>
            <div className="card custom-border-radius-1">
                <div className="card-body">
                    <div
                        className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                        <blockquote>
                            <p
                                className="text-color-dark text-3 font-weight-light px-0 mb-2">
                                Kite Career did a fantastic job of adapting our business's concept and creating a website that matched our specialty requirements. </p>
                        </blockquote>
                        <div className="testimonial-author">
                            <p><strong className="font-weight-extra-bold">Akhil Consultants</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div>
            <div className="card custom-border-radius-1">
                <div className="card-body">
                    <div
                        className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                        <blockquote>
                            <p
                                className="text-color-dark text-3 font-weight-light px-0 mb-2">
                                Great work!!! The team was solid, efficient and knowledgeable. I will be using them again. You've always been a big assistance to me. Thank you for doing such a great job! </p>
                        </blockquote>
                        <div className="testimonial-author">
                            <p><strong className="font-weight-extra-bold">NU Technology</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>

    </Slider>
  )
}

export default TestimonialCarousel
