import { useState } from "react";
import { Link } from "react-router-dom";

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
  return (
    <header>
      <div className="container mx-auto">
        <div>
          {/* Menu */}
          <div>
            <FiMenu />
          </div>
          {/* Category nav mobile */}
          <div>
            <CategoryNavMobile />
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
          <div className="relative cursor-pointer">
            {/* Phone */}
            <div>Need help? 316 547 70 12</div>
            {/* Cart icon */}
            <div>
              <SlBag className="text-2xl" />
              {/* Amount */}
              <div>2</div>
            </div>
            {/* Cart */}
            <div className="bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full md:max-w-[500px] z-10 transition-all duration-300">
              <Cart />
            </div>
          </div>
        </div>
        {/* Search form - show on mobile only */}
        <div className="lg:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export { Header };
