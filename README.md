# LifeCycle / Yaşam Döngüsü
## componentWillMount, componentDidMount

** 48. Ders **

1. İlkönce **conctructor()** metodu çalışır.
2. Sonra **componentWillMount()** metodu çalışır.
3. Sonra **render()** metodu çalışır.
4. Sonra **componentDidMount()** metodu çalışır.

### DidMount Metodu
Burada **DidMount** metodunu 4 saniye sonra çalıştırdığımızda;
ilk olarak render metodundan hemen sonra çalışacak. 
İkinci olarak da 4 saniye gecikmeli olarak **render()** metodunu tekrar çalıştırıp, 
sonra da **componentDidMount()** metodu çalışacaktır.
```js script
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
```