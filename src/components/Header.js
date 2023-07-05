import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// Context (Allow to access the context)
import { CartContext } from "../context/CartContext";

// Components
import { SearchForm } from "./SearchForm";
import { CategoryNavMobile } from "./CategoryNavMobile";
import { Cart } from "./Cart";

// Images
import Logo from "../img/logo.png";
// Icons
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  // Accessing to the values of the context provider
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);

  const [catNavMobile, setCatNavMobile] = useState(false);

  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">
          {/* Menu */}
          <div
            onClick={() => setCatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer"
          >
            <FiMenu />
          </div>
          {/* Category nav mobile */}
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full max-w-[320px] h-screen transition-all duration-200  bg-primary`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* Logo */}
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
          {/* Search form - show only on desktop */}
          <div className="hidden w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>
          {/* Phone & cart */}
          <div className="flex items-center gap-x-[10px]">
            {/* Phone */}
            <div className="hidden xl:flex uppercase">
              Need help? 316 547 70 12
            </div>
            {/* Cart icon */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="relative cursor-pointer"
            >
              <SlBag className="text-2xl" />
              {/* Amount */}
              <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 flex justify-center items-center font-bold tracking-[-0.1em]">
                {itemsAmount}
              </div>
            </div>
            {/* Cart */}
            <div
              className={`${
                isOpen ? "right-0" : "-right-full"
              } bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full md:max-w-[500px] z-10 transition-all duration-300`}
            >
              <Cart />
            </div>
          </div>
        </div>
        {/* Search form - show on mobile only */}
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export { Header };
