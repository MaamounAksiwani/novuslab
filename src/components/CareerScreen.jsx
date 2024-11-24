import React, { useState, useEffect } from 'react';
import { Container, Collapse } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ValuePeople from './ValuePeople'
import RemoveIcon from '@mui/icons-material/Remove';

const CareerScreen = () => {
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
            concepts. We create original concepts, designs, and product development from the ground up.`,
            image: 'https://storage.googleapis.com/mc-blog-uploads/2021/12/Mooncascade-Summer-Days.png'
        },
        {
            id: 1,
            title: 'Intuitive UX/UI Design',
            point: [],
            description: `Solutions that are specifically crafted to meet 
            your business needs and original concepts. We create original 
            concepts, designs, and product development from the ground up.`,
            image: 'https://storage.googleapis.com/mc-blog-uploads/2022/08/acb65294-mooncascade-tallinn-168-scaled.jpg'
        },
        {
            id: 2,
            title: 'Mobile App Development',
            point: [],
            description: 'Solutions that are specifically crafted to meet your business needs and original concepts. We create original concepts, designs, and product development from the ground up.',
            image: 'https://storage.googleapis.com/mc-blog-uploads/2021/12/Openness.png'
        },
    ];


    useEffect(() => {
        // const wow = new WOW.WOW();
        // wow.init();
        window.scrollTo(0, 0);
        document.title = "Career | Novuslab";

        return () => {
            document.title = "";
        };
    }, []);

    return (
        <>
            <div >
                <img src='https://storage.googleapis.com/mc-blog-uploads/2021/12/Mooncascade-Carreers.png' alt='header-image-not-found' />
            </div>

            <section className='py-20  max-w-6xl mx-auto'>
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="Energycontent flex flex-wrap">
                        <div className="EnergyContentImage flex-1 mb-6 md:mb-0">
                            {openIndex != null ? (
                                <img src={content[openIndex].image} alt="selected-content" className="w-full h-auto" />
                            ) : (
                                <img src="https://storage.googleapis.com/mc-blog-uploads/2021/12/Mooncascade-Summer-Days.png" alt="image not found" className="w-full h-auto" />
                            )}
                        </div>

                        <div className="flex-1">
                            <p className="text-2xl font-semibold mb-4">Life at Nouslab</p>
                            <h1 className="font-medium text-lg mb-6">
                                We are truly amazed by the people we work with – we are not just co-workers, we are friends as well. We take ownership of our
                            </h1>

                            <div className="space-y-4  mx-auto">
                                {content.map((item) => (
                                    <div key={item.id} className="border rounded-lg shadow-md">
                                        <div
                                            className={`flex items-center justify-between p-4 cursor-pointer ${openIndex === item.id ? "bg-gray-100" : ""
                                                }`}
                                            onClick={() => handleToggle(item.id)}
                                        >

                                            <h3 className="ml-4 text-lg font-medium">{item.title}</h3>
                                            {openIndex === item.id ? (
                                                <RemoveIcon className="text-xl text-teal-600" />
                                            ) : (
                                                <AddIcon className="text-xl text-teal-600" />
                                            )}
                                        </div>
                                        <Collapse in={openIndex === item.id}>
                                            <div className="p-4">
                                                {item.point && item.point.length > 0 ? (
                                                    <ul className="list-disc pl-6">
                                                        {item.point.map((ele, index) => (
                                                            <li key={index}>{`${ele} ${index}`}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p>{item.description}</p>
                                                )}
                                            </div>
                                        </Collapse>
                                    </div>
                                ))}
                            </div>



                        </div>
                    </div>
                </div>

                <ValuePeople />
            </section>

        </>
    );
};

export default CareerScreen;
