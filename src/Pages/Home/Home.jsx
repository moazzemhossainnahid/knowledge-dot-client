import React from 'react';
import Banner from '../../Components/Components-Nahid/HomePageSection/BannerSection/Banner';
import LimitedLearningBanner from '../../Components/Components-Nahid/HomePageSection/LimitedLearningBanner/LimitedLearningBanner';
import PopulerCategory from '../../Components/Components-Nahid/HomePageSection/PopulerCategory/PopulerCategory';
import PopulerCourses from '../../Components/Components-Nahid/HomePageSection/PopulerCourses/PopulerCourses';
import UpcomingEvent from '../../Components/Components-Nahid/HomePageSection/UpcommingEvents/UpcomingEvent';
import Footer from '../SharedPages/Footer/Footer';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <PopulerCategory />
            <PopulerCourses />
            <UpcomingEvent />
            <LimitedLearningBanner />
            <Footer />
        </div>
    );
};

export default Home;