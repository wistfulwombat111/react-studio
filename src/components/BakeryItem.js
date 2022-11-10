// TODO: create a component that displays a single bakery item
function BakeryItem(props) {

  function addToCart() {
    const i = props.itemIndex;
    //console.log(props.itemIndex);
    props.cart[i] = props.cart[i] + 1;
    props.setCart(props.cart);
    props.setCartVal(Math.floor(100*(props.cartVal + props.price))/100);
  }

  return (
    <div className="BakeryItem" onClick={addToCart}>
      <h2>{props.itemName}</h2>
      <img src={"./" + props.imgURL}/>
      <p>{props.description}</p>
      <h3>${props.price}</h3>
    </div>
  );
}

export default BakeryItem;
