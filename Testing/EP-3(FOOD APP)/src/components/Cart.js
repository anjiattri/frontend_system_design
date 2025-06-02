import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log("cart page", cart);
  return (
    <div className="text-center m-4 p-4">
      <h2 className="font-bold text-xl">CART</h2>
      <div className="w-6/12 m-auto text-center">
        <button
          className="bg-red-600 text-white m-2 p-2 rounded-lg"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          clear cart
        </button>
        {cart.length === 0 && (
          <h1>
            Add Items to cart ?
            <span className="bg-blue-600">
              <Link to="/">Click Here</Link>
            </span>
          </h1>
        )}
        <ItemList data={cart} />
      </div>
    </div>
  );
};

export default Cart;
