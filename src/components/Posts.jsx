import React, { Component } from 'react';
import axios from 'axios';

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: []
    };
  }

  componentDidMount() {
    const API = "https://jsonplaceholder.typicode.com/posts";
    // fetch(API)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data ,"data");
    //     this.setState({ postData: data });
    //   })
    //   .catch(err => console.log(err));
    axios.get(API).then(res=> this.setState({postData :res.data}))
    .catch(err=>console.log(err));
  }

  render() {
    return (
      <div>
        <h2>Jsonplaceholder Posts API</h2>
        {this.state.postData.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{post.userId}</p>
            <p>{post.id}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
