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
İkinci **callback fonksiyonu** olarak ***error***'u ***Arrow function*** olarak dönüyoruz.

Ayrıca ***npm start*** diyerek, <code>console.log(position)</code> ve <code>console.log(err.message)</code> ile kontrollerimizi yapabiliriz.
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
### state Nasıl Kullanılır?
*longitude* sürekli değişikliğe uğrayan bir değer olduğu için **state** içinde tutulması lazım.
* state sadece class componentlerde kullanılabilir, function ve stateless componentte kullanılamaz.
* state, *component class*'ından hemen sonra ve **render()** den hemen önceye yazılır.
* state = { longitude:0, } şeklinde yazılır.
* React ise bunu **constructor** içinde kullanmamızı istiyor. Kullanım şekli şu şekilde;
```js script
constructor(props)
{
  super(props);
  this.state = 
  { 
    longitude: 0,
  };
};
```
* jsx ile html içinde şöyle gösterilir.
```js script
  <div>
    {this.state.longitude}
  </div>
````
Tabi gösterilen değer ilk atanan initial değer olan 0 olacaktır.
doğru değeri göstermek için ***position*** aldığımız yere gelip,
```js script
  render() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    }, 
    ...
```
* ***sst*** kısaltmasıyla <code>this.setState{()}</code> kullanarak, güncel değeri bastırabiliriz.
* <code>this.setState</code> kullanımı şu şekilde
```js script
  this.setState{(
    longitude: position.coords.logitude
  )};
```
