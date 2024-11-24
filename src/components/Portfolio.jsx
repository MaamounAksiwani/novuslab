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
<section className="py-32 bg-gradient-to-t from-white to-teal-100">
  <div className="flex flex-col items-center text-center">
    <Container maxWidth="lg">
      <h1 className="text-3xl  mb-6">
        Novus Lab, where Digital Dreams Become Long-Term Success Stories!
      </h1>
      <p className="text-lg font-light mb-8">
        We’re more than just a one-time supplier, we’re a dedicated, long-term collaborator in your success. Our staff, which is made up of seasoned professionals with years of experience, takes pride in providing excellence. With a wealth of knowledge we can handle any complexity or obstacle with assurance.
      </p>

      <ArrowDownwardIcon
  onClick={handleScroll}
  className="border-2 border-teal-600 rounded-full p-5 cursor-pointer"
/>

    </Container>
  </div>
</section>

           

           <Container  ref={scrollToRef} maxWidth='lg'>
            <OurClients/>
          <WhatSetsUsApart/> 
           </Container>
        </>
    );
}

export default Portfolio;
