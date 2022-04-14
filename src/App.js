import './App.css';
import React,{Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends Component{
  
  render()
  {
    const Anasayfa = () => {
      return (
          <h2>Anasayfa</h2>
      );
    };
    
    const İletisim = () => {
      return (
        <h3>İletişim</h3>
      )
    };
    
      return (
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Anasayfa />} />
              <Route path="/iletisim" element={<İletisim />} />
            </Routes>
          </div>
        </Router>
      );
  }
}

export default App;
