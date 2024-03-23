import React from 'react';
import hardware from '../assets/hardware.jpg';
import coding from '../assets/coding.jpg';
import jaringan from '../assets/jaringan.jpg';
import desain from '../assets/desain.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Pengaturan autoplay
    autoplaySpeed: 2000, // Kecepatan autoplay dalam milidetik (ms)
    customPaging: function (i) {
      // Mengganti titik-titik dengan elemen yang tidak terlihat
      return <div style={{ visibility: 'hidden' }}></div>;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-navi rounded-t-3xl   shadow-xl p-4 max-w-screen-2xl mx-2 mt-12">
        <h2 className="text-base font-semibold text-orange text-left mt-4  px-5">LAYANAN KAMI</h2>
        <p className="text-white px-4 text-3xl font-sans mt-10">Berikut adalah beberapa layanan yang kami tawarkan.</p>
        <div className=" m-auto  mt-10 mb-8">
          <Slider {...settings}>
            <div className="bg-orange h-[360px] text-navi rounded-xl">
              <div className="h-56 rounded-t-xl  flex justify-center items-center">
                <img src={hardware} alt="" className=" rounded-t-xl h-full w-full" />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 p-4">
                <p className="text-xl font-semibold">Amore Dev</p>
                <p>Perbaikan dan Perawatan Perangkat Komputer, Printer dan lainnya.</p>
              </div>
            </div>
            <div className="bg-orange h-[360px] text-navi rounded-xl">
              <div className="h-56 rounded-t-xl  flex justify-center items-center">
                <img src={coding} alt="" className=" rounded-t-xl h-full w-full" />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 p-4">
                <p className="text-xl font-semibold">Amore Apps</p>
                <p>Pembuatan Aplikasi Berbasis Website dan Android.</p>
              </div>
            </div>
            <div className="bg-orange h-[360px] text-navi rounded-xl">
              <div className="h-56 rounded-t-xl  flex justify-center items-center">
                <img src={jaringan} alt="" className=" rounded-t-xl h-full w-full" />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 p-4">
                <p className="text-xl font-semibold">Amore Sigra</p>
                <p>Sistem Integrasi, Jaringan Komputer dan Instalasi CCTV.</p>
              </div>
            </div>
            <div className="bg-orange h-[360px] text-navi  rounded-xl">
              <div className="h-56 rounded-t-xl  flex justify-center items-center">
                <img src={desain} alt="" className=" rounded-t-xl h-full w-full" />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 p-4">
                <p className="text-xl font-semibold">Amore Studio</p>
                <p>Pembuatan Logo, Motion Graphic dan Desain Grafis</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Services;
