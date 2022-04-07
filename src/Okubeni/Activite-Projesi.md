- Google'da "geolocation api" araması yapılır
- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API linkine gidilir.
- _Using the Geolocation API_ bölümünde gidilir.
- Buradan aşağıdaki kullanım örneği alınır.

```js script
navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

Artık projeyi kodlayabiliriz.

_DecideActivity.js_ içinde **'rcc'** kısayoluyla DecideActivity componentini tanımlıyoruz.

**render()** fonksiyonun içine girip
javascripte erişmek için **window.** yazıp, mozilladan aldığımız fonksiyonu yapıştırıyoruz.
```js script
class DecideActivity extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      doSomething(position.coords.latitude, position.coords.longitude);
    });

    return (
      <div>
        
      </div>
    )
  }
}
export default DecideActivity;
```
ikinci **callback fonksiyonu** olarak ***error***'u ***Arrow function*** olarak dönüyoruz.
```js script
  render() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    },
    (err) => {
      console.log(err.message);
    }
    );

    return (
      <div></div>
    )
  }

```
