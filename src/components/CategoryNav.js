import { Link } from "react-router-dom";

// Custom hook
import { useFetch } from "../hooks/useFetch";

const CategoryNav = () => {
  // Get categories
  const { data } = useFetch("/categories");

  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary w-[285px] h-[500px] rounded-[8px]">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => (
            <Link
              to={`/products/${category.id}`}
              className="cursor-pointer uppercase"
              key={category.id}
            >
              {category.attributes.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export { CategoryNav };
