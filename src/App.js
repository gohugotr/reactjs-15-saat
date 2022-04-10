import React, { Component } from 'react'
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users:[],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(data => 
        {
            this.setState(
              {
                users: data,
              }
            );
      });
  }
  
  render() {
    return (
      <div className='App'>
        <h1>Users</h1>
        {
            this.state.users.map((user) => (
              <div key={user.id}>
                  <strong>
                    {user.name} : 
                  </strong>  
                {
                  user.email
                }
              </div>
            ))
        }
      </div>
    );
  }
}
export default App;