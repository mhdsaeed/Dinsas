import React, { useState } from 'react'
import { Link } from "react-router-dom";
function Header() {
  const[isVisible, setIsVisible] = useState(false);
  const handleToggle = () =>{
    setIsVisible(!isVisible)
  }
  const [isOpen, setIsOpen] = useState(false);
  const mobTogg = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
        <header>
      <div className="container">
        <div className="hdrw">
          <div className="logo">
            <a href="/">
              <img src="./assets/logo.png" alt="Dinsas" />
            </a>
          </div>
          <div className="navMenu">
            <div className={`mainMenu ${isOpen ? "show": ""}`}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product-services">Products & Services</Link></li>
                <li>
                <Link to="/partners-distributors">Partners/Distributors</Link></li>
                <li><Link to="/company">About us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li>
                <Link to="/contact">Contact us</Link></li>
              </ul>
            </div>
          </div>
          <div className={`resTogg ${isOpen ? "open": ""}`} onClick={mobTogg}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="togBlk">
            <div className="toggle" onClick={handleToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class={`contactSlide ${isVisible ? "show": ""}`}>
      <div class="slideContain">
        <div class="clseMenu" onClick={handleToggle}>
          <span></span>
          <span></span>
        </div>
        <div class="cntInfBlk">
          <h4  data-aos="fade-up"
          data-aos-duration="1000">Corporate Office</h4>
          <ul data-aos="fade-in"
          data-aos-duration="1000">
            <li><img src="./assets/icon/location.jpg" alt=""/>
            <p>
              Latifa Office Towers, 17th Floor, <br/> Sheikh Zayed Road,  Dubai , UAE

            </p>
            </li>
            <li><img src="./assets/icon/call.jpg" alt=""/>
              <a href="tel:+971600555009">+971 600 555 009</a>
              <a href="+971526214499">+971 52621 4499</a>
              </li>
              <li><img src="./assets/icon/mail.png" alt=""/>
                <a href="mailto:info@dinsas.com " class="mail">info@dinsas.com </a>
                </li>
          </ul>
        </div>
        <div class="cntInfBlk">
          <h4  data-aos="fade-up"
          data-aos-duration="1000">Corporate Office - India</h4>
          <ul data-aos="fade-in"
          data-aos-duration="1000">
            <li><img src="./assets/icon/location.jpg" alt=""/>
            <p>
              Kinfra Techno Industrial Park, <br/> Kakkanchery, <br/>  Kerala, India 

            </p>
            </li>
            <li><img src="./assets/icon/call.jpg" alt=""/>
              <a href="tel:+971600555009" class="mail">+91 8848806212</a>
              </li>
              <li><img src="./assets/icon/mail.png" alt=""/>
                <a href="mailto:india@dinsas.com " class="mail">india@dinsas.com </a>
                </li>
          </ul>
        </div>
        <div class="cntInfBlk">
          <h4  data-aos="fade-up"
          data-aos-duration="1000">Corporate Office - Oman</h4>
          <ul data-aos="fade-in"
          data-aos-duration="1000">
            <li><img src="./assets/icon/location.jpg" alt=""/>
            <p>
              2nd Floor, Tamimah Building, <br/> Al Nahdah St, Al Wattayah, <br/>Muscat – 118
            </p>
            </li>
            <li><img src="./assets/icon/call.jpg" alt=""/>
              <a href="tel:+968 97197105" class="mail">+968 97197105
              </a>
              </li>
              <li><img src="./assets/icon/mail.png" alt=""/>
                <a href="mailto:india@dinsas.com " class="mail">india@dinsas.com </a>
                </li>
          </ul>
        </div>
        <div class="ftrSocial slideSocial">
          <ul>
            <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href=""><i class="fa-brands fa-x-twitter"></i></a></li>
            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header