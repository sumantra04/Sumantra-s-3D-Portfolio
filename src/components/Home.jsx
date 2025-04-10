import React from 'react';
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gray-900 flex justify-center items-center relative"
    >
      <div className="spline-container" style={{ width: '100%', height: '100%' }}>
        <Spline scene="https://draft.spline.design/ydVligdvadYeHG9Q/scene.splinecode" />
      </div>
      <div className="absolute text-white text-4xl font-bold" style={{ top: '50%', left: '5%', transform: 'translateY(-50%)' }}>
        Sumantra Bandyopadhyay
      </div>
    </section>
  );
};

export default Home;
