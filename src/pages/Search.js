// useLocation hook to get url query values
import { useLocation } from "react-router-dom";
// Custom hook
import { useFetch } from "../hooks/useFetch";

// Components
import { CategoryNav } from "../components/CategoryNav";
import { Product } from "../components/Product";

const Search = () => {
  const location = useLocation();
  // Get numbers of params in the query
  const searchParams = new URLSearchParams(location.search);
  // Get value of param query
  const searchTerm = searchParams.get("query");

  // Get products based on search term
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );

  return (
    <div className="mb-[30px] pt-36">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          {/* Category nav */}
          <CategoryNav />
          <div>
            {/* Title */}
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {data?.length > 0
                ? `${data.length} results for ${searchTerm}`
                : `No results found for ${searchTerm}`}
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

export { Search };
