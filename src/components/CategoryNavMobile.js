import { Link } from "react-router-dom";

// Icons
import { FiX } from "react-icons/fi";

// Custom hook
import { useFetch } from "../hooks/useFetch";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  // Get categories
  const { data } = useFetch("/categories");

  return (
    <div className="p-8">
      {/* Close icon */}
      <div
        onClick={() => setCatNavMobile((prev) => !prev)}
        // onClick={()=>setCatNavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {data?.map((category) => (
          <Link
            to={`products/${category.id}`}
            className="uppercase font-medium"
            key={category.attributes.id}
          >
            {category.attributes.title} Cameras
          </Link>
        ))}
      </div>
    </div>
  );
};

export { CategoryNavMobile };
