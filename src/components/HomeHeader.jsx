import React from 'react';
import '../App.css';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const HomeHeader = () => {
    return (
        <div className='forTest'>
            <Container className='' maxWidth='lg'>
                <header className="header">

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
                    <div className="right-side">
                        <img
                            src="https://www.novuslab.io/Intersection-1.png"
                            alt="Placeholder"
                            className="header-image"
                        />
                    </div>
                </header>

            </Container>
        </div>
    );
};

export default HomeHeader;
