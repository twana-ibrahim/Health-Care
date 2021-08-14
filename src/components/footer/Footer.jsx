import { NavHashLink as Link } from "react-router-hash-link";

const Footer = () => (
  <div className="bg-gray-800 py-20 px-10 xl:px-36 text-gray-300">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-10 gap-x-5 lg:gap-5">
      <div className="col-span-2 sm:col-span-1">
        <Link
          to="#home"
          className="flex items-end text-gray-300 hover:text-gray-400 mb-4"
        >
          <i className="fal fa-heartbeat text-xl"></i>
          <h1 className="text-gray-300 hover:text-gray-400 text-2xl font-bold">
            CARE
          </h1>
        </Link>

        <p className="my-3 pr-10">10 New Towers Street, V2 SNW, NewState USA</p>

        <p className="mt-5 mb-2">
          <i class="fas fa-phone-alt mr-2"></i> 07701234567
        </p>

        <p className="mb-5 mt-2">
          <i class="fas fa-envelope mr-2"></i> abcd@gmail.com
        </p>

        <div className="mt-10">
          <i class="fab fa-twitter mr-5 border border-gray-300 p-2 rounded-full"></i>
          <i class="fab fa-instagram mr-5 border border-gray-300 p-2 rounded-full"></i>
          <i class="fab fa-linkedin-in mr-5 border border-gray-300 p-2 rounded-full"></i>
          <i class="fab fa-facebook-f mr-5 border border-gray-300 py-2 px-2.5 rounded-full"></i>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-300 mb-4">Menu</h2>
        <Link className="block mb-3" to="#work">
          Work
        </Link>
        <Link className="block mb-3" to="#about">
          About
        </Link>
        <Link className="block mb-3" to="#schedule">
          Schedule
        </Link>
        <Link className="block mb-3" to="#blog">
          Blog
        </Link>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-300 mb-4">Useful Link</h2>
        <p className="mb-3">Privacy Policy</p>
        <p className="mb-3">Cookie Policy</p>
        <p className="mb-3">Purchasing Policy</p>
        <p className="mb-3">Terms & Conditions</p>
        <p className="mb-3">Career</p>
      </div>

      <div className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1">
        <h2 className="text-xl font-bold text-gray-300 mb-4">Contact</h2>
        <p className="mb-3">Lorem ipsum dolor sit amet.</p>
        <p className="mb-10 md:w-2/3 lg:w-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi sint
          ut dolores commodi nesciunt. Voluptas!
        </p>

        <form>
          <input
            type="text"
            name="email"
            placeholder="Email Addresses"
            className="p-2 xl:p-3 rounded-l-3xl bg-gray-600 focus:outline-none placeholder-gray-200 text-white"
          />
          <button
            type="submit"
            className="py-2 xl:py-3 px-3 xl:px-4 bg-blue-600 rounded-r-3xl"
          >
            <i class="far fa-paper-plane text-gray-200"></i>
          </button>
        </form>
      </div>
    </div>

    <p className="mt-16 text-xs text-gray-400">
      &copy; Copyright 2021 The LOGO All Rights Reserved.
    </p>
  </div>
);

export default Footer;
