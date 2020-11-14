import React from "react"
import CONSTANTS from "../constants"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  componentDidMount() {
    const url = CONSTANTS.counterUrl
    fetch(url, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          count: data.Attributes.count.N,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return this.state.count > 0 ? <h1>Count: {this.state.count}</h1> : <h1></h1>
  }
}

export default Counter
