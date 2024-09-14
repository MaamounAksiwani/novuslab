

import React, { useState } from 'react';
import "../App.css";
import { Container } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const NovusLabProcess = () => {
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
        <section style={{padding:'50px 0' }}>
          <div style={{textAlign:'center'}}>
          <h1 style={{ textAlign: 'center' ,fontSize:'42px' , fontWeight:'500' , marginBottom:'20px' }}>The Novuslab Process</h1>


<p style={{fontSize:"22px" , fontWeight:"300"}}>Agility is key to maintaining our consistent track record within software development, as well as ensuring that we always deliver high-quality products at an efficient pace.
    
</p>

<p style={{fontSize:"22px" , fontWeight:"300"}}>The Scrum approach is at the heart of our processes, combined with a genuine passion for products and the desire to see our clients win. We’re with you every step of the way, building the blocks, making adjustments, and helping you reach your goals.

</p>
          </div>



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
                                                        <li key={index}>{`${ele} ${index}`}</li>
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
            
        </section>
    );
}

export default NovusLabProcess;
