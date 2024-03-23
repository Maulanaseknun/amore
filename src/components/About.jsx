import React from 'react';

const About = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden relative px-5  mt-10 md:mt-20">
      <div className="absolute inset-0 bg-white bg-opacity-75"></div>
      <div className="relative p-6">
        <h2 className="text-base font-semibold text-left  text-orange">TENTANG AMORE</h2>
        <hr className="my-4 border-b-2 border-orange" />
        <p className="text-lg leading-relaxed text-justify md:mt-12 text-navi">
          PT Amore Teknologi Kreatif adalah Perusahaan Teknologi yang berdedikasi membantu para mitra melalui solusi-solusi yang dihadirkan dalam memanfaatkan perkembangan teknologi yang ada untuk menunjang sistem kerja mitra. Berkembangnya
          teknologi saat ini menjadikan banyaknya pula pilihan-pilihan dalam penerapan teknologi apa yang sesuai, hal inilah yang mendorong kami untuk menjadi Perusahaan terbaik dalam memberikan pilihan-pilihan atau solusi yang inovatif,
          bermanfaat, dan sesuai dengan kebutuhan mitra-mitra kami.
        </p>
      </div>
    </div>
  );
};

export default About;
