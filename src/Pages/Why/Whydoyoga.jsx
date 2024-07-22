import React from "react";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import "./Whydoyoga.css";
import aboutImg1 from '../../assets/images/about-img1.png'
import vinayasaYoga from '../../assets/images/vinyasa-yoga.png'
import intutiveYoga from '../../assets/images/intuitive-yoga.png'
import hathaYoga from '../../assets/images/hatha-yoga.png'
import slowYoga from '../../assets/images/slow-yoga.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'

const Whydoyoga = () => {
  return (
    <>
      <Header />
      {/* <div className="why-banner w-screen h-screen flex items-center justify-center flex-col text-center">
        <h2>Why do yoga?</h2>
        <ul>
            <li>Boost brain funciton</li>
            <li>Enhances respiratory health</li>
            <li>Improves mental clarity</li>
            <li>Boost immune system</li>
            <li>Cures hairfall problems</li>
        </ul>
        <button className='shadow-dark shadow-lg px-4 py-2 rounded-md m-4'><Link to={`/`}>Back to Home</Link></button>
      </div> */}

      <section className="single-page-banner pt-[65px] pb-20 bg-[#FFFAF3]">
        <div className="container mx-auto">
          <div className="banner-title">
            <h1 className="text-center text-4xl font-bold">Why do yoga?</h1>
          </div>
        </div>
      </section>

      <section className="yoginfo-about py-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="basis-1/2 px-[15px]">
              <div className="yoginfo-about-left pt-[40px] px-[40px] bg-[#FFFAF3] rounded-b-[500px]">
                <div className="yoginfo-section-title mb-[30px]">
                  <h3 className="text-4xl m-0">Why do yoga?</h3>
                </div>
                <p className="text-lg">
                  I'm <b>John Doe</b>, a Certified Yoga Instructor, Many Styles
                  Of Yoga To Suit Everyone Morbi lobortis.
                </p>
                <img
                  className="yoginfo-parallax-effect my-0 mx-auto"
                  src={aboutImg1}
                  alt="About"
                />
              </div>
            </div>
            <div className="basis-1/2 px-[15px]">
              <div className="yoginfo-about-right">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="basis-1/2 px-[15px]">
                    <div className="yoginfo-about-service p-8">
                      <div className="yoginfo-about-service-icon bg-[#FFFAF3] w-14 h-14 rounded-md flex items-center justify-center">
                        <img
                          src={vinayasaYoga}
                          alt="Vinyasa Yoga"
                        />
                      </div>
                      <h5 className="my-[15px] text-bold text-[20px]">Vinyasa Yoga</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="basis-1/2 px-[15px]">
                    <div className="yoginfo-about-service p-8">
                      <div className="yoginfo-about-service-icon bg-[#FFFAF3] w-14 h-14 rounded-md flex items-center justify-center">
                        <img
                          src={intutiveYoga}
                          alt="Intuitive Yoga"
                        />
                      </div>
                      <h5 className="my-[15px] text-bold text-[20px]">Intuitive Yoga</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="basis-1/2 px-[15px]">
                    <div className="yoginfo-about-service p-8">
                      <div className="yoginfo-about-service-icon bg-[#FFFAF3] w-14 h-14 rounded-md flex items-center justify-center">
                        <img
                          src={hathaYoga}
                          alt="Hatha Yoga"
                        />
                      </div>
                      <h5 className="my-[15px] text-bold text-[20px]">Hatha Yoga</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="basis-1/2 px-[15px]">
                    <div className="yoginfo-about-service p-8">
                      <div className="yoginfo-about-service-icon bg-[#FFFAF3] w-14 h-14 rounded-md flex items-center justify-center">
                        <img
                          src={slowYoga}
                          alt="Slow Yoga"
                        />
                      </div>
                      <h5 className="my-[15px] text-bold text-[20px]">Slow Yoga</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="yoginfo-service">
    <div class="container mx-auto">
        <div class="flex flex-wrap mx-[-15px]">
            <div class="basis-1/2 px-[15px]">
                <div class="yoginfo-service-col">
                    <h5>Movement Improvement</h5>
                    <h2>Make the best of your yoga class</h2>
                    <img class="yoginfo-parallax-effect" src={img3} alt="Slow Yoga" />
                </div>
            </div>
            <div class="basis-1/2 px-[15px]">
                <div class="yoginfo-service-col yoginfo-service-col-dark">
                    <h5>Movement Improvement</h5>
                    <h2>Bring out the best of yourself</h2>
                    <img class="yoginfo-parallax-effect" src={img4} alt="Slow Yoga" />
                </div>
            </div>
        </div>
    </div>
</section>

    </>
  );
};

export default Whydoyoga;
