import './App.css';
import React, { Component } from 'react'
import Child from './Child';

class App extends Component {
  constructor(props)
  {
    console.log('Constructor çalıştı..')
    super(props);
  }

  componentWillMount(){
    console.log("WillMount çalıştı.");
  }

  componentDidMount(){
    console.log("DidMount çalıştı."); 
    // Renderden sonra bir güncelleme istiyorsak bu önemli yapıyı kullanabiliriz.
  }

  render() {
    console.log('Render çalıştı.')
    return (
      <div>
        <Child />
      </div>
    )
  }
}
export default App;
