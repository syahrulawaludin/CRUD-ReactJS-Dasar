import React from 'react'


// Const : Variabel yang tidak bisa diubah 
// const harga = 3000;
// harga = 400;

// Var : global scope (bisa diubah) walaupun di deklarasi diluar scope
var harga = 20000;
if(true){
  var harga = 300000;
}

// Let : block scope (tidak bisa diubah)
// let harga = 20000;
// if(true){
//   let harga = 300000;
// }

const Variable = () => {
  return (
    <div>
        <h2>Harga : {harga}</h2>
    </div>
  )
}

export default Variable
