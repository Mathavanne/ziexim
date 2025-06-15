import React from 'react';
import Hero from '../../assets/Components/Hero/Hero';
// import Footer from '../../assets/Components/Footer/Footer';
import Categories from '../../assets/Components/Categories/Categories';

const Home = () => {
  return (
    <>
      <Hero />

      {/* <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-gray-800 tracking-widest font-medium title-font mb-1">
          EXPLORE
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Discover Our Offerings
        </h1>
      </div> */}

      <Categories />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
