import React from "react";

const Rainbow = (WrappedComponent) => {
    const renkler = ['red','pink','orange','blue','green','gray'];
    const randomRenk = renkler[Math.floor(Math.random()*6)];
    const className = randomRenk + '-text';
    
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default Rainbow;
// Kullanım export default Rainbow(About); About sayfası her yenilendiğinde yazının rengi değişir.