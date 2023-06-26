import { useNavigate } from "react-router-dom";

// Icons
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";

const SearchForm = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    // Esto se hace para evitar que la función se ejecute si el componente se desmonta antes de que se cumpla el temporizador.
    return () => clearTimeout(timeOut);
  }, [isAnimating]);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.length > 0) {
      navigate(`/search?query=${search}`);
      // Clean value input
      document.querySelector("input").value = "";
      setSearch("");
    } else {
      // If input is empty set animation to true
      setIsAnimating(true);
    }
  };

  return (
    <form
      className={`${
        isAnimating ? "animate-shake" : "animate-none"
      } relative w-full`}
      onSubmit={handleSubmit}
    >
      <input
        className="input"
        type="text"
        placeholder="Search for a product..."
        onChange={handleSearchInput}
      />
      <button className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none">
        <FiSearch className="text-xl" />
        {""}
      </button>
    </form>
  );
};

export { SearchForm };
