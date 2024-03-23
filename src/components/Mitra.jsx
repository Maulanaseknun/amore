import React from 'react';
import labokong from '../assets/labokong.png';
import sma from '../assets/smam.png';
import stikes from '../assets/stikes.png';
import sd from '../assets/sd.png';
import nipah from '../assets/nipah.png';

const Mitra = () => {
  return (
    <div className="md:px-14 px-4 py-1 max-w-screen-2xl mx-2   bg-navi rounded-b-3xl ">
      <div className="text-center my-8 px-4">
        <h2 className="text-base  font-semibold text-left  text-orange mb-4">MITRA KAMI</h2>
        <hr className="my-4 border-b-2 border-orange" />

        <p className="text-lg  leading-relaxed text-justify md:mt-6 text-white">Sejak resmi berdiri pada tahun 2021 kami telah menangani beberapa mitra personal serta berbagai perusahaan dan instansi pemerintahan, beberapa diantaranya.</p>

        <div className="my-12 flex flex-wrap justify-center items-center gap-14 text-orange">
          <div className="flex flex-col items-center font-mono text-xs">
            <img src={labokong} alt="Labokong" className="w-20 h-20 object-contain mb-2" />
            <span>Desa Labokong, Kecamatan Donri-Donri</span>
          </div>
          <div className="flex flex-col items-center font-mono text-xs">
            <img src={nipah} alt="Nipah" className="w-20 h-20 object-contain mb-2" />
            <span>Kolam Regulasi Nipa-Nipa</span>
          </div>
          <div className="flex flex-col items-center font-mono text-xs">
            <img src={stikes} alt="Stikes" className="w-20 h-20 object-contain mb-2" />
            <span>Stikes Graha Edukasi Makassar</span>
          </div>
          <div className="flex flex-col items-center font-mono text-xs">
            <img src={sma} alt="SMA" className="w-20 h-20 object-contain mb-2" />
            <span>SMA Negeri 9 Maros</span>
          </div>
          <div className="flex flex-col items-center font-mono text-xs">
            <img src={sd} alt="SD" className="w-20 h-20 object-contain mb-2" />
            <span>UPTD SMP Negeri 8 Pare-Pare</span>
          </div>
          <div className="flex flex-col items-center font-mono text-xs">
            <img src={sd} alt="SD" className="w-20 h-20 object-contain mb-2" />
            <span>UPTD SPF SD Negeri SIPALA 1 Makassar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mitra;
