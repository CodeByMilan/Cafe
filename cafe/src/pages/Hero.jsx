import React from "react";
import { useRef, useEffect } from "react";
import landing_video from "../assets/landing_video.mp4";
import Button from "../components/Button";
import { Link } from "react-router-dom";
export default function Hero() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);
  return (
    <section className="relative h-[90vh] w-full ">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover filter:brightness-150"
      >
        <source src={landing_video} type="video/mp4" />
      </video>
      <div className="flex flex-col min-h-screen">
        <div className="relative z-10 mt-80 flex flex-col items-center h-full space-y-5 text-white pt-32">
          <h1 className="text-5xl md:text-6xl font-bold font-serif">
            Welcome to Our Cafe
          </h1>
          <p className="text-lg mt-2 md:text-xl max-w-lg text-center">
            Savor the taste of Italy in the heart of Kathmandu—where every sip
            and bite is a journey of delight!
          </p>
          <div className="flex py-4 mt-10 text-white font-semibold rounded-lg justify-center gap-4 items-center">
   <Link to="/registration"><Button content="Book Your Table"/></Link> 
   <Link to="/contact"><Button content="Visit us" /></Link> 
</div>
        </div>
      </div>

    </section>
  );
}
