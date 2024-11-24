import React, { useState , useEffect } from 'react';
import '../App.css';
import { Container } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import WebDevelopment from './WebDevelopment';
import UXAndUIDesign from './UXAndUIDesign';
import MobileApp from './MobileApp';

const ServicesTypet = () => {
  const [selectedService, setSelectedService] = useState('');
  const [title, setTitle] = useState('');

  const handleServiceClick = (serviceType, serviceTitle) => {
    setSelectedService(serviceType);
    setTitle(serviceTitle);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services | Novuslab";

    return () => {
        document.title = "";
    };
}, []);

  return (
    <>
    <section className="py-24">
      <Container maxWidth="lg">
        <div className="flex items-center gap-2">
          <KeyboardBackspaceIcon className="text-3xl" />
          <h2 className="font-medium text-2xl">Back to Services</h2>
        </div>
  
        <div className="services-options grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h2
              className="font-medium text-xl cursor-pointer"
              onClick={() => handleServiceClick('uxui', 'UX / UI Design')}
            >
              UX / UI Design
            </h2>
            <h2
              className="font-medium text-xl cursor-pointer"
              onClick={() => handleServiceClick('mobileApp', 'Mobile App Development')}
            >
              Mobile App Development
            </h2>
            <h2
              className="font-medium text-xl cursor-pointer"
              onClick={() => handleServiceClick('webDev', 'Web & Back-End Development')}
            >
              Web & Back-End Development
            </h2>
  
            <h2
              className="font-medium text-xl cursor-pointer"
              onClick={() => handleServiceClick('webDev', 'Maintenance and Support')}
            >
              Maintenance and Support
            </h2>
  
            <h2
              className="font-medium text-xl cursor-pointer"
              onClick={() => handleServiceClick('webDev', 'E-Commerce Solutions')}
            >
              E-Commerce Solutions
            </h2>
  
            <h2
              className="font-medium text-xl cursor-pointer"
              onClick={() => handleServiceClick('webDev', 'Brand Identity and Branding')}
            >
              Brand Identity and Branding
            </h2>
          </div>
  
          <div>
            <h1 className="text-center text-2xl font-medium">{title}</h1>
          </div>
        </div>
      </Container>
      {selectedService === 'uxui' && <UXAndUIDesign />}
      {selectedService === 'mobileApp' && <MobileApp />}
      {selectedService === 'webDev' && <WebDevelopment />}
    </section>
  </>
  

  );
};

export default ServicesTypet;
