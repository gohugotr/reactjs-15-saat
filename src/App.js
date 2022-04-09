import './App.css';
import React, { Component } from 'react'
import Child from './Child';

class App extends Component {
  constructor(props)
  {
    console.log('Constructor çalıştı..')
    super(props);
    this.state = {
      favorirengim:'Kırmızı',
    }
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount(){
    console.log("WillMount çalıştı.");
  }

  componentDidMount(){
    console.log("DidMount çalıştı."); 
    // Renderden sonra bir güncelleme istiyorsak bu önemli yapıyı kullanabiliriz.
  }
  onClick(){
    this.setState({
      favorirengim:'Mavi',
    });
  }

  render() {
    console.log('Render çalıştı.')
    return (
      <div className='App'>
        <Child renk={this.state.favorirengim} />
        <button onClick={this.onClick}>Renk değiştir</button>
      </div>
    );
  }
}
export default App;
