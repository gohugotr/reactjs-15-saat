# Api ile veri çekme

## [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)'dan 5 maddede veri çekme

* https://jsonplaceholder.typicode.com/users alanından veri çekmeye çalışalım.

1. **state** içinde users değişkeni dizi olarak tanımlanır.

```js script
  constructor(props) {
    super(props);

    this.state = {
      users:[],
    };
  }
```

2. <code>render()</code> alanından hemen önce, **cdm** kısayoluyla **componentDidMount()** fonksiyonu yazılır.
3. [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) sitesindeki api kullanım örneği alınır.

```js script
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
```

4. Bunun içinde, JSON tipinde çekilen veri, <code>this.setState</code> (kısayolu _sst_) ile users array'ine atanır.

```js script
componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(data =>
        {
            this.setState(
              {
                users: data,
              }
            );
      });
  }
```
5. Son olarak render() içine gösterim yapılır.

```js script
  render() {
    return (
      <div className='App'>
        <h1>Users</h1>
        {
            this.state.users.map((user) => (
              <div key={user.id}>
                <strong> {user.name} : </strong>
                {
                  user.email
                }
              </div>
            ))
        }
      </div>
    );
  }
```
<ins>**Sonuç**</ins><hr/>
 <img src="2022-04-10-15-02-20.png" width="400">

## loading yapımı; Api ile veri çekerken, 'Yükleniyor ...' mesajı verdirme. 
<hr/>
1. **constructor** içine **this.state** ile *isloading* değişkeni **true** olarak set edilir.
```js script
  constructor(props) {
    super(props);

    this.state = {
      users:[],
      isloading:true,
    };
  }
```
2. **componentDidMount()** fonksiyonu içinde **this.setSate** ile *isloading* değişkeni **false** olarak güncellenir. Burada setTimeout fonskiyonunu kullanma zprunlu değil. 

Sadece daha iyi test edebilmek amacıyla setTimeout fonksiyonu ile datanın 2 saniye geç gelmesini sağlıyoruz.
```js script
  componentDidMount() {
    setTimeout(()=>{
          fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
              this.setState({
                users: data,
                isloading: false,
              });
            });
    },2000)
  }
```
3. **render()**'den sonra **return**'den önce isloading değişkenini kulanabilmek amacıyla, this.state ile değişkenin güncel durumunu alıyoruz.
```js script
 render() {

    const{isloading} = this.state;

    return ( ......
```
4. Son olarak gösterimi ternary koşulu ile sağlıyoruz..
```js script
  render() {
    const{isloading} = this.state;
    return (
      <div className="App">
        {
          isloading ? 'Yükleniyor ....' : ''
        }
    .......
```