import React, { Component } from "react";
import Sublifecycle from "./Sublifecycle";

export default class Lifcycle extends Component {
  // Yang pertam di jalankan itu connstructor
  constructor(props) {
    super(props);

    this.state = {
      makanan: "Bakso",
      data : {},
      tampilHalamanSub : false,
    };
  }

    // componendidmount : untuk mengambil data API

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json
        });
      });
  }

    ubahMakanan(value){
        this.setState({
          makanan: value  
        })
    }
  // Baru render nya dijalankan
  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>

        {this.state.tampilHalamanSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />}
        <button onClick = {()=> this.setState({tampilHalamanSub: !this.state.tampilHalamanSub})}type="">Tampilkan halamnan Sub</button>
      </div>
    );
  }
}
