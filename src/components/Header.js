import React, { useEffect, useState } from "react";
import { Collapse } from 'bootstrap'
import logo from '../images/logo1.png';
import '../css/css';
import '../css/bootstrap.min.css';
import '../css/animate.compat.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/magnific-popup.min.css';
import '../css/star-rating.min.css';
import '../css/theme.min.css';
import '../css/theme.css';
import '../css/theme-elements.css';
import '../css/theme-blog.css';
import '../css/demo-auto-services.css';
import '../css/skin-auto-services.css';
import '../css/custom.css';
import '../css/font-awesome.min.css';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Header() {
  var [toggle, setToggle] = useState(false);

  useEffect(() => {
    var myCollapse = document.getElementById('collapseTarget')
    var bsCollapse = new Collapse(myCollapse, { toggle: false })
    toggle ? bsCollapse.show() : bsCollapse.hide()
  })


  const [menuVisible, setMenuVisible] = useState(false);
  console.log(menuVisible);

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  const openInNewTabFb = (urlFb) => {
    window.open(urlFb, '_blank', 'noreferrer');
  };

  const openInNewTabTw = (urlTw) => {
    window.open(urlTw, '_blank', 'noreferrer');
  };

  const openInNewTabInsta = (urlInsta) => {
    window.open(urlInsta, '_blank', 'noreferrer');
  };

  return (

    <div className="App">
      <Helmet>
        <title>Kitecareer</title>
        <meta name="description" content="Kitecareer offers the best website design and development, App solutions, Graphic design, and digital marketing services in Chennai, Tenkasi and Surandai." />
        <meta name="keywords" content="kitecareer, kite career, python software development services in chennai, python software development company in chennai, python software house in chennai, python development company in chennai, python web development company in chennai, top python development companies in chennai, python web development services in chennai, python app development company in chennai, best python development company in chennai, it services and solutions in chennai, business solutions in chennai, it consulting services in chennai, it consulting firms in chennai, cloud software development company in chennai, ai software development companies in Chennai, python software development services in tenkasi, python software development company in tenkasi, python software house in tenkasi, python development company in tenkasi, python web development company in tenkasi, top python development companies in tenkasi, python web development services in tenkasi, python app development company in tenkasi, best python development company in tenkasi, it services and solutions in tenkasi, business solutions in tenkasi, it consulting services in tenkasi, it consulting firms in tenkasi, cloud software development company in tenkasi, ai software development companies in tenkasi, computer software development companies, php software development company, react software development services, react native software house, it company, it outsourcing companies, best it companies, top 10 it companies, software development company, software development companies near me, software outsourcing company, software engineering consultancy, top software development companies, best software development company, mobile software development company, software application development company, web development outsourcing company, list of software development companies, top 10 software development companies world, website and software development company" />
        <meta name="template" content="Home page" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        <meta name="title" content="kitecareer" />
        <meta name="path" content="" />
        <meta name="tags" />
        <meta name="google-site-verification" content="AnvmK7REn_OhTSnZXaryZgsiDBFYcH9j374lv3ejNc8" />
        <meta name="langCode" />

        <meta property="og:title" content="kitecareer" />
        <meta property="og:description" content="Kitecareer offers the best website design and development, App solutions, Graphic design, and digital marketing services in Chennai, Tenkasi and Surandai." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kitecareer.com/" />
        <meta property="og:image" />
        <meta property="og:snippets" content="" />
      </Helmet>
      <header id="header" style={{ height: "164px" }}>
        <div className="header-body header-body-bottom-border-fixed box-shadow-none border-top-0" style={{ top: "0px" }}>
          <div className="header-top header-top-small-minheight header-top-simple-border-bottom">
            <div className="container py-2">
              <div className="header-row justify-content-between">
                <div className="header-column col-auto px-0">
                  <div className="header-row">
                    <div className="header-nav-top">
                      <ul className="nav nav-pills position-relative">
                        <li className="nav-item d-none d-sm-block">
                          <span
                            className="d-flex align-items-center font-weight-medium ws-nowrap text-3 ps-0">
                            <a href="mailto:hr@kitecareer.com" className="text-decoration-none text-color-dark text-color-hover-none">
                              <i className="icons fa fa-envelope-o font-weight-bold position-relative text-4 top-1 me-2"></i>
                              hr@kitecareer.com</a></span>
                        </li>
                        {/* <li
                          className="nav-item nav-item-left-border nav-item-left-border-remove nav-item-left-border-sm-show">
                          <span
                            className="d-flex align-items-center font-weight-medium text-color-dark ws-nowrap text-3">
                            <i className="icons fa fa-clock-o font-weight-bold position-relative text-4 top-1 me-2"
                              style={{ fontSize: '18px important' }}></i> Monday - Saturday</span>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="header-column justify-content-end col-auto px-0 d-none d-md-flex">
                  <div className="header-row">
                    <nav className="header-nav-top">
                      <ul
                        className="header-social-icons social-icons social-icons-clean social-icons-icon-gray social-icons-medium custom-social-icons-divider">
                        <li className="social-icons-facebook">
                          <a role="link"
                            onClick={() => openInNewTabFb('https://www.facebook.com/people/KiteCareer/100084486653161/?mibextid=ZbWKwL')} title="Facebook"><i
                              className="fa fa-facebook" aria-hidden="true"></i> </a>
                        </li>
                        <li className="social-icons-twitter">
                          <a role="link"
                            onClick={() => openInNewTabTw('https://twitter.com/kitecareer?s=09')} title="Twitter"><img width="18" height="18" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/twitterx--v2.png" alt="twitterx--v2"/> </a>
                        </li>
                        <li className="social-icons-linkedin">
                          <a role="link"
                            onClick={() => openInNewTab('https://www.linkedin.com/company/kitecareer/')} ><i
                              className="fa fa-linkedin"></i> </a>
                        </li>
                        <li className="social-icons-instagram">
                          <a role="link"
                            onClick={() => openInNewTabInsta('https://www.instagram.com/kitecareer2018/')} title="Instagram"><i
                              className="fa fa-instagram"></i> </a>
                        </li>
                        <li className="social-icons-instagram">
                          <a role="link"
                            onClick={() => openInNewTabInsta('https://www.threads.net/@kitecareer2018')} title="Instagram"><img width="19" height="19" src="https://img.icons8.com/pulsar-line/48/FFFFFF/threads.png" alt="threads"/> </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-container container">
            <div className="header-row">
              <div className="header-column w-100">
                <div className="header-row justify-content-between">
                  <div className="header-logo z-index-2 col-lg-2 px-0">
                    <Link to="/">
                      <img src={logo} alt="Logo" style={{ width: "123", height: "48" }} />
                    </Link>
                  </div>
                  <div className="header-nav header-nav-links justify-content-end pe-lg-4 me-lg-3">
                    <div
                      className="header-nav-main header-nav-main-arrows header-nav-main-dropdown-no-borders header-nav-main-effect-3 header-nav-main-sub-effect-1">
                      <nav className="collapse" id="collapseTarget">
                        <ul className="nav nav-pills" id="mainNav">
                          <li><Link to="/" className="nav-link">Home</Link></li>
                          <li><Link to="/about" className="nav-link">About</Link></li>
                          <li><Link to="/services" className="nav-link">Services</Link></li>
                          <li className="dropdown">
                            <Link to="/products" className="nav-link dropdown-toggle" onClick={() => setMenuVisible(menuVisible ? false : true)}>Products
                            </Link>
                            {menuVisible ? (
                              <ul className="">
                                <li><Link to="/propertymanagement" className="dropdown-item">Property management</Link></li>
                                <li><Link to="/hrautomation" className="dropdown-item">HR automation</Link></li>
                                <li><Link to="/quiz" className="dropdown-item">Quiz management</Link></li>
                                <li><Link to="/ecomm" className="dropdown-item">eCommerce</Link></li>
                              </ul>
                            ) : (<ul className="dropdown-menu">
                              <li><Link to="/propertymanagement" className="dropdown-item">Property management</Link></li>
                              <li><Link to="/hrautomation" className="dropdown-item">HR automation</Link></li>
                              <li><Link to="/quiz" className="dropdown-item">Quiz management</Link></li>
                              <li><Link to="/ecomm" className="dropdown-item">eCommerce</Link></li>
                            </ul>)}

                          </li>
                          <li><Link to="/technology" className="nav-link">Technology</Link></li>
                          <li><Link to="/portfolio" className='nav-link'>Portfolio</Link></li>
                          <li><Link to="/contactus" className="nav-link">Contact</Link></li>
                        </ul>
                      </nav>


                    </div>
                 
                  {/*  <ul className="header-extra-info custom-left-border-1 d-none d-xl-block">
                    <li className="d-none d-sm-inline-flex ms-0">
                      <div className="header-extra-info-icon">
                        <i
                          className="icons fa fa-phone text-3 text-color-dark position-relative top-3"></i>
                      </div>
                      <div className="header-extra-info-text line-height-2">
                        <span className="text-1 font-weight-semibold text-color-default">ENQUIRY
                          NOW</span>
                        <strong className="text-4"><a href="tel:+1234567890"
                          className="text-color-hover-primary text-decoration-none">+91 9498478472</a></strong>
                      </div>
                    </li>
                  </ul> */}
                  <div className="d-flex col-auto pe-0 ps-0 ps-xl-3">
                    <div className="header-nav-features ps-0 ms-1">
                      <div
                        className="header-nav-feature header-nav-features-search d-inline-flex position-relative top-3 border border-right-0 border-top-0 border-bottom-0 custom-remove-mobile-border-left px-4 me-2">
                        <a href="https://kitecareer.com/jobwebsite/"
                          className="header-nav-features-toggle text-decoration-none"
                          data-focus="headerSearch">
                          <button  type="button" className="btn btn-primary">Apply Job</button>
                        </a>
                        {/* <div className="header-nav-features-dropdown header-nav-features-dropdown-mobile-fixed border-radius-0"
                          id="headerTopSearchDropdown">
                          <form role="search"
                            action="https://www.okler.net/previews/porto/9.9.1/page-search-results.html"
                            method="get">
                            <div className="simple-search input-group">
                              <input className="form-control text-1 rounded" id="headerSearch"
                                name="q" type="search" value="" placeholder="Search..." />
                              <button className="btn" type="submit">
                                <i className="icons fa fa-search header-nav-top-icon"></i>
                              </button>
                            </div>
                          </form>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  </div>
                  <button className="btn header-btn-collapse-nav ms-4" data-bs-toggle="collapse"
                    data-bs-target=".header-nav-main nav" onClick={() => setToggle(toggle => !toggle)}>
                    <i className="fa fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
