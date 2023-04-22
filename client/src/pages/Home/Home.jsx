
import React from 'react';
import Categories from '../../Components/Categories/Categories';
import Contact from '../../Components/Contact/Contact';
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts';
import Slider from '../../Components/Slider/Slider';
import TrendingProducts from '../../Components/TrendingProducts/TrendingProducts';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type='featured' />
      <Categories />
      <TrendingProducts type='trending' />
      <Contact />
    </div>
  )
}

export default Home