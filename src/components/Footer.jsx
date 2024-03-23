import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-zinc-900 text-white mt-4 p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 PT Amore Teknologi Kreatif.</p>
          <p>Alamat: Jl. Paccerakang No.170, Kota Makassar, Sulawesi Selatan</p>
          <p>Email: info@amoreteknologi.com</p>
          <div className="mt-4">
            <a href="#" className="mr-4 text-gray-300 hover:text-white">
              Beranda
            </a>
            <a href="#" className="mr-4 text-gray-300 hover:text-white">
              Tentang
            </a>
            <a href="#" className="mr-4 text-gray-300 hover:text-white">
              Layanan
            </a>
            <a href="#" className="mr-4 text-gray-300 hover:text-white">
              Kontak
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
