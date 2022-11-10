import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";
import CartItem from "./components/CartItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  var [cartVal, setCartVal] = useState(0.00);

  return (
    <div className="App">
      <h1>Gourmet Hound Bakery</h1>

      <div className="Menu">
        <h2>Menu</h2>
        <div className="MenuWrapper">
          {bakeryData.map((item, index) => (
            <BakeryItem itemName={item.name} description={item.description}
              price={item.price} imgURL={item.image} itemIndex={index}
              cart={cart} setCart={setCart} cartVal={cartVal}
              setCartVal={setCartVal}/>
          ))}
        </div>
      </div>

      <div className="Cart">
        <h2>Basket</h2>

        {bakeryData.map((item, index) => (
          <CartItem count={cart[index]} itemName={item.name}/>
        ))}

        <h2>Total: ${cartVal}</h2>
      </div>
    </div>
  );
}

export default App;
