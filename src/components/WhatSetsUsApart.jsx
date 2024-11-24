

import React, { useState } from 'react';
import "../App.css";
import { Container } from '@mui/material';
const WhatSetsUsApart = () => {
    return (
        <section className="py-12">
        <h1 className="text-center text-4xl  mb-12">What sets us apart?</h1>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <img className="w-24 mx-auto" src="https://www.novuslab.io/work/works-8.svg" alt="End-to-End Expertise" />
            <h3 className="font-medium text-lg">End-to-End Expertise</h3>
            <p className="font-light">
              We provide an extensive range of services that address every aspect of digital transformation, from conception to implementation.
            </p>
          </div>
      
          <div className="text-center space-y-4">
            <img className="w-24 mx-auto" src="https://www.novuslab.io/work/works-6.svg" alt="Tailored Solutions" />
            <h3 className="font-medium text-lg">Tailored Solutions</h3>
            <p className="font-light">
              We take pride in the fact that no two projects are the same. Our team specializes in tailoring solutions to each client’s specific demands and goals.
            </p>
          </div>
      
          <div className="text-center space-y-4">
            <img className="w-24 mx-auto" src="https://www.novuslab.io/work/works-9.svg" alt="Cutting-Edge Technologies" />
            <h3 className="font-medium text-lg">Cutting-Edge Technologies</h3>
            <p className="font-light">
              With our use of cutting-edge technologies, you can stay ahead of the curve in the digital sphere and guarantee that your projects are not simply present but also future-proof.
            </p>
          </div>
      
          <div className="text-center space-y-4">
            <img className="w-24 mx-auto" src="https://www.novuslab.io/work/works-9.svg" alt="Cutting-Edge Technologies" />
            <h3 className="font-medium text-lg">Cutting-Edge Technologies</h3>
            <p className="font-light">
              With our use of cutting-edge technologies, you can stay ahead of the curve in the digital sphere and guarantee that your projects are not simply present but also future-proof.
            </p>
          </div>
        </div>
      </section>
      
    );
}

export default WhatSetsUsApart;
