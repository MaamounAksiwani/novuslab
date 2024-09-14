import React, { useState , useEffect  ,useRef} from 'react';
import "../App.css";
import { Container } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import WhatSetsUsApart from './WhatSetsUsApart'
import OurClients from './OurClients'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Portfolio = () => {


  const scrollToRef = useRef(null);  // Step 1: Create a reference for the section to scroll to

  const handleScroll = () => {
    scrollToRef.current.scrollIntoView({
      behavior: 'smooth',   // Step 2: Scroll to the section smoothly
    });
  };


  useEffect(() => {
    // const wow = new WOW.WOW();
    // wow.init();
    window.scrollTo(0, 0);
    document.title = "Portfolio | Novuslab";

    return () => {
        document.title = "";
    };
}, []);
    return (
        <>
          <section className='Portfolio-section'>
      <div className="join-us-text" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
       <Container maxWidth='lg'>
       <h1>Novus Lab, where Digital Dreams Become Long-Term Success Stories!</h1>
       <p>
       We’re more than just a one-time supplier, we’re a dedicated, long-term collaborator in your success. Our staff, which is made up of seasoned professionals with years of experience, takes pride in providing excellence. With a wealth of knowledge we can handle any complexity or obstacle with assurance.


        </p>
        
          <ArrowDownwardIcon             onClick={handleScroll}
 style={{ border: '1px solid #1F5755' ,cursor:'pointer' ,  borderRadius:'25px', padding:'20px' }} />
    

       </Container>
      </div>


    </section>
           





           <Container  ref={scrollToRef} maxWidth='lg'>
            <OurClients/>
          <WhatSetsUsApart/> 
           </Container>

           {/* <header className="header ReadyToJoin">
            <Container maxWidth='lg'>
            <div className="right-side">
    <img
        src="https://www.novuslab.io/Intersection-1.png"
        alt="Placeholder"
        className="header-image"
    />
</div>

<div className="left-side">
    <h1 className="title">Digital excellence from design to development</h1>
    <p className="description">
    We’ll guide you through the ever-evolving digital landscape of design, software, and cloud solutions.
    </p>
    <button className='cta-button' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        Get in touch
        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
    </button>
</div>

            </Container>
</header> */}

        </>
    );
}

export default Portfolio;
