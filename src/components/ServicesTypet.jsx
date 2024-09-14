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
    // const wow = new WOW.WOW();
    // wow.init();
    window.scrollTo(0, 0);
    document.title = "Services | Novuslab";

    return () => {
        document.title = "";
    };
}, []);

  return (
    <>
        <section style={{ padding: '100px 0' }}>
      <Container maxWidth='lg'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <KeyboardBackspaceIcon style={{ fontSize: '30px' }} />
          <h2 style={{ fontWeight: '500', fontSize: '24px' }}>Back to Services</h2>
        </div>

        <div className='services-options'>
          <div>
            <h2
              style={{ fontWeight: '500', fontSize: '20px', cursor: 'pointer' }}
              onClick={() => handleServiceClick('uxui', 'UX / UI Design')}
            >
              UX / UI Design
            </h2>
            <h2
              style={{ fontWeight: '500', fontSize: '20px', cursor: 'pointer' }}
              onClick={() => handleServiceClick('mobileApp', 'Mobile App Development')}
            >
              Mobile App Development
            </h2>
            <h2
              style={{ fontWeight: '500', fontSize: '20px', cursor: 'pointer' }}
              onClick={() => handleServiceClick('webDev', 'Web & Back-End Development')}
            >
              Web & Back-End Development
            </h2>



            <h2
              style={{ fontWeight: '500', fontSize: '20px', cursor: 'pointer' }}
              onClick={() => handleServiceClick('webDev', 'Web & Back-End Development')}
            >
              Maintenance and Support
            </h2>

            <h2
              style={{ fontWeight: '500', fontSize: '20px', cursor: 'pointer' }}
              onClick={() => handleServiceClick('webDev', 'Web & Back-End Development')}
            >
               E-Commerce Solutions
            </h2>

            <h2
              style={{ fontWeight: '500', fontSize: '20px', cursor: 'pointer' }}
              onClick={() => handleServiceClick('webDev', 'Web & Back-End Development')}
            >
               Brand Identity and Branding


            </h2>

{/*  E-Commerce Solutions */}
            {/* 6. Maintenance and Support

 */}
          </div>

          <div>
            <h1  style={{textAlign:'center' , fontSize:'28px' , fontWeight:'500'}}>{title}</h1>
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
