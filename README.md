# `Galeri - resim projesi / Bölüm 9 - Ders 70`

## <u>Tailwind.css implementasyonu</u>

1. <code>npm install -D tailwindcss postcss autoprefixer</code>
2. <code>npx tailwindcss init</code>
3. `npx tailwindcss init` komutuyla oluşturulan `tailwind.config.js` dosyasının içeriği şu şekilde düzenlenir.
```js script
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
4. `main.css` dosyası oluşturulur. Bu dosyanın en başına aşağıdaki direktifler girilir.
```js script
@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. **package.json** `"scripts": { ... ` içine aşağıdaki satırı ekliyoruz.
   `"tail": "npx tailwindcss -i ./src/main.css -o ./src/index.css --watch"`
6. Farklı bir terminal penceresinde `npm run tail` komutu verilir.
   Böylece **main.css** içinde yazdığımız `tailwind css`, standart css çıktısı üretmiş oluruz. Css kodlarımız, senkronize bir şekilde **_index.css_** dosyasına yazılır.
7. main.css içinde tailwind css yazarken @apply ile başlamalıyız. Yanyana veya alt alta yazılabilir.
```css
  .search {
    @apply placeholder:italic 
      border 
      border-slate-300 
      rounded-md 
      py-2 pl-9 pr-3 
      shadow-sm 
      focus:outline-none 
      focus:ring-1 sm:text-sm;
  }
```
<hr/>

## `SearcBar componenti` arama alanına girilen ifadeyi, `App componentine` gönderme

<u>`Yapılanlar`</u>

1. SearcBar `class componenti` SearcBar.js ile oluşturulur.
2. Tailwind css ile arama kutusu oluşturulur.
3. state tanımlanır.
4. `onChange` ve  event'iyle girişler kontrol edilir.
5. `onClick` ve `onKeyDown` eventleriyle ile arama iconuna tıklandığında girilen değer `App componentine` gönderilir.
6. App.js içinde gelen state değerini karşılayan onSearchImage fonksiyonu yazılır.
7. `<SearchBar />` componentine `onSearchImage propsu` tanımlanır ve `onSearchImage` set edilir.
<hr/>

1. `rcc` ile `SearcBar class componenti`, SearcBar.js içinde oluşturulur.
```js script
import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return <div>SearchBar</div>;
  }
}
```
2. `<div></div>` arasına, Tailwind css ile arama kutusu oluşturulur. **input** elementindeki **className="search"** main.css içinde tanımlandı.
```js script
  <div className="container mx-auto w-4/6 py-4 px-4">
    <label className="relative block">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
          />
        </svg>
      </span>
      <input className="search" placeholder="Ara..." type="text" name="search" />
    </label>
  </div>
```
### `Fonksiyonlar`

3. **constructor** içinde `search state'i` için başlangıç değeri tanımlanır.
```js script
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
```
4. input içinde **`onChange`** olayına `inputChanged` fonksiyonu atanır. Böylece `setState` ile giriş takip edilir.
```js script
<input className="search" onChange={this.inputChanged} placeholder="Ara..." type="text" name="search" />
```

`sst` kısayoluyla `this.setState({})` içinde `search state'i` **input değeriyle** güncellenir.

```js script
  inputChanged = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
```
5. svg arama iconunda **`onClick`** olayına atama yapılır. <code>onClick={this.svgSearchClick}</code>
  * svgSearchClick arrow fonksiyonu ile App.js içinde **<SearchBar />** componentindeki `onSearchImage props`'una `search state` durum bilgisi gönderilir.
  ```js script
    svgSearchClick = () => {
        // this.props. adı App.js'te ki fonksiyon adı olacak. Ona paramtre gönderiyoruz.
        this.props.onSearchImage(this.state.search);
      };
  ```
  * Enter tuşuna basılınca da değer göndermek için input için **`onKeyDown`** olayını tanımlıyoruz.
  ```js script
      onKeyDown={(e) => {
          if (e.key === "Enter") {
            this.svgSearchClick();
          }
      }}
  ```
  6. `onSearchImage` arrow fonksiyonu, `search state`'ni parametre olarak alır.
  ```js script
      onSearchImage = (search) => {
        console.log("App.js içindeyiz : " + search);
        alert('Arana Terim: ' + search);
      };
  ```
  7. SearchBar componentinin propsuna atama yapılır.
  ```js script
      <SearchBar onSearchImage={this.onSearchImage} />
  ```
  **`Sonuç`**
  ![](2022-04-20-02-50-57.png) 

<hr/>

## `axios` ile unsplash.com apisinden veri çekme

1. `npm install --save axios` ile paketi kuruyoruz.
2. App.js içine import edilir. `import axios form "axios"`
3. axios genel yapı şu şekilde;
```js script
    axios.get("url",{
      params:{

      },
      headers: {

      }
    })
```
Bu yapıya göre dolduruyoruz.
```js script
    axios.get("https://api.unsplash.com/search/photos", {
      params: 
      { 
        query : search
      },
      headers: 
      { 
        Authorization: 'Client-ID ML5T9rOlcLziCWrr0xgufyObJ86A0gpV36rPixpv...' 
      },
    }).then(result => {
      console.log(result.data.results);
    })
```
5. onSearchImage fonksiyonunu async / await yapısına dönüştürüyoruz.
  * İlk hali
  ```js script
    onSearchImage = search => {
      axios.get("https://api.unsplash.com/search/photos", {
        params: 
        { 
          query : search
        },
        headers: 
        { 
          Authorization: 'Client-ID ML5T9rOlcLziCWrr0xgufyObJ86A0gpV36rPixpv...' 
        },
      }).then(result => {
        console.log(result.data.results);
      })
    };
  ```
  * `async/await` yapısı
  ```js script
    onSearchImage = async(search) => 
    {
      await axios.get("https://api.unsplash.com/search/photos", {
        params: 
        { 
          query : search
        },
        headers: 
        { 
          Authorization: 'Client-ID ML5T9rOlcLziCWrr0xgufyObJ86A0gpV36rPixpv...' 
        },
      }).then(result => {
        console.log(result.data.results);
      })
    };
  ```
  * Artık gelen veriyi, `const` ile  bir değişkene atayabiliriz.
  ```js script
  onSearchImage = async(search) => 
  {
      const resimData = await axios.get("https://api.unsplash.com/search/photos", {
        params: 
        { 
          query : search
        },
        headers: 
        { 
          Authorization: 'Client-ID ML5T9rOlcLziCWrr0xgufyObJ86A0gpV36rPixpv...' 
        },
      })
      console.log(resimData.data.results);
    };
  ```
6. `state` içinde **images** değişkeni tanımlanır ve başlangıç değeri olarak boş bir dizi atanır. 
  ```js script
      state = {
        images: [],
      }
  ```
7. `sst` kısayolu ile this.setState içinde gelen veri **images** değişkenine atanır.
```js script
    this.setState({
      images : resimData.data.results
    })
```
8. Test için return içinde length değerine bakabiliriz. Arama yapıldığında, varsayılan olarak 10 resim sonucu gelir.
```js script
    <p>{this.state.images.length} sayıda resim bulundu.</p>
```