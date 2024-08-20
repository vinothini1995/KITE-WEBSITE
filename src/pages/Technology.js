import React from 'react'
import client1 from '../images/thedallogo.png';
import client2 from '../images/bjmmlogo.png';
import client3 from '../images/dsrlogo.png';
import client4 from '../images/kbmlogo.png';
import client5 from '../images/azhillogo.png';
import client6 from '../images/nulogo.png';
import client7 from '../images/portfolio/client7.png';
import client8 from '../images/portfolio/client8.png';
import client9 from '../images/portfolio/client9.png';
import client10 from '../images/portfolio/client10.png';
import client11 from '../images/portfolio/client11.png';
import client12 from '../images/portfolio/client12.png';
import client13 from '../images/portfolio/client13.png';
import client14 from '../images/portfolio/client14.png';
import client15 from '../images/portfolio/client15.png';

import TechnologyCarousel from '../components/TechnologyCarousel';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Technology() {
	return (
		<div>
			<Header />
			<div role="main" className="main">
				<section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
					<div className="container">
						<div className="row">
							<div className="col-md-8 order-2 order-md-1 align-self-center p-static">
								<h1 className="text-color-dark font-weight-bold">Technology</h1>
							</div>
							<div className="col-md-4 order-1 order-md-2 align-self-center">
								<ul className="breadcrumb d-flex justify-content-md-end text-3-5">
									<li><a href="#\" className="text-color-default text-color-hover-primary text-decoration-none">HOME</a></li>
									<li className="active"> &nbsp; &nbsp; <i className='fa fa-chevron-right'></i> &nbsp; Technology</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<div className="container py-2 my-2">
				
					<div className="row mb-4 pb-2">
					<div className="col-lg-4 order-lg-2 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="250" style={{ animationDelay: '250ms' }}>
							<div className="card box-shadow-1 custom-border-radius-1 mb-5">
								<div className="card-body z-index-1 py-4 my-3">
									<h2 className="text-color-dark font-weight-bold text-6 mb-4">Business Domain : </h2>
									<ul className="custom-nav-list-effect-1 list list-unstyled mb-0">
										<li className="active">
											<a href="\#" className="text-decoration-none text-color-dark text-color-hover-primary text-3-5">HealthCare</a>
										</li>
										<li>
											<a href="\#" className="text-decoration-none text-color-dark text-color-hover-primary text-3-5">Finance</a>
										</li>
										<li>
											<a href="\#" className="text-decoration-none text-color-dark text-color-hover-primary text-3-5">Retail</a>
										</li>
										<li>
											<a href="\#" className="text-decoration-none text-color-dark text-color-hover-primary text-3-5">Entertainment</a>
										</li>
										<li>
											<a href="\#" className="text-decoration-none text-color-dark text-color-hover-primary text-3-5">Logistics</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-8 order-lg-1 mb-5 mb-lg-0 appear-animation animated fadeInUpShorter appear-animation-visible">
							<p className="text-4 font-weight-semibold mb-4 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="300" style={{ animationDelay: "300ms" }}>Technology is the use of knowledge to achieve attainable goals in a repeatable manner. In addition, the term "technology" can be used to describe the products of such efforts, including both tangible objects like equipment or kitchenware and intangible ones like computer software.</p>
							<p className=''>Technology is the knowledge, techniques, and procedures used to accomplish tasks. Technology can be used by people to:</p>
							<ul className='list list-icons list-icons-style-2 list-icons-lg mb-4 mb-xl-5'>
								<li class="font-weight-semibold text-color-dark">
									<i class="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>create products or services</li>
								<li class="font-weight-semibold text-color-dark">
									<i class="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>Realise objectives like conducting research or launching a spacecraft to the moon.</li>
								<li class="font-weight-semibold text-color-dark">
									<i class="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>Fix issues like starvation or sickness.</li>
								<li class="font-weight-semibold text-color-dark">
									<i class="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>Practise what we already do, but more conveniently.</li>
							</ul>

							{/* <p className="pb-1 mb-3 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500" style={{ animationDelay: "500ms" }}>Services include consulting, software development, systems integration, as well as hardware deployment and education. </p>
                            <p className="mb-1 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700" style={{ animationDelay: "700ms" }}>As a whole, the broader market for IT services is made up of several segments, including outsourcing, managed services, security services, data management, and cloud computing.</p> */}
						</div>
						
					</div>
					{/* <div className="row row-gutter-sm mb-5 appear-animation animated fadeInUpShorter appear-animation-visible"
                        data-appear-animation="fadeInUpShorter" data-appear-animation-delay="750"
                        style={{ animationDelay: '750ms' }}>
                        <ServiceCarousel />
                    </div> */}




				</div>

				<div className="container">
					<div className="row featured-boxes-full featured-boxes-full-scale">
						<TechnologyCarousel />
					</div>
				</div>






				<section className="shop section section-height-1 border-0 m-0">
			<div className="col text-center">
							<h2 className="font-weight-bold text-color-dark line-height-1 mb-0">Our Clients 
							</h2>
							
				<div className="container py-4">
					<div className="row align-items-center text-center py-2">
						<div className="col-sm-4 col-lg-2 mb-5 mb-lg-0">
							<img src={client1} alt="" className="img-fluid" />
						</div>
						<div className="col-sm-2 col-lg-2 mb-5 mb-lg-0">
							<img src={client2} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						<div className="col-sm-2 col-lg-2 mb-5 mb-lg-0">
							<img src={client3} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						<div className="col-sm-2 col-lg-2">
							<img src={client7} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						<div className="col-sm-2 col-lg-2 mb-5 mb-sm-0">
							<img src={client4} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						<div className="col-sm-2 col-lg-2 mb-5 mb-sm-0">
							<img src={client5} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						<div>&nbsp;</div><div>&nbsp;</div>
						<div className="col-sm-2 col-lg-2">
							<img src={client6} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						<div className="col-sm-2 col-lg-2">
							<img src={client12} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						
						<div className="col-sm-2 col-lg-2">
							<img src={client8} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						<div className="col-sm-2 col-lg-2">
							<img src={client9} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						<div className="col-sm-2 col-lg-2">
							<img src={client10} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						<div className="col-sm-2 col-lg-2">
							<img src={client11} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						<div>&nbsp;</div><div>&nbsp;</div>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<div className="col-sm-2 col-lg-2">
							<img src={client13} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						<div className="col-sm-2 col-lg-2">
							<img src={client14} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
						<div className="col-sm-2 col-lg-2">
							<img src={client15} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
						</div>
					</div>
					</div>
					{/* <div className="products row row-gutter-sm mb-4 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="750" style="animation-delay: 750ms;">
							<div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
								<div className="product mb-0">
									<div className="product-thumb-info border-0 mb-3">
										<div className="product-thumb-info-badges-wrapper">
											<span className="badge badge-ecommerce badge-danger">27% OFF</span>
										</div>
										<div className="addtocart-btn-wrapper">
											<a href="https://www.okler.net/previews/porto/9.9.1/shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
												<i className="icons icon-bag"></i>
											</a>
										</div>
										<a href="https://www.okler.net/previews/porto/9.9.1/ajax/demo-auto-services-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
											QUICK VIEW
										</a>
										<a href="https://www.okler.net/previews/porto/9.9.1/shop-product-sidebar-left.html">
											<div className="product-thumb-info-image bg-light">
												<img alt="" className="img-fluid" src="./Demo Auto Services _ Porto - Multipurpose Website Template_files/product-1.jpg">
											</div>
										</a>
									</div>
									<div className="d-flex justify-content-between">
										<div>
											<a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
											<h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html" className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
										</div>
									</div>
									<div title="Rated 5 out of 5">
										<input type="text" className="d-none" value="5" title="" data-plugin-star-rating="" data-plugin-options="{&#39;displayOnly&#39;: true, &#39;color&#39;: &#39;default&#39;, &#39;size&#39;:&#39;xs&#39;}">
									</div>
									<p className="price text-5 mb-3">
										<span className="sale text-color-dark font-weight-medium">49,00</span>
										<span className="amount">59,00</span>
									</p>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
								<div className="product mb-0">
									<div className="product-thumb-info border-0 mb-3">
										<div className="product-thumb-info-badges-wrapper">
											<span className="badge badge-ecommerce badge-danger">27% OFF</span>
										</div>
										<div className="addtocart-btn-wrapper">
											<a href="https://www.okler.net/previews/porto/9.9.1/shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
												<i className="icons icon-bag"></i>
											</a>
										</div>
										<a href="https://www.okler.net/previews/porto/9.9.1/ajax/demo-auto-services-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
											QUICK VIEW
										</a>
										<a href="https://www.okler.net/previews/porto/9.9.1/shop-product-sidebar-left.html">
											<div className="product-thumb-info-image bg-light">
												<img alt="" className="img-fluid" src="./Demo Auto Services _ Porto - Multipurpose Website Template_files/product-2.jpg">
											</div>
										</a>
									</div>
									<div className="d-flex justify-content-between">
										<div>
											<a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
											<h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html" className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
										</div>
									</div>
									<div title="Rated 5 out of 5">
										<input type="text" className="d-none" value="5" title="" data-plugin-star-rating="" data-plugin-options="{&#39;displayOnly&#39;: true, &#39;color&#39;: &#39;default&#39;, &#39;size&#39;:&#39;xs&#39;}">
									</div>
									<p className="price text-5 mb-3">
										<span className="sale text-color-dark font-weight-medium">49,00</span>
										<span className="amount">59,00</span>
									</p>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3 mb-4 mb-sm-0">
								<div className="product mb-0">
									<div className="product-thumb-info border-0 mb-3">
										<div className="product-thumb-info-badges-wrapper">
											<span className="badge badge-ecommerce badge-danger">27% OFF</span>
										</div>
										<div className="addtocart-btn-wrapper">
											<a href="https://www.okler.net/previews/porto/9.9.1/shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
												<i className="icons icon-bag"></i>
											</a>
										</div>
										<a href="https://www.okler.net/previews/porto/9.9.1/ajax/demo-auto-services-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
											QUICK VIEW
										</a>
										<a href="https://www.okler.net/previews/porto/9.9.1/shop-product-sidebar-left.html">
											<div className="product-thumb-info-image bg-light">
												<img alt="" className="img-fluid" src="./Demo Auto Services _ Porto - Multipurpose Website Template_files/product-3.jpg">
											</div>
										</a>
									</div>
									<div className="d-flex justify-content-between">
										<div>
											<a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
											<h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html" className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
										</div>
									</div>
									<div title="Rated 5 out of 5">
										<input type="text" className="d-none" value="5" title="" data-plugin-star-rating="" data-plugin-options="{&#39;displayOnly&#39;: true, &#39;color&#39;: &#39;default&#39;, &#39;size&#39;:&#39;xs&#39;}">
									</div>
									<p className="price text-5 mb-3">
										<span className="sale text-color-dark font-weight-medium">49,00</span>
										<span className="amount">59,00</span>
									</p>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="product mb-0">
									<div className="product-thumb-info border-0 mb-3">
										<div className="product-thumb-info-badges-wrapper">
											<span className="badge badge-ecommerce badge-danger">27% OFF</span>
										</div>
										<div className="addtocart-btn-wrapper">
											<a href="https://www.okler.net/previews/porto/9.9.1/shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
												<i className="icons icon-bag"></i>
											</a>
										</div>
										<a href="https://www.okler.net/previews/porto/9.9.1/ajax/demo-auto-services-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
											QUICK VIEW
										</a>
										<a href="https://www.okler.net/previews/porto/9.9.1/shop-product-sidebar-left.html">
											<div className="product-thumb-info-image bg-light">
												<img alt="" className="img-fluid" src="./Demo Auto Services _ Porto - Multipurpose Website Template_files/product-4.jpg">
											</div>
										</a>
									</div>
									<div className="d-flex justify-content-between">
										<div>
											<a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
											<h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html" className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
										</div>
									</div>
									<div title="Rated 5 out of 5">
										<input type="text" className="d-none" value="5" title="" data-plugin-star-rating="" data-plugin-options="{&#39;displayOnly&#39;: true, &#39;color&#39;: &#39;default&#39;, &#39;size&#39;:&#39;xs&#39;}">
									</div>
									<p className="price text-5 mb-3">
										<span className="sale text-color-dark font-weight-medium">49,00</span>
										<span className="amount">59,00</span>
									</p>
								</div>
							</div>
						</div> 
						<div className="row">
							<div className="col text-center">
								<a href="\" className="btn btn-primary custom-btn-border-radius font-weight-bold text-3 btn-px-5 btn-py-3 appear-animation animated fadeInUpShorterPlus appear-animation-visible" data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="800" style={{ animationDelay: '800ms' }}>VIEW ALL PRODUCTS</a>
							</div>
						</div> */}
				</div>
			</section>
				<Footer />
			</div>
		</div>
	)
}

export default Technology
