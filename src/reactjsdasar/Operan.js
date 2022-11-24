import React, { Component } from 'react'

export default class Operan extends Component {

    // gantimakanan(makanan_baru) {
    //     this.setState({
    //         makanan : makanan_baru
    //     })
    // }
  render() {

    // atau bisa juga lebih simple
    const { makanan, gantiMakanan} = this.props
    return (
      <div>

          <h2>Operan State yang menjadi Props : {makanan}</h2>
          <button onClick={() => gantiMakanan("Soto")}>Ganti makanan</button>
        {/* <h2>Operan yang menjadi Props : {this.props.makanan} </h2> */}
        {/* <button onClick={() => this.props.gantiMakanan("Soto")}>Ganti makanan</button> */}
      </div>
    )
  }
}
