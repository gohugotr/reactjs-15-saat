# `React Router`

### Kurulum

`npm i react react-dom react-router-dom`

### import edilme şekli

<code>import { BrowserRouter as Router, Routes, Route } from "react-router-dom";</code>

- App.js içindeki ana kapsayıcı `BrowserRouter` olmalıdır.
- `BrowserRouter as Router` şeklinde de kısaltılabilir.
- `Router` kapsayıcısının içine `<Routes> ... </Routes>` tanımlanır.
- `<Routes> ... </Routes>` içinde ihtiyaç duyulduğu kadar `Route` tanımlanabilir.

### Route kullanım şekli

```js script
    <Route path="/" element={<Anasayfa />} />
    <Route path="iletisim" exact element={<Iletisim />} />
    <Route path="destek" element={<h2>Destek</h2>} />
```

### Tam kullanım şekli

```js script
class App extends Component {
  render() {
    const Anasayfa = () => {
      return <h2>Anasayfa</h2>;
    };

    const Iletisim = () => {
      return <h3>İletişim</h3>;
    };

    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Anasayfa />} />
            <Route path="iletisim" element={<Iletisim />} />
            <Route path="destek" element={<h2>Destek</h2>} />
          </Routes>
        </div>
      </Router>
    );
  }
}
```
