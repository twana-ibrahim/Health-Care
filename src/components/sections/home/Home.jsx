import image1 from "../../../assets/images/image1.png";

const Home = () => (
  <div
    id="home"
    className="grid sm:grid-cols-2 items-center gap-10 px-8 md:px-12 lg:px-24 xl:px-40 pt-44 xl:pt-40 pb-14 bg-gradient-to-l from-blue-100 to-blue-50"
  >
    <div>
      <h3 className="md:text-lg lg:font-semibold tracking-wide lg:tracking-wider">
        STAY STRONG, LIVE LONG.
      </h3>

      <h1 className="text-3xl lg:text-4xl font-bold lg:pr-12 xl:pr-40 my-5">
        <span className="text-blue-500 underline">Take care</span> of your body
        and it will take care of{" "}
        <span className="text-blue-500 underline">you</span>
      </h1>

      <p className="text-sm md:text-base lg:font-semibold lg:pr-12 xl:pr-40 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nam
        delectus est eum quam sed labore aut sit.
      </p>

      <div className="space-x-2 lg:space-x-5">
        <button className="bg-blue-600 border border-blue-600 hover:bg-blue-500 text-white lg:text-lg px-2 md:px-5 py-1 md:py-2 rounded-3xl">
          Get Appointment
        </button>
        <button className="border border-blue-600 hover:border-blue-500 text-blue-600 hover:text-blue-500 lg:text-lg px-2 md:px-5 py-1 md:py-2 rounded-3xl">
          View Profile
        </button>
      </div>
    </div>

    <div className="flex items-center justify-center w-full">
      <img
        src={image1}
        alt="Hero"
        className="lg:w-4/5 xl:w-2/3 border-b-4 border-blue-300 px-3"
      />
    </div>
  </div>
);

export default Home;
