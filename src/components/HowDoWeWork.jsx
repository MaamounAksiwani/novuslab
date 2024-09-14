import React, { useState } from 'react';
import "../App.css";
import { Container } from '@mui/material';
const HowDoWeWork = () => {

    return (
        <>
            <div style={{padding:'75px 0'}}>
                <Container maxWidth="lg">
                    <h1 style={{
                        fontWeight: "500",
                        textAlign: 'center',
                        fontSize:'42px'
                    }}>How do we work</h1>


                    <div className='how-do-word-images'>
                        <div>
                            <img src='https://storage.googleapis.com/mc-blog-uploads/2021/12/sales-performance-up-2332_0daf0556-1c34-4c13-93bc-32939ab3d28e.png' alt='not found ' />
                            <h3>Strategic approach</h3>

                            <p>
                                We’re not just a one-off vendor, but a long-term partner to all our clients.
                                Through close collaboration, we’ll transform your ideas into a fully viable product. We kick things off by looking at your current
                                challenges and setup, before creating a roadmap based on clear goals and success criteria.
                            </p>
                        </div>

                        <div>
                            <img src='https://storage.googleapis.com/mc-blog-uploads/2021/12/Frame-1426.png' alt='not found ' />
                            <h3>Full transparency

                            </h3>

                            <p>
                                Just like an in-house team member would do, we keep you in the loop every step of the way. Our 1-2 week
                                sprints and daily status updates allow you to track the progress and get all questions or concerns out
                                in the open. We don’t just share successes but speak openly about any bumps in the road.


                            </p>
                        </div>

                        <div>

                            <img src='https://storage.googleapis.com/mc-blog-uploads/2021/12/people-2778_a7fbed5c-b8e6-4251-a96a-e976e8e8f51a.png' alt='not found ' />
                            <h3>Dedicated product team</h3>
                            <p>
                                With Mooncascade, you’ll get a multi-disciplinary team that’s fully dedicated to building quality products.
                                From project managers, to QA or UX specialists, to software developers. We pride ourselves on being a team
                                with huge motivation and clear workflows set in place to execute any challenge given to us.
                            </p>
                        </div>



                        <div>

                            <img src='https://storage.googleapis.com/mc-blog-uploads/2021/12/happy-2790_779acdce-5b60-4ce9-aad5-525e5a4a9400.png' alt='not found ' />
                            <h3>Guaranteed satisfaction

                            </h3>
                            <p>
                                Our products are always built with clear goals in mind, and we’re thoughtful of your budget and runway. It’s important to us that you always feel comfortable with the direction we’re going in. That’s why we prioritize constant communication to ensure customer satisfaction every step of the way.
                            </p>
                        </div>

                        <div>

                            <img src='https://storage.googleapis.com/mc-blog-uploads/2021/12/Frame-1427-1.png' alt='not found ' />
                            <h3>Innovative solutions</h3>
                            <p>
                                Bridge any knowledge gap with our experts, so you can focus on your core business. Collaborating with us ensures that you automatically get the latest knowledge within UX, UI, software development, and our core competence - FinTech. And if we don’t know it? We’ll gladly look for the best answer on your behalf.


                            </p>
                        </div>



                    </div>
                </Container>
            </div>
        </>
    );
}

export default HowDoWeWork;
