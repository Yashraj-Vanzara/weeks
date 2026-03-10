import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants.js";
import { addItem, removeItemById } from "../utils/cartSlice.js";

const ItemList = ({ card, showActions = true }) => {
  const dispatch = useDispatch();

  const handleAdditem = (info, isCartItem) => {
    if (isCartItem) {
      dispatch(addItem(info));
    } else {
      dispatch(
        addItem({
          id: info.id,
          name: info.name,
          price: (info.price ?? info.defaultPrice ?? 0) / 100,
          imageId: info.imageId,
        })
      );
    }
  };

  const handledelete = (id) => {
    dispatch(removeItemById(id));
  };

  return (
    <div>
      <div>
        {card.map((itemcard) => {
          const info = itemcard?.card?.info ?? itemcard;
          if (!info) return null;

          const isCartItem = !itemcard?.card?.info;

          const displayPrice = isCartItem
            ? info.price ?? 0
            : (info.price ?? info.defaultPrice ?? 0) / 100;

          return (
            <div
              key={info.id}
              className="mb-3 py-4 border-gray-300 border-b-2 text-left flex gap-2"
            >
              <div className="py-2 w-9/12">
                <span className="font-bold text-md">{info.name} </span>
                <span>- ₹ {displayPrice}</span>
                <p className="text-[14px]">{info.description}</p>
              </div>

              <div className="w-3/12">
                {info.imageId && (
                  <img
                    src={CDN_URL + info.imageId}
                    alt=""
                    className="w-full object-cover h-auto"
                  />
                )}

                {showActions && (
                  <>
                    <button
                      className="relative -top-4 bg-slate-700/75 px-2 py-1 rounded-md mr-2 text-white cursor-pointer"
                      onClick={() => handleAdditem(info, isCartItem)}
                    >
                      Add+
                    </button>

                    <button
                      className="relative -top-4 bg-slate-700/75 px-2 py-1 rounded-md text-white cursor-pointer"
                      onClick={() => handledelete(info.id)}
                    >
                      Delete-
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;