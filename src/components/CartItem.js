// TODO: create a component that displays a single bakery item
function CartItem(props) {
  if(props.count > 0){
    return (
      <div className="CartItem">
        <h3>{props.count}x {props.itemName}</h3>
      </div>
    );
  } else {
    return "";
  }
}

export default CartItem;
