import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    // Constructor adalah codingann yang pertama kali dijalankan 
    // State bisa diubah
    //  Props read only (tidak bisa diubah)
    // State bisa diganti menggunakan this.state
    // State bisa menjadi props ketika di oper ke komponen lain

    // Props adalah hasil operan dari suautu kommponen utama ke komponen bawahannya bisa beruba state atau arrow function 
    constructor(props){
        super(props);
        this.state = {

            makanan : 'Bakso'
    


        }
    }

    gantiMakanan = (makanan_baru) =>  {
        this.setState({
            makanan : makanan_baru
        })
    }

   
  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>

        <button onClick={() => this.gantiMakanan("Ayam Geprek")}>Ganti makanan</button>
        {/* <button OnClick={() => this.setState({ makanan: "Soto"})}></button>        */}
        <Operan makanan={this.state.makanan}  gantiMakanan={this.gantiMakanan}/>

      </div>
    )
  }
}
