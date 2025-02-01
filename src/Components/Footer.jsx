import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
         <footer className="">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 resMB">
            <div className="row">
              <div className="col-md-6">
                <div className="ftrLog">
                  <img src="./assets/logo.png" alt="" />
                </div>
                <div className="copyright">
                  <p>ⓒ Copyright2024. Dinsaas. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ftrContacat">
                  <div className="ftrcntLink">
                    <a href="tel:+971 600 555 009">+971 600 555 009</a>
                    <a href="mailto:info@dinsas.com">info@dinsas.com</a>
                  </div>
                  <div className="ftrSocial">
                    <ul>
                      <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="row">
              <div className="col-md-7 col-lg-8">
                <div className="ftrLink ftrPl">
                  <h4>Company</h4>
                  <div>
                    <ul>
                      <li>
                      <Link to="/company">Company</Link></li>
                      <li><Link to="">Terms and Conditions</Link></li>
                      <li>
                      <Link to="/blog">Blog</Link></li>
                    </ul>
                    <ul>
                      <li>
                      <Link to="">Careers</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                      <li>
                      <Link to="">Newsroom</Link></li>
                    </ul>
                  </div>

                </div>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="ftrLink ftrPl-2">
                  <h4>Solutions</h4>
                    <ul>
                      <li><Link to="">SaaSOrder</Link></li>
                      <li><Link to="">Techno Transact</Link></li>
                      <li><Link to="">White Label Market Place</Link></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="ftrLine"></span>
      </div>
    </footer>
    </>
  )
}

export default Footer