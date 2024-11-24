import '../App.css';

import { Container } from '@mui/material';
import React, { useState } from 'react';


import Collapse from '@mui/material/Collapse';
import NothingStandsComponent from './NothingStandsComponent'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const WebDevelopment = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const content = [
        {
            id: 0,
            title: 'Custom Product Development',
            point: [],
            description: `Solutions that are specifically crafted to meet your business needs and original 
            concepts. We create original concepts, designs, and product development from the ground up.`
        },
        {
            id: 1,
            title: 'Intuitive UX/UI Design',
            point: [],
            description: `Solutions that are specifically crafted to meet 
            your business needs and original concepts. We create original 
            concepts, designs, and product development from the ground up.`
        },
        {
            id: 2,
            title: 'Mobile App Development',
            point: [],
            description: 'Solutions that are specifically crafted to meet your business needs and original concepts. We create original concepts, designs, and product development from the ground up.'
        },

        ,
        {
            id: 3,
            title: 'Web and Backend Development',
            point: [],
            description: `Solutions that are specifically crafted to meet your business
             needs and original concepts. We create original concepts, designs,
             and product development from the ground up.`
        },
    ];
    return (
        <>
            <Container maxWidth="lg">
    <section className="py-12">
        <h4 className="font-light text-lg md:text-xl">
            As an expert team of software developers, we know that it is essential to think
            about product architecture and address challenges such as security and data privacy right
            from the start of the project. Our team is here to make your web and back-end development
            lean, scalable, and secure every step of the way.
        </h4>

        <h4 className="font-light text-lg md:text-xl mt-6">
            We bring deep industry expertise and the latest IT advancements for any OS,
            browser, or device to the table—so you know your software solution is the best it can possibly be.
        </h4>

        <div className="mt-8">
            <img
                className="w-full h-auto"
                src="https://storage.googleapis.com/mc-blog-uploads/2021/08/Web-development-Mooncascade-scaled.jpg"
                alt=""
            />
        </div>

        <div className="py-12">
            <h1 className="text-center text-2xl font-medium">What you get out of it</h1>

            <div className="mt-8">
                <div className="space-y-6">
                    {content.map((item) => (
                        <div className="border p-4 rounded-lg" key={item.id}>
                            <div
                                className={`flex items-center cursor-pointer ${
                                    openIndex === item.id ? 'border-b-0' : ''
                                }`}
                                onClick={() => handleToggle(item.id)}
                            >
                                {openIndex === item.id ? (
                                    <RemoveIcon className="mr-2" />
                                ) : (
                                    <AddIcon className="mr-2" />
                                )}
                                <h3 className="text-lg">{item.title}</h3>
                            </div>
                            <Collapse in={openIndex === item.id} className="mt-4">
                                {item.point && item.point.length > 0 ? (
                                    <ul className="list-disc pl-5">
                                        {item.point.map((ele, index) => (
                                            <li key={index}>{`${ele} ${index}`}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{item.description}</p>
                                )}
                            </Collapse>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="py-12">
            <h1 className="text-center text-2xl font-medium">
                Working with us means working with a team of industry experts
            </h1>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        img: "https://storage.googleapis.com/mc-blog-uploads/2021/08/Harri.png",
                        name: "Paria Molayemvand, Project Manager",
                        description:
                            "As a project manager, I think a software development project cannot succeed without a UX/UI designer throughout the whole lifecycle of the project. I rely on the input of our brilliant designers from early requirement meetings with the client, to analysis, development, and even maintenance.",
                    },
                    {
                        img: "https://storage.googleapis.com/mc-blog-uploads/2021/08/Mihkel.png",
                        name: "Lander Arregi, UX/UI Designer",
                        description:
                            "I enjoy following projects across different stages - learning from them and improving. The impact that the design choices and decisions have on product development makes the work very rewarding.",
                    },
                    {
                        img: "https://storage.googleapis.com/mc-blog-uploads/2021/08/Anneli.png",
                        name: "Paria Molayemvand, Project Manager",
                        description:
                            "As a project manager, I think a software development project cannot succeed without a UX/UI designer throughout the whole lifecycle of the project. I rely on the input of our brilliant designers from early requirement meetings with the client, to analysis, development, and even maintenance.",
                    },
                ].map((person, index) => (
                    <div key={index} className="text-center space-y-4">
                        <img
                            className="mx-auto rounded-full"
                            src={person.img}
                            alt={person.name}
                        />
                        <h2 className="text-lg font-semibold">{person.name}</h2>
                        <p className="text-sm">{person.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <h1 className="text-center text-2xl font-medium">Related projects</h1>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        title: "Coinmetro",
                        description: "FinTech,UX/UI Design,Mobile App Development",
                        img: "https://storage.googleapis.com/mc-blog-uploads/2021/07/1eb52bb0-solaris_newlogo.jpg",
                    },
                    {
                        title: "iZwop",
                        description: "Web & Back-End Development,Cloud Services",
                        img: "https://storage.googleapis.com/mc-blog-uploads/2021/07/Bolt-cover.png",
                    },
                    {
                        title: "Swedbank",
                        description: "FinTech,UX/UI Design,Mobile App Development",
                        img: "https://storage.googleapis.com/mc-blog-uploads/2022/04/36d67e3a-thumbnail_2400x2400-two-pictures-in-one-row.png",
                    },
                ].map((project, index) => (
                    <div key={index} className="text-center space-y-4">
                        <h2 className="text-lg font-semibold">{project.title}</h2>
                        <p className="text-sm">{project.description}</p>
                        <img
                            className="mx-auto"
                            src={project.img}
                            alt={project.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
</Container>


            <NothingStandsComponent />
        </>


    );
}

export default WebDevelopment;
