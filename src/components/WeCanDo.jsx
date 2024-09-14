
import React, { useState } from 'react';
import '../App.css';
import { Container } from '@mui/material';

import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const WeCanDo = () => {
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

        <div className='WeCanDo-section'>
        <Container style={{padding:'75px 0 '}} maxWidth='lg'>
        <h1>How we support your needs </h1>

        <p className='under-main-title'>
        Whether going through the first phase of mapping out the MVP or developing a back-end for your core product, our team is ready to support you with expert UX/UI design, software development, and cloud modernization.


        </p>



        <div className='ContainerCollapse'>
                            <div>
                                {content.map((item) => (
                                    <div className='collapse-box' key={item.id}>
                                        <div className={openIndex === item.id ? 'no-border IconButton active' : 'border IconButton'}  onClick={() => handleToggle(item.id)}>
                                            {openIndex === item.id ? <RemoveIcon className='iconStyle' /> : <AddIcon className='iconStyle' />}
                                            <h3 
                                                
                                                onClick={() => handleToggle(item.id)}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>
                                        <Collapse in={openIndex === item.id} className='Collapse'>
                                            {item.point && item.point.length > 0 ? (
                                                <ul>
                                                    {item.point.map((ele, index) => (
                                                        <li style={{color:"red"}} key={index}>{`${ele} ${index}`}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className={openIndex === item.id ? 'border' : 'no-border'}>
                                                    {item.description}
                                                </p>
                                            )}
                                        </Collapse>
                                    </div>
                                ))}
                            </div>
                        </div>
        </Container>
        </div>


    );
}

export default WeCanDo;
