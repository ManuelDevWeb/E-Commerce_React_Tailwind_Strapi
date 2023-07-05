import { useContext } from "react";

// useParams hook to get url param values
import { useParams } from "react-router-dom";
// Custom hook
import { useFetch } from "../hooks/useFetch";
// Context (Allow to access the context)
import { CartContext } from "../context/CartContext";

// Components
import { RelatedProducts } from "../components/RelatedProducts";

const ProductDetails = () => {
  // Get id params url
  const { id } = useParams();

  // Accessing to the value of the context provider
  const { addToCart } = useContext(CartContext);

  // Get product info base on the id
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  if (!data) {
    return <div>Cargando...</div>;
  }

  const urlImage = data && data[0].attributes.image.data.attributes.url;

  // Category title
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  return (
    <div className="mb-16 pt-44 lg:pt-36 ">
      <div className="container mx-auto">
        {/* Text */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img
              className="w-full max-w-[65%]"
              src={`http://localhost:1337${urlImage}`}
              alt=""
            />
          </div>
          <div className="bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* Category title */}
            <div className="uppercase text-accent text-lg font-medium mb-2">
              {data[0].attributes.categories.data[0].attributes.title} cameras
            </div>
            {/* Title */}
            <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
            {/* Description */}
            <p className="mb-12">{data[0].attributes.description}</p>
            {/* Price & button */}
            <div className="flex items-center gap-x-8 ">
              {/* Price */}
              <div className="text-3xl text-accent font-semibold">
                ${data[0].attributes.price}
              </div>
              <button
                onClick={() => addToCart(data[0], id)}
                className="btn btn-accent"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* Related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export { ProductDetails };
