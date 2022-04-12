import './App.css';
import React, { Component } from 'react'
import axios from 'axios';
import Post from './Post';

class App extends Component {
  state = {
    posts:[],
    isloading:true,
  };

  componentWillMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(request => request.data)
        .then(request =>
          {
            setTimeout(() =>
              {
                  this.setState({
                    posts: request,
                    isloading: false,
                  });
              },2000)
          }
        )
  }
  render() {
    
    return (
      <div className='App'>
        <Post {...this.state}/>
      </div>
    )
  }
}
export default App;
