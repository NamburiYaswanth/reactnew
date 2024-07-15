import React, { Component } from "react";
class About extends Component {
    courses = ["A","B","C","D"]
  render() {
    return (
      <>
        <h2>About Page</h2>
        <ul>
        {this.courses.map((val , ind)=>(
         <li key={ind}>{val}</li>
        ))}
        </ul>
      </>
    );
  }
}
export default About;
