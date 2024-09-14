import React from 'react';
import '../App.css';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const AboutUsHeader = () => {
    return (
        <div className='forTest'>
            <Container className='' maxWidth='lg'>
                <header className="header">

                    <div className="left-side">
                        <h1 className="title">Main Title</h1>
                        <p className="description">
                            This is a sample paragraph under the main title. It describes the content or purpose of the header section.
                        </p>
                        <button className='cta-button' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            Get in touch
                            <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                        </button>
                    </div>
                    <div className="right-side">
                        <img
                            src="https://storage.googleapis.com/mc-blog-uploads/2021/12/Mooncascade-Happy.png"
                            alt="Placeholder"
                            className="header-image"
                            style={{
                                width:'500px'
                            }}
                        />
                    </div>
                </header>

            </Container>
        </div>
    );
};

export default AboutUsHeader;
