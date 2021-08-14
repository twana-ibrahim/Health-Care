import { useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";

const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNavHandler = () => {
    setIsNavOpen(true);
  };

  const closeNavHandler = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      {isNavOpen && (
        <div
          className="bg-black bg-opacity-70 fixed h-screen w-full z-20"
          onClick={closeNavHandler}
        ></div>
      )}

      <div
        className={`flex justify-between items-center ${
          !isNavOpen && "bg-gradient-to-l"
        } from-blue-100 to-blue-50 px-10 sm:px-14 md:px-12 lg:px-28 xl:px-48 py-4 fixed top-0 z-20 w-full`}
      >
        <Link
          to="#home"
          className={`flex items-end text-blue-600 hover:text-blue-500 ${
            isNavOpen && "hidden"
          }`}
        >
          <i className="fal fa-heartbeat text-xl"></i>
          <h1 className="text-blue-600 hover:text-blue-500 text-2xl font-bold">
            CARE
          </h1>
        </Link>

        {!isNavOpen && (
          <i
            className="far fa-bars text-2xl font-bold md:hidden"
            onClick={openNavHandler}
          ></i>
        )}

        <nav
          className={`fixed md:static right-0 top-0 w-7/12 sm:w-1/3 md:w-3/5 z-20 transform  ${
            isNavOpen ? "flex flex-col rounded-l-xl" : "hidden"
          } md:flex justify-between lg:text-lg font-semibold bg-blue-100 md:bg-transparent shadow-2xl md:shadow-none px-16 py-12 md:p-0 space-y-3 md:space-y-0`}
        >
          {isNavOpen && (
            <i
              className="far fa-times text-2xl font-bold absolute top-3 right-5 md:hidden"
              onClick={closeNavHandler}
            ></i>
          )}
          <Link
            exact
            to="#home"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            className="transform transition-all duration-150 hover:scale-110"
            activeClassName="md:scale-110 font-bold md:border-b-2 border-blue-600"
          >
            Home
          </Link>
          <Link
            exact
            to="#work"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            className="transform transition-all duration-150 hover:scale-110"
            activeClassName="md:scale-110 font-bold md:border-b-2 border-blue-600"
          >
            Work
          </Link>
          <Link
            exact
            to="#about"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            className="transform transition-all duration-150 hover:scale-110"
            activeClassName="md:scale-110 font-bold md:border-b-2 border-blue-600"
          >
            About
          </Link>
          <Link
            exact
            to="#schedule"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            className="transform transition-all duration-150 hover:scale-110"
            activeClassName="md:scale-110 font-bold md:border-b-2 border-blue-600"
          >
            Schedule
          </Link>
          <Link
            exact
            to="#reviews"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            className="transform transition-all duration-150 hover:scale-110"
            activeClassName="md:scale-110 font-bold md:border-b-2 border-blue-600"
          >
            Reviews
          </Link>
          <Link
            exact
            to="#blog"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            className="transform transition-all duration-150 hover:scale-110"
            activeClassName="md:scale-110 font-bold md:border-b-2 border-blue-600"
          >
            Blog
          </Link>
          <Link
            exact
            to="#talk"
            className="transform transition-all duration-150 hover:scale-110 md:hidden"
            activeClassName="md:scale-110 font-bold md:border-b-2 border-blue-600"
          >
            Let's Talk
          </Link>
        </nav>

        <div className="hidden md:block lg:text-lg bg-blue-600 hover:bg-blue-500 text-white px-5 py-1 rounded-3xl tracking-widest">
          <Link exact to="#talk">
            Let's Talk
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
