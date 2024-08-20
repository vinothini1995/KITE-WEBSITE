import logo from '../images/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer()
{
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
return(
    
<footer id="footer" className="border-0 mt-0">
    <div className="container py-3">
        <div className="row text-center text-md-start my-5">
            <div className="col-md-6 col-lg-4 text-center text-md-start mb-5 mb-lg-0 column1 my-0">
                <a href="\"
                    className="text-decoration-none">
                    <img src={logo} className="img-fluid" alt="" />
                </a>
                <p>
                KiteCareer is a company that provides training and services in a range of areas, including e-commerce, mobile applications, web development, and the construction of various tools and applications.
                </p>
                <ul className="social-icons social-icons-medium">
                <li className="social-icons-facebook px-2">
                          <a role="link"
                            onClick={() => openInNewTabFb('https://www.facebook.com/people/KiteCareer/100084486653161/?mibextid=ZbWKwL')} title="Facebook"><i
                              className="fa fa-facebook" aria-hidden="true"></i> </a>
                        </li>
                        <li className="social-icons-twitter px-2">
                          <a role="link"
                            onClick={() => openInNewTabTw('https://twitter.com/kitecareer?s=09')} title="Twitter"><img width="20" height="20" src="https://img.icons8.com/windows/32/1A1A1A/twitterx.png" alt="twitterx"/></a>
                        </li>
                        <li className="social-icons-linkedin px-2">
                          <a role="link"
                            onClick={() => openInNewTab('https://www.linkedin.com/company/kitecareer/')} ><i
                              className="fa fa-linkedin"></i> </a>
                        </li>
                        <li className="social-icons-instagram px-2">
                          <a role="link"
                            onClick={() => openInNewTabInsta('https://www.instagram.com/kitecareer2018/')} title="Instagram"><i
                              className="fa fa-instagram"></i> </a>
                        </li>
                        <li className="social-icons-instagram px-2">
                          <a role="link"
                            onClick={() => openInNewTabInsta('https://www.threads.net/@kitecareer2018')} title="threads"><img width="18" height="18" src="https://img.icons8.com/pulsar-line/48/1A1A1A/threads.png" alt="threads"/>  </a>
                        </li>
                </ul>
            </div>
            <div className="col-md-6 col-lg-2 mb-5 mb-lg-0 columns2">
                <h5 className="text-transform-none font-weight-bold text-color-light text-4-5 mb-4">About Us</h5>
                <p>About Company</p>
                <p>Services</p>
                <p>Products</p>
                <p>Technology</p>
                <p>Portfolio</p>
                <p>Contact</p>
                </div>
            <div className="col-md-6 col-lg-5 mb-5 mb-md-0">
                <h5 className="text-transform-none font-weight-bold text-color-light text-4-5 mb-4">Contact Us
                </h5>
                <div className="col-md-12 mb-5 mb-md-0">
                <div
                    className="feature-box flex-column flex-xl-row align-items-center align-items-lg-start text-center text-lg-start">
                    <div className="feature-box-icon bg-transparent mb-4 mb-xl-0 p-0">
                        <div
                            className="animated-icon animated fadeIn svg-fill-color-light position-relative bottom-3">
                          
                            <svg enableBackground="new 0 0 32 32" height="25" version="1.1" viewBox="0 0 32 32"
                                width="25" id="icon_101674114500747"
                                data-filename="icon-location.svg">
                                <g id="location">
                                    <path clipRule="evenodd"
                                        d="M16.002,17.746c3.309,0,6-2.692,6-6s-2.691-6-6-6   c-3.309,0-6,2.691-6,6S12.693,17.746,16.002,17.746z M16.002,6.746c2.758,0,5,2.242,5,5s-2.242,5-5,5c-2.758,0-5-2.242-5-5   S13.244,6.746,16.002,6.746z"
                                        fillRule="evenodd"></path>
                                    <path clipRule="evenodd"
                                        d="M16,0C9.382,0,4,5.316,4,12.001c0,7,6.001,14.161,10.376,19.194   C14.392,31.215,15.094,32,15.962,32c0.002,0,0.073,0,0.077,0c0.867,0,1.57-0.785,1.586-0.805   c4.377-5.033,10.377-12.193,10.377-19.194C28.002,5.316,22.619,0,16,0z M16.117,29.883c-0.021,0.02-0.082,0.064-0.135,0.098   c-0.01-0.027-0.084-0.086-0.129-0.133C12.188,25.631,6,18.514,6,12.001C6,6.487,10.487,2,16,2c5.516,0,10.002,4.487,10.002,10.002   C26.002,18.514,19.814,25.631,16.117,29.883z"
                                        fillRule="evenodd"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="feature-box-info line-height-1 ps-2">
                        <span className="d-block font-weight-bold text-color-light text-5 mb-2">Address:</span>
                        <h5 className='font-weight-bold text-4 line-height-4 font-weight-light mb-0 light-color'>Head Office</h5>
                        <p className='mb-0'>472/126J, Railway Feeder Road, Tenkasi 627811.</p>
                        <h5 className='font-weight-bold text-4 line-height-4 font-weight-light mb-0 light-color'>Branch Office</h5>
                        <p className='mb-2'>VKR complex, Behind bus stand, Surandai 627859.</p>
                        <p>Chennai Branch Opening Soon</p>
                    </div>
                </div>
            </div>
            <div className="col-md-12 mb-5 mb-md-0">
                <div
                    className="feature-box flex-column flex-xl-row align-items-center align-items-lg-start text-center text-lg-start">
                    <div className="feature-box-icon bg-transparent mb-4 mb-xl-0 p-0">
                        <i className="icons fa fa-phone text-5 text-color-light position-relative top-2"></i>
                    </div>
                    <div className="feature-box-info line-height-1 ps-2">
                        <span className="d-block font-weight-bold text-color-light text-5 pb-1 mb-1">Call Us
                            Now</span>
                        <span>+91 9498478472</span>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    </div>
    <div className="footer-copyright bg-light py-7">
        <div className="container py-7">
            <div className="row">
                <div className="col">
                    <p className="text-center text-3 mb-0">© Copyright KiteCareer @ {new Date().getFullYear()} {' '}. All Rights Reserved.</p>
                   
                </div>
            </div>
        </div>
    </div>
</footer>
)
}

export default Footer;