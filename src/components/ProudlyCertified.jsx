import React, { useState } from 'react';
import "../App.css";
import { Container } from '@mui/material';
const ProudlyCertified = () => {
   
    return (
      <div className="py-20">
      <Container maxWidth="lg">
        <h1 className=" text-center text-[42px]">We're proudly certified as</h1>
        <div className="ProudlyCertified-images grid  py-12 md:grid-cols-4 sm:grid-cols-1">
          <img
            src="https://storage.googleapis.com/mc-blog-uploads/2023/03/b6494414-partners-pangea-e1676276833610.png"
            alt="Certification 1"
            className="w-52 h-auto"
          />
          <img
            src="https://storage.googleapis.com/mc-blog-uploads/2023/03/8b631eb2-gc-partner-no_outline-v-7.png"
            alt="Certification 2"
            className="w-52 h-auto"
          />
          <img
            src="https://storage.googleapis.com/mc-blog-uploads/2023/03/8b631eb2-gc-specialization-work_transformation-no_outline-1.png"
            alt="Certification 3"
            className="w-52 h-auto"
          />
          <img
            src="https://storage.googleapis.com/mc-blog-uploads/2023/03/b6494414-partners-pangea-e1676276833610.png"
            alt="Certification 4"
            className="w-52 h-auto"
          />
        </div>
      </Container>
    </div>
    
    );
}

export default ProudlyCertified;
