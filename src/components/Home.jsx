
import React, { useEffect, useState } from 'react';
import bisnis from '../assets/bisniss.jpg';

const Home = () => {
  const [h2Text, setH2Text] = useState('');
  const [h6Text, setH6Text] = useState('');
  const h2Content = 'Bermitra untuk Menciptakan Transformasi Digital.';
  const h6Content = '👋Hai, mari kita bekerja sama';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= h2Content.length) {
        setH2Text(h2Content.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [h2Content]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= h6Content.length) {
        setH6Text(h6Content.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [h6Content]);

  return (
    <>
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20 " id="beranda">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-3/5">
              <h6 className="mb-2 md:mb-0">{h6Text}</h6>
              <h2 className="md:text-7xl text-4xl font-bold text-navi leading-relaxed">{h2Text}</h2>
            </div>
            <div>
              <img src={bisnis} alt="" className="lg:h-[500px] rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
