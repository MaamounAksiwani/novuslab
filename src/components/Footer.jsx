import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../App.css';
// import logo from '../../until/image/energysabal-white.svg';


const Footer = () => {
    const navigate = useNavigate();
    const handleLinkClick = (path) => {
        navigate(path);
    };
    return (
        <footer class="footer">
            <Container maxWidth='lg'>
                <div class="container row">
                    <div class="footer-col">
                        <img src='https://www.novuslab.io/logo.svg' alt='' />
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                                <PhoneIcon style={{ marginRight: "10px" }} /> +49 176 20092661
                            </li>
                            <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                                <AddLocationIcon style={{ marginRight: "10px" }} /> Business Center 1, Business C, Nad Al Sheba Meydan Dubai, P.O. Box 123654 Dubai, United Arab Emirates
                            </li>
                            <li style={{ display: "flex", alignItems: "center" }}>
                                <EmailIcon style={{ marginRight: "10px" }} /> Noculab@gmail.com
                            </li>
                        </ul>

                    </div>

                    <div class="footer-col">
                        <h4>Installation</h4>
                        <ul>
                            <li onClick={() => handleLinkClick('/About')}>Installation</li>
                            <li>Installation</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>


                        </ul>

                    </div>


                    <div class="footer-col">
                        <h4>Explore</h4>
                        <ul>
                            <li onClick={() => handleLinkClick('/Plan')}>Installation</li>
                            <li onClick={() => handleLinkClick('/Report')}>Installation</li>
                            <li onClick={() => handleLinkClick('/Contractor')}>Installation</li>
                            <li onClick={() => handleLinkClick('/Contact')}>Installation</li>
                        </ul>
                    </div>



                    <div class="footer-col">
                        <h4>Information</h4>
                        <ul>
                            <li onClick={() => handleLinkClick('/About')}>Installation</li>
                            <li>Installation</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>


                        </ul>
                    </div>

                </div>

                <div style={{ textAlign: 'center', color: "#ddd", fontSize: '8px' }}>
                    <h1 style={{ marginTop: '100px', fontWeight: '300' }}>© 2024 Nouvs lab. All Rights Reserved</h1>
                </div>

            </Container>
        </footer>



    )
}

export default Footer;
