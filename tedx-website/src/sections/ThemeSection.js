import React from "react";
import EventLogo from "../images/event2.png";
import { Element } from "react-scroll";
import NavbarMenu from "../Components/NavbarMenu";
import SpaceTime from "../images/2023/LogoSpaceTime.png";
import BgDecor from "../images/2024/bg-ish.png";
import PrismColor from "../images/2025/logo_nobg.png"

function ThemeSection() {
  return (
    <Element name="theme" className="section is-medium">
      <div className="container is-widescreen lg:pt-36 pt-36 pb-24">
        <div className="absolute mx-auto right-0 left-0 top-0 text-center transform scale-100 ">
          {/* <img src={Circle} className="absolute right-0 -z-10 scale-24 lg:scale-80" alt="infinite"/> */}
          {/* <img src={Wave} className="absolute left-0 bottom-[-250px] lg:bottom-[200px] lg:scale-24" alt="infinite"/> */}
          <img src={BgDecor} className="absolute -z-10" alt="infinite"/>
          <img src={PrismColor} className="absolute md:top-[-50px] lg:top-[300px] left-1/2 -translate-x-1/2 opacity-30 -z-10 mx-auto" alt="infinite"/>
          

        </div>
        <div className="columns is-centered is-vcentered pb-7 lg:-mt-0">
          <h1
            className="text-5xl lg:text-8xl mx-auto lg:mx-0 text-red-600 font-bold pt-32 font-archivo text-center"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            Unlocking Prism Color
          </h1>
        </div>
        <div className="columns is-vcentered z-10">
          <div
            className="column is-size-5 mx-10 pt-7"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <p className="lg:pt-3 text-lg lg:text-2xl lg:text-center mx-5 text-justify">
            A prism glass is a clear object made of glass or plastic that bends and refracts light. As a single beam of light passes through, it slows down and shifts at different angles depending on its wavelength, breaking apart into a beautiful rainbow spectrum. The prism becomes a powerful symbol of life’s challenges and perspectives, just like the colors change with the prism’s angle, our own unique experiences and viewpoints shape the beautiful, meaningful, and relevant ideas we bring into today’s world.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default ThemeSection;
