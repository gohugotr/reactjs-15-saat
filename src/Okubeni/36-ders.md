* En önemli derslerden biri, iyice kavramak gerekiyor.

![](2022-04-04-13-29-13.png)

Formdan girilen verileri ekrana bastırmak için 

1. **App.js**'te iken

```js script
  addContact(e) {
    
  }
```

diye bir fonksiyon tanımlanır.

2. **App.js**'te iken, bu fonksiyon Contacts componentine props ile geçilir.
```js script
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts} />
      </div>
```
3. Props olarak tanıttıktan sonra bunu constructor ile bağlamalıyız. ***constructor*** kısayolu *ctor* dur.
```js script
  constructor(props)
  {
    super(props);
    this.addContact = this.addContact.bind(this); 
  }
```
4. **Contact.js** componentinde *PropTypes*'leri ayarlıyoruz. 
Başvurusunu bu şekilde ekliyoruz. <code>import PropTypes from 'prop-types';</code>
```js script
    // export default Contacts; buradan hemen önceye bu kod girilir. 
    //Yani Contacts componentinin bitişine.
    Contacts.propType = {
        contacts: PropTypes.array.isRequired,
        addContact: PropTypes.func, // addContact fonksiyon olduğundan
    };
```
5. **Contact.js** içinde *Form* componentine, props olarak gelen
addContact propsunu yine props olarak tanımlıyoruz.
```js script
  <Form addContact={this.props.addContact}/>
```
6. Url'mizin bu şekilde değilde "http://localhost:3000/" şeklinde kalmasını istiyoruz. 
![](2022-04-04-16-42-39.png){ :height="50px" width="150px" }