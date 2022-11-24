import React, { Component } from 'react'

export default class Sublifecycle extends Component {

    componentWillUnmount() {
        this.props.ubahMakanan("Sate")
    }
  render() {
    return (
      <div>
        <h2>Componen Sub Lifecycle</h2>
      </div>
    )
  }
}
