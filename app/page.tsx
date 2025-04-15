import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header';


const Home = () => {
  return (
    <div className="bg-[url('/images/bg.jpg')] bg-cover bg-center h-screen w-full ">
      <Navbar />
      <Header />
    </div>
  );
}

export default Home
