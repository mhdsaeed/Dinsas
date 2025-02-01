import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home/Home'
import Product from './Components/Product/Product';
import Partner from './Components/Partners/Partner';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration:900, 
      once:true,
    });
  }, []);
  return (
<Router>
<Header/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/product-services" element={<Product />} />
  <Route path="/partners-distributors" element={<Partner />} />
  <Route path="/company" element={<About />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
<Footer/>
</Router>
  );
}

export default App;
