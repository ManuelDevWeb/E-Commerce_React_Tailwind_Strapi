// Custom hook
import { useFetch } from "../hooks/useFetch";

// Components
import { ProductSlider } from "../components/ProductSlider";

const RelatedProducts = ({ categoryTitle }) => {
  // Get products by category tittle
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  );

  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left capitalize">
          Related Products
        </h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export { RelatedProducts };
