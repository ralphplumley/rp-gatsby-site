import React from "react"
import CONSTANTS from "../constants"



class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  checkForCookie() {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('plumCookie='))) {
      return true
    } else {
      let now = new Date();
      // expire in an hour
      let time = now.getTime();
      time += 3600 * 1000; 
      now.setTime(time)
      document.cookie = "plumCookie=purple; expires=" + now.toUTCString() + ";"
      return false
    }
  }
  
  componentDidMount() {
    const cookie = this.checkForCookie()
    console.log("cookie state: ", cookie)

    let url;
    if (!cookie) {
      // if there's no cookie, we'll consider the user unique
      // so increment
      url = CONSTANTS.incrementCountUrl
    } else {
      // get count, but don't update
      url = CONSTANTS.getCountUrl
      // url = CONSTANTS.incrementCountUrl
    }

    console.log("url: ", url)
    fetch(url)
      .then(response => response.json())
      .then(data => {
          const count = (cookie ? data : data.data.Attributes.count.N)
          this.setState({
            count
          })
      });
  }

  render() {
    return this.state.count > 0 ? <h1>Count: {this.state.count}</h1> : <h1></h1>
  }
}

export default Counter
