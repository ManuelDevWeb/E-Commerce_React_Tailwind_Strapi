import { useContext } from "react";

// Context (Allow to access the context)
import { CartContext } from "../context/CartContext";

// Components
import { CartItem } from "./CartItem";

// Icons
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";

const Cart = () => {
  // Accessing to the value of the context provider
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  return (
    <div className="px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
        {/* Close icon */}
        <div
          onClick={(state) => setIsOpen(!state)}
          className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
        <div className="flex flex-col gap-y-10 px-2">
          {cart?.map((item) => (
            <CartItem key={item.id} product={item}>
              Cart Item
            </CartItem>
          ))}
        </div>
      </div>
      {/* Subtotal y total */}
      {cart.length >= 1 && (
        <div className="px-6 py-10 flex flex-col">
          <div className="flex justify-between text-lg">
            <div>Subtotal</div>
            <div>${total}</div>
          </div>
          <div className="flex justify-between text-2xl">
            <div>Total</div>
            <div>${total}</div>
          </div>
        </div>
      )}
      {/* Buttons */}
      <div className="px-6">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
            <button
              onClick={() => clearCart()}
              className="btn btn-accent hover:bg-accent-hover text-primary"
            >
              Clear cart
            </button>
            <button className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2">
              Checkout
              <IoArrowForward className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30">
            <div className="text-2xl">Your cart is empty</div>
            <div className="text-6xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Cart };
