import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props)
  {
    console.log('Constructor çalıştı..')
    super(props);
    this.state = {
      favorirengim:'Kırmızı'
    }
  }

  componentWillMount(){
    console.log("WillMount çalıştı.");
  }

  componentDidMount(){
    console.log("DidMount çalıştı.");
    // 4 saniye sonra metodu çalıştıracaz. Böylece Render 2 kere çalışacak.
    setTimeout(() => {
      this.setState({
        favorirengim: 'Mavi',
      })
    }, 4000);
    // Renderden sonra bir güncelleme istiyorsak bu önemli yapıyı kullanabiliriz.
  }

  render() {
    console.log('Render çalıştı.')
    return (
      <div>
        Favori Rengim {this.state.favorirengim}
      </div>
    )
  }
}
export default App;
