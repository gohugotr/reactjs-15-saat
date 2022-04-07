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
