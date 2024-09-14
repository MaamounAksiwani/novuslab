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
            <Container style={{padding:"75px 0"}} maxWidth='lg'>
          <div className='service-title-header'>
          <h1>Some of our clients</h1>
                <p>
                For startups who want to scale, and scaleups who want to diversify.
                </p>
                <div className='ProudlyCertified-images'>
                <img src="https://storage.googleapis.com/mc-blog-uploads/2021/07/89f9f54a-wise-new-logo-e1682331545913.png" alt='not found '/>
                <img src="https://storage.googleapis.com/mc-blog-uploads/2021/07/8395257d-frame-16629-e1677588324727.png" alt='not found '/>
                <img src="https://storage.googleapis.com/mc-blog-uploads/2021/07/f7d1a6a8-frame-16637-e1677588044939.png" alt='not found '/>
                <img src="https://storage.googleapis.com/mc-blog-uploads/2021/09/swedbank-logo.png" alt='not found '/>
              </div>
          </div>

          <ServicesOffering/>

          <WhatSetsUsApart/>


          <NovusLabProcess/>

    
            </Container>
            <section className='join-us'>
      <div className="join-us-text" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h1>Nothing stands in the way of great ideas becoming a reality.</h1>
        <p>Whether you’re looking for an end-to-end solution or a natural extension to your existing in-house  <br/> setup—we’ve got you covered! Let us know what you need help with and we’ll get back to you within 24 hours.

        </p>
        <button style={{ display: 'flex', alignItems: 'center' }}>
          Get in Touch
          <ArrowForwardIcon style={{ marginLeft: '8px' }} />
        </button>
      </div>

    </section>
        </>
    );
}

export default Services;
