import Header from './components/Header'
import Banner from './components/Banner';
import BannerBottom from './components/BannerBottom';
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Technology from './pages/Technology';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Propertymanagementy from './pages/Propertymanagement';
import Hrautomation from './pages/Hrautomation';
import QuizManagement from './pages/Quiz';
import Ecommerce from './pages/Ecomm';
import Products from './pages/Products';

function App() {
  return (
      <div>
         <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/about' element={<About />}>
          </Route>
          <Route path='/services' element={<Services />}>
          </Route>
          <Route path='/technology' element={<Technology />}>
          </Route>
          <Route path='/portfolio' element={<Portfolio />}>
          </Route>
          <Route path='/contactus' element={<ContactUs />}>
          </Route>
          <Route path='/products' element={<Products />}>
          </Route>
          <Route path='/propertymanagement' element={<Propertymanagementy />}>
          </Route>
          <Route path='/hrautomation' element={<Hrautomation />}>
          </Route>
          <Route path='/quiz' element={<QuizManagement />}>
          </Route>
          <Route path='/ecomm' element={<Ecommerce />}>
          </Route>
            
        </Routes>
        
      </div>
   
  );
}

export default App;
