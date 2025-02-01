import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const animateSlideContent = (slideElement) => {
      if (!slideElement) return; // Prevent error

      gsap.set(slideElement.querySelectorAll(".text-mask h1, .text-mask span, .heroCont p, .heroBtn"), {
        y: "10%",
        opacity: 0,
      });

      const tl = gsap.timeline();
      tl.to(slideElement.querySelector(".text-mask h1"), {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          slideElement.querySelectorAll(".text-mask span"),
          {
            y: "0%",
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          slideElement.querySelectorAll(".heroLine"),
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out"
          },
          "-=0.6"
        )
        .to(
          slideElement.querySelector(".heroCont p"),
          {
            y: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          slideElement.querySelector(".heroBtn"),
          {
            y: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );
    };

    const handleAfterChange = (currentIndex) => {
      const slides = document.querySelectorAll(".slick-slide");
      const currentSlide = slides[currentIndex];
      if (currentSlide) {
        animateSlideContent(currentSlide);
      }
    };

    // Animate the first slide on mount
    setTimeout(() => {
      handleAfterChange(0);
    }, 500);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
    speed: 800,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentIndex) => {
      setTimeout(() => {
        const slides = document.querySelectorAll(".slick-slide");
        const currentSlide = slides[currentIndex];
        if (currentSlide) {
          gsap.to(currentSlide.querySelectorAll(".text-mask h1, .text-mask span, .heroCont p, .heroBtn"), {
            y: "0%",
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          });
        }
      }, 100);
    },
  };
  return (
    <>
      <main className="msDin">
      <section className="DinHero">
      <Slider ref={sliderRef} {...settings} className="heroSlider">
        {/* Slide 1 */}
        <div>
          <div className="hrSlide">
            <img src="./assets/slider/herobg.jpg" alt="" />
            <div className="heroContBlk">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-lg-8 herLin">
                    <div className="heroCont">
                      <div className="text-mask">
                        <h1>Driving Growth with <span>Intelligent Distribution</span></h1>
                      </div>
                      <span className="heroLine"></span>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-4">
                    <div className="heroCont">
                      <p>Ensure efficient, reliable delivery of products and services, tailored to meet the diverse needs of our clients.</p>
                      <div className="heroBtn heroTxt">
                        <a href="/company">More About Dinsas</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div>
          <div className="hrSlide">
            <img src="./assets/slider/banner2.jpg" alt="" />
            <div className="heroContBlk">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-lg-5">
                    <div className="heroCont">
                      <div className="text-mask">
                        <h1>Procurement <span>Platform for your</span> <span>customers</span></h1>
                      </div>
                      <p>A B2B Platform that focuses on managing orders, possibly within the SaaS ecosystem.</p>
                      <div className="heroBtn heroTxt">
                        <a href="/company">More About Dinsas</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div>
          <div className="hrSlide">
            <img src="./assets/slider/banner3.jpg" alt="" />
            <div className="heroContBlk">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="heroCont">
                      <div className="text-mask">
                        <h1>Personalized Cloud <span>Marketplace</span></h1>
                      </div>
                      <p>Personalized Cloud Marketplace for your Customers.</p>
                      <div className="heroBtn heroTxt">
                        <a href="/company">More About Dinsas</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 4 */}
        <div>
          <div className="hrSlide">
            <img src="./assets/slider/banner4.jpg" alt="" />
            <div className="heroContBlk">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-lg-6">
                    <div className="heroCont">
                      <div className="text-mask">
                        <h1>Solutions Delivered, <span>Markets Connected</span></h1>
                      </div>
                      <p>Ensure efficient, reliable delivery of products and services, tailored to meet the diverse needs of our clients.</p>
                      <div className="heroBtn heroTxt">
                        <a href="/company">More About Dinsas</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
        <section className="DinWedo">
          <div className="container">
            <div className="title">
              <h2 className="subTitle" data-aos="fade" data-aos-duration="1000">
                What we do
              </h2>
              <h3 data-aos="fade-up" data-aos-duration="1000">
                Smart Tools. Seamless Distribution. <br />
                Unlimited Growth
              </h3>
            </div>
            <div className="weDoCont" data-aos="fade" data-aos-duration="1000">
              <p>
                Specializes in technology distribution, leveraging multiple
                innovative solutions to connect cutting-edge technology with
                customers at both B2C and B2B levels. We ensure efficient,
                reliable delivery of products and services, tailored to meet the
                diverse needs of our clients.
              </p>

              <div className="primeBtn">
                <a href="/product-services">Explore More</a>
              </div>
            </div>
          </div>
        </section>
        <section className="dinProduct">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 dinProdBLk">
                <div className="dnPrBlk prLgBlk">
                  <div
                    className="prLgIco"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <img src="./assets/arrowbg.png" alt="" />
                  </div>
                  <div
                    className="prLgCont"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h4>
                      Innovative <br />
                      tools, <br />
                      Seamless Distribution
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="prSecBlk">
                  <div className="prImg">
                    <img src="./assets/product/saasorder.jpg" alt="" />
                  </div>
                  <div
                    className="prCont"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <img src="./assets/logo/saas-w.png" alt="" />
                    <p>
                      A B2B Platform that focuses on managing orders, possibly
                      within the SaaS ecosystem
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="prSecBlk">
                  <div className="prImg prSecImg">
                    <img src="./assets/product/transact.jpg" alt="" />
                  </div>
                  <div
                    className="prCont prSecCont"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <img src="./assets/logo/transact-w.png" alt="" />
                    <p>Personalized Cloud Marketplace for your Customers</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="prSecBlk">
                  <div className="prImg">
                    <img src="./assets/product/febno.jpg" alt="" />
                  </div>
                  <div
                    className="prCont"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <img src="./assets/logo/febno-w.png" alt="" />
                    <p>
                      Distributing products or solutions through multiple
                      marketing channels and methods
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dinAbout">
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="dinAbtImg"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <img src="./assets/abouty.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dinAbtCont">
                  <div className="title">
                    <h2
                      className="subTitle"
                      data-aos="fade"
                      data-aos-duration="1000"
                    >
                      Company
                    </h2>
                    <h3 data-aos="fade-up" data-aos-duration="1000">
                      Innovate to distribute, <br />
                      simplify to excel
                    </h3>
                  </div>
                  <div className="abtCont">
                    <p data-aos="fade" data-aos-duration="1000">
                      <span>
                        At Dinsas, we specialize in technology distribution,
                        seamlessly connecting cutting-edge solutions
                      </span>
                    </p>
                    <p data-aos="fade" data-aos-duration="1000">
                      with customers across B2C and B2B markets. Leveraging
                      innovative strategies and advanced platforms, we ensure
                      the efficient and reliable delivery of products and
                      services. Our tailored approach addresses the diverse
                      needs of our clients, empowering businesses and
                      individuals with the technology they need to thrive in an
                      ever-evolving world.
                    </p>
                    <div
                      className="arrw"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      <img src="./assets/image/blkArrw.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dinClient">
          <div className="container">
            <h2 data-aos="fade-up" data-aos-duration="1000">
              Empowering the World’s Leading Brands to Distribute with Dinsas
            </h2>
            <div className="clientlogoBlk">
              <div className="row">
                <div className="col-lg-two">
                  <div className="cli-img">
                    <img
                      src="./assets/clients/waslasoft.png"
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
                <div className=" col-lg-two">
                  <div className="cli-img">
                    <img
                      src="./assets/clients/eltex.png"
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
                <div className="col-lg-two">
                  <div className="cli-img">
                    <img
                      src="./assets/clients/google.png"
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
                <div className="col-lg-two">
                  <div className="cli-img">
                    <img
                      src="./assets/clients/microsoft.png"
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
                <div className="col-lg-two">
                  <div className="cli-img corLogic">
                    <img
                      src="./assets/clients/logic.png"
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dinNews">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-5">
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
                  <div
                    className="arrw"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    <img src="./assets/image/blkArrw.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-7">
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

export default Home;
