import React from 'react';
import contact from '../assets/contact.jpg';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '6285340630063';

    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <>
      <div className="md:px-12 p-4   max-w-screen-2xl mx-auto mt-4  ">
        <div>
          <div className=" flex flex-col md:flex-row-reverse justify-between items-center">
            <div className="md:w-2/4  ">
              <h2 className="md:text-6xl text-4xl font-bold text-navi leading-relaxed ">Anda Tertarik Untuk Bekerja Sama ?</h2>
              <div className="mt-5">
                <p>Tekan Tombol Dibawah ini Untuk Menghubungi Tim Kami.</p>
                <button onClick={handleWhatsAppClick} className="bg-navi p-2 mt-2 text-orange font-normal rounded-3xl text-justify text-xs">
                  HUBUNGI SEKARANG
                </button>
              </div>
            </div>
            <div>
              <img src={contact} alt="" className=" lg:h-[500px] rounded-lg  " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
