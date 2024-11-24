

import React, { useState } from 'react';
import "../App.css";
import { useNavigate } from 'react-router';
const ServicesOffering = () => {
    const navigate = useNavigate();


    // WebDevelopment

    const handleLinkClick = (path) => {
        navigate(path);
        console.log();
        // setMenuVisible(false);
    };
    return (
        <section className="py-12">
        <h1 className="text-center text-4xl mb-12">
          Our comprehensive services offering
        </h1>
      
        <div className="services-offering-section space-y-6">
          <div className="space-y-2">
            <h1 className="text-xl font-medium">01. Web Development</h1>
            <p className="text-lg font-light">
              Creating engaging and responsive websites that improve your online visibility and capture the attention of your audience.
            </p>
            <button
              className="bg-[#1F5755] text-white px-5 py-2 rounded-full text-sm mt-2 cursor-pointer"
              onClick={() => {
                handleLinkClick('/ServicesType');
              }}
            >
              Learn More
            </button>
          </div>
          <hr />
      
          <div className="space-y-2">
            <h1 className="text-xl font-medium">02. App Development</h1>
            <p className="text-lg font-light">
              Creating cutting-edge, user-focused mobile apps for the iOS and Android operating systems.
            </p>
            <button className="bg-[#1F5755] text-white px-5 py-2 rounded-full text-sm mt-2 cursor-pointer">
              Learn More
            </button>
          </div>
          <hr />
      
          <div className="space-y-2">
            <h1 className="text-xl font-medium">03. UI/UX Design</h1>
            <p className="text-lg font-light">
              Developing engaging user experiences and interfaces that are both aesthetically pleasing and intuitive for your target audience.
            </p>
            <button className="bg-[#1F5755] text-white px-5 py-2 rounded-full text-sm mt-2 cursor-pointer">
              Learn More
            </button>
          </div>
          <hr />
      
          <div className="space-y-2">
            <h1 className="text-xl font-medium">04. Backend Development</h1>
            <p className="text-lg font-light">
              Designing scalable and durable server-side solutions that guarantee flawless operation in the background.
            </p>
            <button className="bg-[#1F5755] text-white px-5 py-2 rounded-full text-sm mt-2 cursor-pointer">
              Learn More
            </button>
          </div>
          <hr />
      
          <div className="space-y-2">
            <h1 className="text-xl font-medium">05. Frontend Development</h1>
            <p className="text-lg font-light">
              Converting designs into dynamic, captivating user experiences to realize your vision.
            </p>
            <button className="bg-[#1F5755] text-white px-5 py-2 rounded-full text-sm mt-2 cursor-pointer">
              Learn More
            </button>
          </div>
          <hr />
        </div>
      </section>
      
    );
}

export default ServicesOffering;
