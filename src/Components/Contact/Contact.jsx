import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
    // Handle form submission (this is just a placeholder, customize as needed)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to server)
        console.log("Form Data Submitted:", formData);
      };
  return (
    <>
      <main className="msDin">
        <div className="pageHeader companyHd">
          <div className="container">
            <div className="breadCrumb" data-aos="fade-in" data-aos-duration="1000">
              <a href="/">Home</a> <span></span>
              <a href="/contact" className="activePg">
                Contact
              </a>
            </div>
            <div className="pgHeadCont" data-aos="fade-up" data-aos-duration="1000">
              <h1>Bridging Technology and Business Excellence</h1>
            </div>
          </div>
        </div>
        <section className="dinChannel">
          <div className="container">
            <div className="title">
              <h2 className="subTitle" data-aos="fade-in" data-aos-duration="1000">
                Contact us today!
              </h2>
              <h3 data-aos="fade-up" data-aos-duration="1000">
                Let’s connect and build a future of success together!
              </h3>
            </div>
            <div
              className="dinChannelCont"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <p>
                We’re here to help you explore innovative technology solutions,
                answer your questions, and support your business growth. Whether
                you’re interested in our services, seeking a partnership
                opportunity, or simply need more information, the Dinsas team is
                ready to assist you.
              </p>
            </div>
          </div>
        </section>
        <section className="dinContact">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="cntInfBlk">
                  <h4 data-aos="fade-up" data-aos-duration="1000">
                    Corporate Office
                  </h4>
                  <ul data-aos="fade-in" data-aos-duration="1000">
                    <li>
                      <img src="./assets/icon/location.jpg" alt="" />
                      <p>
                        Latifa Office Towers, 17th Floor, Sheikh Zayed Road,
                        Dubai , UAE
                      </p>
                    </li>
                    <li>
                      <img src="./assets/icon/call.jpg" alt="" />
                      <a href="tel:+971600555009">+971 600 555 009</a>
                      <a href="+971526214499">+971 52621 4499</a>
                    </li>
                    <li>
                      <img src="./assets/icon/mail.png" alt="" />
                      <a href="mailto:info@dinsas.com " className="mail">
                        info@dinsas.com{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cntInfBlk">
                  <h4 data-aos="fade-up" data-aos-duration="1000">
                    Corporate Office - India
                  </h4>
                  <ul data-aos="fade-in" data-aos-duration="1000">
                    <li>
                      <img src="./assets/icon/location.jpg" alt="" />
                      <p>
                        Kinfra Techno Industrial Park,Kakkanchery, <br />{" "}
                        Kerala, India
                      </p>
                    </li>
                    <li>
                      <img src="./assets/icon/call.jpg" alt="" />
                      <a href="tel:+971600555009" className="mail">
                        +91 8848806212
                      </a>
                    </li>
                    <li>
                      <img src="./assets/icon/mail.png" alt="" />
                      <a href="mailto:india@dinsas.com " className="mail">
                        india@dinsas.com{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cntInfBlk">
                  <h4 data-aos="fade-up" data-aos-duration="1000">
                    Corporate Office - Oman
                  </h4>
                  <ul data-aos="fade-in" data-aos-duration="1000">
                    <li>
                      <img src="./assets/icon/location.jpg" alt="" />
                      <p>
                        2nd Floor, Tamimah Building, <br /> Al Nahdah St, Al
                        Wattayah, <br />
                        Muscat – 118
                      </p>
                    </li>
                    <li>
                      <img src="./assets/icon/call.jpg" alt="" />
                      <a href="tel:+968 97197105" className="mail">
                        +968 97197105
                      </a>
                    </li>
                    <li>
                      <img src="./assets/icon/mail.png" alt="" />
                      <a href="mailto:india@dinsas.com " className="mail">
                        india@dinsas.com{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dinContactForm">
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="contfrmImg"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <img src="./assets/image/contactform.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="contactContainer"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                >
                  <div className="contactCont">
                    <h2>Let’s start a conversation today!</h2>
                    <p>
                      Fill out the form below to connect with us. Whether you
                      have questions about our services, want to explore
                      partnership opportunities, or need assistance, our team is
                      here to help. Share your details, and we’ll get back to
                      you promptly to address your needs.
                    </p>
                  </div>
                  <div
                    className="formContain"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                  >
                    <form action="">
                      <div className="cntInput">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Place Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="cntInput">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          placeholder="+971 123456789"
                          value={formData.phone}
            onChange={handleChange}
                        />
                      </div>
                      <div className="cntInput">
                        <label htmlFor="name">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="info@yourdomain.com"
                          value={formData.email}
            onChange={handleChange}
                        />
                      </div>
                      <div className="cntInput">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Write Your Message"
                          value={formData.message}
            onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="cntInput">
                        <button type="submit">Send Message 
                        <div className="nav-in-link">
                          <span className="def-txt">
                            <img src="./assets/image/arrowup.png" alt="Arrow" />
                          </span>
                          <span className="hvr-txt">
                            <img src="./assets/image/arrowup.png" alt="Arrow" />
                          </span>
                        </div></button>
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dinNews">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="newsHdTitle">
                  <div
                    className="title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h3>Breaking Boundaries, Delivering Stories</h3>
                  </div>
                  <p data-aos="fade-in" data-aos-duration="1000">
                    Exploring new horizons to bring you stories that matter,
                    inspire, and connect.
                  </p>
                  <div className="arrw" data-aos="fade-in" data-aos-duration="1000">
                    <img src="./assets/image/blkArrw.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="newHmblk">
                  <div
                    className="newsHmImg"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                  >
                    <img src="./assets/news/news.jpg" alt="" />
                  </div>
                  <div
                    className="newsHmCont"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                  >
                    <h2>
                      Dinsas Expands Its Reach with Advanced AI-Powered
                      Solutions
                    </h2>
                    <p>
                      Dinsas technology distribution, has announced the launch
                      of its new AI-powered supply chain management system. The
                      platform aims to streamline operations, enhance order
                      accuracy, and optimize delivery times for its B2B and B2C
                      clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
