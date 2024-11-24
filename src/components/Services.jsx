import React, { useEffect, useState } from 'react';
import "../App.css";
import { Container } from '@mui/material';
import WhatSetsUsApart from './WhatSetsUsApart'
import ServicesOffering from './ServicesOffering'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import NovusLabProcess from './NovusLabProcess'
const Services = () => {

  useEffect(() => {
    // const wow = new WOW.WOW();
    // wow.init();
    window.scrollTo(0, 0);
    document.title = "Service | Novuslab";

    return () => {
      document.title = "";
    };
  }, []);
  return (
    <>
      <Container className='py-16' maxWidth='lg'>
        <div className="text-center py-12">
          <h1 className=" text-4xl mb-2">Some of our clients</h1>
          <p className="font-light text-lg mt-0">
            For startups who want to scale, and scaleups who want to diversify.
          </p>
          <div className="ProudlyCertified-images flex justify-center gap-4 mt-8">
            <img
              src="https://storage.googleapis.com/mc-blog-uploads/2021/07/89f9f54a-wise-new-logo-e1682331545913.png"
              alt="Wise Logo"
              className="h-12"
            />
            <img
              src="https://storage.googleapis.com/mc-blog-uploads/2021/07/8395257d-frame-16629-e1677588324727.png"
              alt="Frame Logo"
              className="h-12"
            />
            <img
              src="https://storage.googleapis.com/mc-blog-uploads/2021/07/f7d1a6a8-frame-16637-e1677588044939.png"
              alt="Frame Logo"
              className="h-12"
            />
            <img
              src="https://storage.googleapis.com/mc-blog-uploads/2021/09/swedbank-logo.png"
              alt="Swedbank Logo"
              className="h-12"
            />
          </div>
        </div>


        <ServicesOffering />

        <WhatSetsUsApart />


        <NovusLabProcess />


      </Container>
      <section className="py-20 bg-gradient-to-b from-white to-teal-100">
  <div className="text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
    <h1 className="text-3xl font-semibold mb-6">
      Nothing stands in the way of great ideas becoming a reality.
    </h1>
    <p className="text-lg font-light mb-8">
      Whether you’re looking for an end-to-end solution or a natural extension to your existing in-house setup—we’ve got you covered! Let us know what you need help with and we’ll get back to you within 24 hours.
    </p>
    <button className="bg-teal-500 text-white font-medium px-6 py-3 rounded-lg flex items-center hover:bg-teal-600 transition">
      Get in Touch
      <ArrowForwardIcon className="ml-2" />
    </button>
  </div>
</section>
 
    </>
  );
}

export default Services;
