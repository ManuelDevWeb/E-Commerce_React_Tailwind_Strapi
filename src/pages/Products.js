import { useState, useEffect } from "react";
// useParams hook to get url params values
import { useParams } from "react-router-dom";

// Custom hook
import { useFetch } from "../hooks/useFetch";

// Components
import { CategoryNav } from "../components/CategoryNav";
import { Product } from "../components/Product";

const Products = () => {
  // Get id params url
  const { id } = useParams();

  const [title, setTitle] = useState(null);

  // Get products based on category id
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );

  // Set the title when the data is fetched
  useEffect(() => {
    if (data) {
      setTitle(data[0]?.attributes?.categories?.data[0]?.attributes?.title);
    }
  }, [data]);

  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          {/* Category nav */}
          <CategoryNav />
          <div>
            {/* Title */}
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {title && `${title} cameras`}
            </div>
            {/* Products grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Products };
