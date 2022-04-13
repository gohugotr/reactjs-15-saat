# `Generic Component` Oluşturma

### `Api ile veri çekme`

1. App.js'de `state` içinde posts array ve isloading boolean değişkeni ilk değerler için tanımlanır.
```js script
  state = {
    posts:[],
    isloading:true,
  };
```
2. <code>render()</code>'den sonra return alanı içinde `Posts` componentine, state <code>{...this.state}</code> kodu ile props olarak gönderilir.
```js script
  render() {
    
    return (
      <div className='App'>
        <Post {...this.state}/>
      </div>
    )
  }
```
3. **componentWillMount()** fonksiyonu içinde axios ile veriyi çekiyoruz.
Ayrıca `this.setState` ile gelen veriyi değişkenlere aktarıyoruz.
```js script
  componentWillMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(request => request.data)
        .then(request =>
          {
            setTimeout(() =>
              {
                  this.setState({
                    posts: request,
                    isloading: false,
                  });
              },2000)
          }
        )
  }
```
4. Post.js içinde gelen propsları karşılıyarak listeleme için döngü kuruyoruz.
```js script
  render() {
    return (
      <div>
          {
              this.props.isloading ? <span>Yükleniyor ...</span> 
              :
              this.props.posts.map(post =>
                    <div key={post.id}>
                        {post.title}
                    </div>
                )
          }
      </div>
    )
  }
```
### `Generic bir Component İnşa Etme`
1. **`rafce`** kısayolu ile Arrow Function Component oluşturuyoruz.
```js script
const loaderHOC = (WrappedComponent) => {
  return (
    <div>
        
    </div>
  )
}
export default loaderHOC
```
2. ```js script
    return class loaderHOC extends Component { 
            render() {
                return ....
            }
        }
```
    kalıbının içine return ile generic ifadeyi dönüyoruz.
3. ```js script
    const loaderHOC = (WrappedComponent) => {
    return class loaderHOC extends Component {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }}

    export default loaderHOC;
```
4. Post.js içinde `import loaderHOC from './loaderHOC'` ile loaderHOC.js'yi import ediyoruz.
Son olarak `export default Post;` ifadesini `export default loaderHOC(Post);`olarak değiştiriyoruz.

    **ÖZET:** Artık loaderHOC() fonksiyonunu tüm api çağrılarımızda generic bir yapı olarak kullanabiliriz.