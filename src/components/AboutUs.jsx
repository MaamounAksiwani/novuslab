import React, { useEffect } from 'react';
import '../App.css';
import { Container } from '@mui/material';
import Ourteam from './Ourteam';
import JoinUs from './JoinUs'
import OurAwards from './OurAwards'
import HomeHeader from './HomeHeader'
import WhatIsimportant from './WhatIsimportant'
import AboutUsHeader from './AboutUsHeader'
const AboutUs = () => {
    useEffect(() => {
        // const wow = new WOW.WOW();
        // wow.init();
        window.scrollTo(0, 0);
        document.title = "About-us | Novuslab";

        return () => {
            document.title = "";
        };
    }, []);
    return (

        <>
            <div>
                <img
                    src="https://storage.googleapis.com/mc-blog-uploads/2021/12/Mooncascade-Happy.png"
                    alt="header-image-not-found"
                />
            </div>
            <div className="main-section-about-us py-10 bg-white">
                <Container maxWidth="lg" className="mx-auto">
                    <div className="contain-header text-center px-4 md:px-8 lg:px-16">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Crafting Digital Excellence
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg mb-4">
                            01. The sole goal of Novus lab’s founding was to realize your ideal items. We walk with you
                            from the very beginning to the very end of your software development journey. Imagine it as
                            an exciting adventure where we skillfully put together the puzzle pieces, creating the
                            platform of your dreams, and bringing your ideas to life.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg mb-4">
                            02. We are much more than just ideators. Novus Lab adapts its services to the fast-paced
                            nature of the modern digital industry. Testing thoroughly and frequently guarantees that,
                            within the agreed timeframes, we not only fulfill but surpass your expectations.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg mb-4">
                            03. But our adventure doesn’t finish there. Our support doesn’t end when we put the final
                            puzzle piece in place and reveal your dream to the world. Assistance, both onsite and off,
                            is provided until your product reaches a mature stage and wins over customers.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg mb-4">
                            04. Our first step on this successful road is thorough documentation. By describing the key
                            features, technologies, interfaces, plans, and requirements, we effectively convey your
                            vision. This guarantees that we comprehend your objectives and precisely match our efforts
                            with them.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg">
                            05. Welcome to Novus lab, where achievement becomes a shared experience and your ambitions
                            become a digital reality.
                        </p>
                    </div>
                </Container>
            </div>



            <Container>
                <Ourteam />

                <WhatIsimportant />
                
                <OurAwards />

            </Container>

            <JoinUs />
        </>


    );
}

export default AboutUs;
