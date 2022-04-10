import React, { Component } from 'react'
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users:[],
      isloading:true,
    };
  }
  componentDidMount() {
    setTimeout(()=>{
          fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
              this.setState({
                users: data,
                isloading: false,
              });
            });
    },1000)
  }
  
  render() {
    const{isloading} = this.state;
    return (
      <div className="App">
        <h1>Users</h1>
        {
          isloading ? 'Yükleniyor ....' : ''
        }
        {this.state.users.map((user) => (
          <div key={user.id}>
            <strong>{user.name} :</strong>
            {user.email}
          </div>
        ))}
      </div>
    );
  }
}
export default App;