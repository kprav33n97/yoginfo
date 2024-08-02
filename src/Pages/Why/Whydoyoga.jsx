import React from "react";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import "./Whydoyoga.css";
import aboutImg1 from "../../assets/images/about-img1.png";
import vinayasaYoga from "../../assets/images/vinyasa-yoga.png";
import intutiveYoga from "../../assets/images/intuitive-yoga.png";
import hathaYoga from "../../assets/images/hatha-yoga.png";
import slowYoga from "../../assets/images/slow-yoga.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";

const Whydoyoga = () => {
  return (
    <>
      <Header />
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
            <div className="md:basis-1/2 px-[15px] basis-full">
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
            <div className="md:basis-1/2 px-[15px] basis-full">
              <div className="yoginfo-about-right">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="basis-1/2 px-[15px]">
                    <div className="yoginfo-about-service p-8">
                      <div className="yoginfo-about-service-icon bg-[#FFFAF3] w-14 h-14 rounded-md flex items-center justify-center">
                        <img src={vinayasaYoga} alt="Vinyasa Yoga" />
                      </div>
                      <h5 className="my-[15px] text-bold text-[20px]">
                        Vinyasa Yoga
                      </h5>
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
                        <img src={intutiveYoga} alt="Intuitive Yoga" />
                      </div>
                      <h5 className="my-[15px] text-bold text-[20px]">
                        Intuitive Yoga
                      </h5>
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
                        <img src={hathaYoga} alt="Hatha Yoga" />
                      </div>
                      <h5 className="my-[15px] text-bold text-[20px]">
                        Hatha Yoga
                      </h5>
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
                        <img src={slowYoga} alt="Slow Yoga" />
                      </div>
                      <h5 className="my-[15px] text-bold text-[20px]">
                        Slow Yoga
                      </h5>
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
      <section className="yoginfo-service pb-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="basis-full md:basis-1/2 px-[15px]">
              <div className="yoginfo-service-col bg-[#FFFAF3] pt-12 px-12 h-full relative overflow-hidden">
                <h5 className="font-semibold">Movement Improvement</h5>
                <h2 className="text-4xl font-bold max-w-[400px] w-full leading-normal">
                  Make the best of your yoga className
                </h2>
                <img
                  className="yoginfo-parallax-effect"
                  src={img3}
                  alt="Slow Yoga"
                />
              </div>
            </div>
            <div className="basis-full md:basis-1/2 px-[15px]">
              <div className="yoginfo-service-col bg-[#222B37] text-white pt-12 px-12 h-full relative overflow-hidden">
                <h5 className="font-semibold">Movement Improvement</h5>
                <h2 className="text-4xl font-bold max-w-[400px] w-full leading-normal">
                  Bring out the best of yourself
                </h2>
                <img
                  className="yoginfo-parallax-effect"
                  src={img4}
                  alt="Slow Yoga"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whydoyoga;
