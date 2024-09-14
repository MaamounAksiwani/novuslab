
import '../App.css';
import React, { useState } from 'react';
import { Container } from '@mui/material';

import Collapse from '@mui/material/Collapse';
import NothingStandsComponent from './NothingStandsComponent'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const UXAndUIDesign = () => {

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
        <Container maxWidth='lg'>
<section style={{ padding: '50px 0' }}>


<h4 style={{ fontWeight: "300", fontSize: '28px' }}>UX and UI go hand in hand. And when they’re done
    right, you’ll see it reflected in your user conversion, engagement, and retention across the board.</h4>



<div>
    <img style={{ width: '100%', height: 'auto' }} src="https://storage.googleapis.com/mc-blog-uploads/2021/08/c1db6526-mooncascade-ii-146-copy-scaled.jpg" alt='not found ' />
</div>


<div style={{ padding: '50px 0' }}>

    <h1 style={{ textAlign: 'center', fontSize: '28px', fontWeight: '500' }}>What you get out of it</h1>


    <div className='ContainerCollapse'>
        <div>
            {content.map((item) => (
                <div className='collapse-box' key={item.id}>
                    <div className={openIndex === item.id ? 'no-border IconButton active' : 'border IconButton'} onClick={() => handleToggle(item.id)}>
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
</div>


<div>
    <h1 style={{ textAlign: 'center', fontSize: '28px', fontWeight: '500' }}>Related projects</h1>



    <div className="container-services">
        <div>
            <h2>Coinmetro</h2>
            <p>FinTech,UX/UI Design,Mobile App Development</p>
            <img src="https://storage.googleapis.com/mc-blog-uploads/2022/04/587b8af2-thumbnail_2400x2400-two-pictures-in-one-row.png" />
        </div>
        <div>
            <h2>iZwop</h2>
            <p>Web & Back-End Development,Cloud Services</p>
            <img src="https://storage.googleapis.com/mc-blog-uploads/2022/08/011704ec-2-featured_2400x2400-two-pictures-in-one-row.png" />
        </div>
        <div>
            <h2>Swedbank</h2>
            <p>FinTech,UX/UI Design,Mobile App Development</p>
            <img src="https://storage.googleapis.com/mc-blog-uploads/2021/11/Swedbank-1.png" />
        </div>
    </div>

</div>


<div style={{padding:'100px 0px 50px 0 '}}>
    <h1 style={{ textAlign: 'center', fontSize: '28px', fontWeight: '500' }}>Working with us means working with a team of industry experts</h1>


    <div className="container-services">
      
    <div>

<img src="https://storage.googleapis.com/mc-blog-uploads/2021/08/Paria.png" />
    <h2>Paria Molayemvand, Project Manager</h2>
    <p>As a project manager, I think a software development project cannot succeed without a UX/UI designer throughout the whole lifecycle of the project. I rely on the input of our brilliant designers from early requirement meetings with the client,
         to analysis, development, and even maintenance.</p>
</div>
<div>

<img src="https://storage.googleapis.com/mc-blog-uploads/2021/08/Lander-Arregi.png" />
    <h2>Lander Arregi, UX/UI Designer</h2>
    <p>
    I enjoy following projects across different stages - learning from them and improving. 
    The impact that the design choices and decisions have on product development makes the work very rewarding.


    </p>
</div>
<div>

<img src="https://storage.googleapis.com/mc-blog-uploads/2021/08/Maarja-Vaikla.png" />
    <h2>Paria Molayemvand, Project Manager</h2>
    <p>As a project manager, I think a software development project cannot succeed without a UX/UI designer throughout the whole lifecycle of the project. I rely on the input of our brilliant designers from early requirement meetings with the client,
         to analysis, development, and even maintenance.</p>
</div>
    </div>
</div>
</section>


</Container>


<NothingStandsComponent/>
        </>

    );
}

export default UXAndUIDesign;
