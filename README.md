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
  plugins: [
  ],
}
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
Böylece **main.css** içinde yazdığımız `tailwind css`, standart css çıktısı üretmiş oluruz. Css kodlarımız, senkronize bir şekilde ***index.css*** dosyasına yazılır.
7. main.css içinde tailwind css yazarken @apply ile başlamalıyız. Yanyana veya alt alta yazılabilir.
```css
.search{
    @apply 
    placeholder:italic 
    border 
    border-slate-300 
    rounded-md 
    py-2 pl-9 pr-3 
    shadow-sm 
    focus:outline-none 
    focus:ring-1 sm:text-sm
}
```