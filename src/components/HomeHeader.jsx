import React from 'react';
import '../App.css';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const HomeHeader = () => {
    return (
        <div className="bg-[#1F5755] h-1/2 py-32 px-6">
        <Container className="max-w-5xl mx-auto">
          <header className="flex flex-col md:flex-row  items-center gap-10">
            {/* Text Section */}
            <div className="text-white md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-3xl sm:text-2xl font-semibold leading-tight">
                Digital excellence from design to development
              </h1>
              <p className="text-lg md:text-base font-light">
                We’ll guide you through the ever-evolving digital landscape of design, software, and cloud solutions.
              </p>
              <button
                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white text-sm font-medium rounded-full hover:bg-white hover:text-[#1F5755] transition-colors"
              >
                Get in touch
                <ArrowForwardIcon />
              </button>
            </div>
      
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src="https://www.novuslab.io/Intersection-1.png"
                alt="Digital Excellence Illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </header>
        </Container>
      </div>
      

    );
};

export default HomeHeader;
