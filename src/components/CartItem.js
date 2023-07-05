import { useContext } from "react";
import { Link } from "react-router-dom";

// Context (Allow to access the context)
import { CartContext } from "../context/CartContext";

// Icons
import { IoClose } from "react-icons/io5";

// Components
import { Qty } from "./Qty";

const CartItem = ({ product }) => {
  // Accessing to the value of the context provider
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="flex gap-x-8 items-center">
      <Link to={`product/${product.id}`} className="w-[70px] h-[70px]">
        <img
          src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
          alt="Img product"
        />
      </Link>

      <div className="flex-1">
        {/* Title & remove icon*/}
        <div className="flex gap-x-4 mb-3 ">
          <Link to={`product/${product.id}`}>{product.attributes.title}</Link>
          <div
            onClick={() => removeFromCart(product.id)}
            className="cursor-pointer text-[24px] hover:text-accent transition-all"
          >
            <IoClose />
          </div>
        </div>

        <div className="flex items-center gap-x-12">
          {/* Quantity */}
          <div className="flex gap-x-4 mb-2">
            <Qty product={product} />
          </div>
          <div className="text-accent text-xl">
            $ {product.attributes.price * product.amount}
          </div>
        </div>

        <div>
          {/* Price */}
          <span className="text-accent"> $ {product.attributes.price} </span>
          per piece
        </div>
      </div>
    </div>
  );
};

export { CartItem };
