import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem } from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  //counters
  const [cart, updateCart] = useState(0);
  const [items, updateItems] = useState([]);

  //increments counter by 1
  //modifiers gloobal counter state
  // function handleClick(){
  //   setCounter(counter + 1);
  // }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}


      
     {/* <p>My counter: {counter}</p>
      <button onClick={()=> handleClick()}>Click me!</button>  */}
     
     

      

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components

        <BakeryItem name = {item.name} description ={item.description} price ={item.price} cart={cart}
        updateCart = {updateCart} items = {items} updateItems = {updateItems} image = {item.image} /> // replace with BakeryItem component
       
      ))}



      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <div>
        {items.map(a => (<p>${a[0]} for {a[1]}</p>))}
        </div>
        <h> Total: ${cart} </h>
      </div>
      </div>
  );
}

export default App;
