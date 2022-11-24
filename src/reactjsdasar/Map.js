import React from "react";

const makanans = [
  {
    nama: "Bakso",
    harga: 12000,
  },
  {
    nama: "Soto",
    harga: 15000,
  },
  {
    nama: "Mie Ayam",
    harga: 10000,
  },
  {
    nama: "Nasi Goreng",
    harga: 18000,
  },
];

// Maping sederhana
// Filter
// Reduce : Mau menghitung total harga dari semua item


const total_bayar = makanans.reduce((total_harga,makanan) =>total_harga+makanan.harga, 0); 
const Map = () => {
  return (
    <div>
      <h2>Map Sederhana</h2>
      {/* Looping */}
      <ul>
        {makanans.map((makanan, index) => (
          <li>
            {index + 1}. {makanan.nama} - Harga {makanan.harga}
          </li>
        ))}
      </ul>
      <h2>Map Filter harga lebih dari 11.000</h2>
      <ul>

        {/* Difilter dulu baru ditampilkan */}
        {makanans
          .filter((makanan) => makanan.harga > 11000)
          .map((makanan, index) => (
            <li>
              {index + 1}. {makanan.nama} - Harga {makanan.harga}
            </li>
          ))}
      </ul>

      <h3>Total harga : {total_bayar}</h3>
    </div>
  );
};

export default Map;
