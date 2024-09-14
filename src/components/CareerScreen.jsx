import React, { useState  , useEffect} from 'react';
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
            <div className='header-container-image'>
                <img src='https://storage.googleapis.com/mc-blog-uploads/2021/12/Mooncascade-Carreers.png' alt='header-image-not-found' />
            </div>


            <Container maxWidth='lg'>
                <div className='Energyheader'>
                    <Container maxWidth="xl">
                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                {openIndex != null ? (
                                    <img src={content[openIndex].image} alt='selected-content' />
                                ) : <img src='https://storage.googleapis.com/mc-blog-uploads/2021/12/Mooncascade-Summer-Days.png' alt='image not found ' />}
                            </div>
                            <div>
                                  <p style={{fontSize:'25px'}}>Life at Nouslab</p>
                        <h1 style={{fontWeight:'500', fontSize:'18px'} }>
                        We are truly amazed by the people we work with – we are not
                         just co-workers, we are friends as well. We take ownership of our 

 
                        </h1>
                                <div className='ContainerCollapse'>
                                    <div>
                                        {content.map((item) => (
                                            <div className='collapse-box' key={item.id}>
                                                <div className={openIndex === item.id ? 'no-border IconButton active' : 'border IconButton'} onClick={() => handleToggle(item.id)}>
                                                    {openIndex === item.id ? <RemoveIcon className='iconStyle' /> : <AddIcon className='iconStyle' />}
                                                    <h3 onClick={() => handleToggle(item.id)}>
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
                        </div>
                    </Container>
                </div>


                <ValuePeople/>
            </Container>
        </>
    );
};

export default CareerScreen;
