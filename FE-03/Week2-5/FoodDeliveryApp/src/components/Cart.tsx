import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList.js";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
  const cartdata = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-full m-10 p-10">
      <div className="flex justify-center items-center gap-8">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button
          className="px-2 py-1 cursor-pointer hover:bg-black/85 bg-black text-white rounded-md"
          onClick={handleclick}
        >
          Clear Cart
        </button>
      </div>

      <div className="w-6/12 mx-auto p-4 border-slate-300">
        {cartdata.length > 0 ? (
          <ItemList card={cartdata} showActions={false} />
        ) : (
          <h1 className="text-center">Cart Is Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;