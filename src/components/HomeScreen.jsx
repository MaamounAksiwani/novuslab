
import React , {useEffect} from 'react';
import { Container } from '@mui/material';
import '../App.css';
import HomeHeader from './HomeHeader'
import ClientsWorked from './ClientsWorked'
import WeCanDo from './WeCanDo'
import HowDoWeWork from './HowDoWeWork'
import WOW from 'wowjs';
import ProudlyCertified from './ProudlyCertified'
const HomeScreen = () => {

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0);
        document.title = "Home | Novuslab";

        return () => {
            document.title = "";
        };
    }, []);
    return (

        <section className='wow fadeInDown' data-wow-duration='1.5s'>
            <HomeHeader />
            <ClientsWorked/>
            <WeCanDo/>
            <ProudlyCertified/>
            <HowDoWeWork/>
        </section>


    );
};

export default HomeScreen;
