
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
      <Container maxWidth="lg">
  <section className="py-12">
    <h4 className="font-light text-2xl">
      UX and UI go hand in hand. And when they’re done right, you’ll see it
      reflected in your user conversion, engagement, and retention across the
      board.
    </h4>

    <div className="mt-8">
      <img
        className="w-full h-auto"
        src="https://storage.googleapis.com/mc-blog-uploads/2021/08/c1db6526-mooncascade-ii-146-copy-scaled.jpg"
        alt="Not found"
      />
    </div>

    <div className="py-12">
      <h1 className="text-center text-2xl font-medium mb-8">
        What you get out of it
      </h1>

      <div className="space-y-4">
        {content.map((item) => (
          <div className="collapse-box" key={item.id}>
            <div
              className={`flex items-center justify-between px-4 py-2 border rounded-lg ${
                openIndex === item.id ? 'border-gray-500' : 'border-gray-300'
              }`}
              onClick={() => handleToggle(item.id)}
            >

              <h3 className="cursor-pointer">{item.title}</h3>
              {openIndex === item.id ? (
                <RemoveIcon className="iconStyle" />
              ) : (
                <AddIcon className="iconStyle" />
              )}
            </div>
            <Collapse in={openIndex === item.id} className="Collapse">
              {item.point && item.point.length > 0 ? (
                <ul className="mt-2 space-y-1">
                  {item.point.map((ele, index) => (
                    <li key={index}>{`${ele} ${index}`}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2">{item.description}</p>
              )}
            </Collapse>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h1 className="text-center text-2xl font-medium mb-8">
        Related projects
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-semibold">Coinmetro</h2>
          <p className="text-sm">
            FinTech,UX/UI Design,Mobile App Development
          </p>
          <img
            className="mt-2 w-full h-auto"
            src="https://storage.googleapis.com/mc-blog-uploads/2022/04/587b8af2-thumbnail_2400x2400-two-pictures-in-one-row.png"
            alt="Coinmetro"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">iZwop</h2>
          <p className="text-sm">Web & Back-End Development,Cloud Services</p>
          <img
            className="mt-2 w-full h-auto"
            src="https://storage.googleapis.com/mc-blog-uploads/2022/08/011704ec-2-featured_2400x2400-two-pictures-in-one-row.png"
            alt="iZwop"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Swedbank</h2>
          <p className="text-sm">
            FinTech,UX/UI Design,Mobile App Development
          </p>
          <img
            className="mt-2 w-full h-auto"
            src="https://storage.googleapis.com/mc-blog-uploads/2021/11/Swedbank-1.png"
            alt="Swedbank"
          />
        </div>
      </div>
    </div>

    <div className="py-24">
      <h1 className="text-center text-2xl font-medium mb-12">
        Working with us means working with a team of industry experts
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <img
            className="w-full h-auto"
            src="https://storage.googleapis.com/mc-blog-uploads/2021/08/Paria.png"
            alt="Paria Molayemvand"
          />
          <h2 className="mt-4 text-xl font-semibold">
            Paria Molayemvand, Project Manager
          </h2>
          <p className="text-sm mt-2">
            As a project manager, I think a software development project cannot
            succeed without a UX/UI designer throughout the whole lifecycle of
            the project. I rely on the input of our brilliant designers from
            early requirement meetings with the client, to analysis,
            development, and even maintenance.
          </p>
        </div>
        <div>
          <img
            className="w-full h-auto"
            src="https://storage.googleapis.com/mc-blog-uploads/2021/08/Lander-Arregi.png"
            alt="Lander Arregi"
          />
          <h2 className="mt-4 text-xl font-semibold">Lander Arregi, UX/UI Designer</h2>
          <p className="text-sm mt-2">
            I enjoy following projects across different stages - learning from
            them and improving. The impact that the design choices and decisions
            have on product development makes the work very rewarding.
          </p>
        </div>
        <div>
          <img
            className="w-full h-auto"
            src="https://storage.googleapis.com/mc-blog-uploads/2021/08/Maarja-Vaikla.png"
            alt="Maarja Vaikla"
          />
          <h2 className="mt-4 text-xl font-semibold">
            Paria Molayemvand, Project Manager
          </h2>
          <p className="text-sm mt-2">
            As a project manager, I think a software development project cannot
            succeed without a UX/UI designer throughout the whole lifecycle of
            the project. I rely on the input of our brilliant designers from
            early requirement meetings with the client, to analysis,
            development, and even maintenance.
          </p>
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
