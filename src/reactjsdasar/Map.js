 import React from "react";

//  Step by step
// 1. Membuat konstanta makanan
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



// ========= Reduce ===================
// 5. Membuat reduce, untuk menghitng total harga
const total_bayar = makanans.reduce((total_harga,makanan) =>total_harga+makanan.harga, 0); 
const Map = () => {
  return (
    <div>
      <h2>Map Sederhana</h2>
      {/* Looping */}
      <ul>

      {/* ===== Map Sederhana ========== */}
      {/* 2. Membuat map agar data dapat ditampilkan */}
        {makanans.map((makanan, index) => (
          <li>
          {/* 3. Menambahkan index dan ditambahkan 1. Agar index dimulai dari 1 dan tidak dari 0 */}
            {index + 1}. {makanan.nama} - Harga {makanan.harga}
          </li>
        ))}
      </ul>

      {/* ========== Filter ============== */}
      {/* 4.Membuat Filter */}
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
            {/* 6. Memanggil variable total bayar, agar data array dapat ditampilkan */}
      <h3>Total harga : {total_bayar}</h3>
    </div>
  );
};

export default Map;
