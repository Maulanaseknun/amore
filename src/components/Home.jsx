import React from 'react';
import bisnis from '../assets/bisniss.jpg';

const Home = () => {
  return (
    <>
      <div className="md:px-12 p-4   max-w-screen-2xl mx-auto  mt-20 " id="beranda">
        <div>
          <div className=" flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-3/5  ">
              <h6 className="">👋Hai, mari kita bekerja sama</h6>

              <h2 className="md:text-7xl text-4xl font-bold text-navi leading-relaxed ">Bermitra untuk Menciptakan Transformasi Digital.</h2>
            </div>
            <div>
              <img src={bisnis} alt="" className=" lg:h-[500px] rounded-lg  " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
