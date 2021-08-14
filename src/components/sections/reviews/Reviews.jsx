import bg1 from "../../../assets/images/bg1.jpg";

const Reviews = () => (
  <div
    id="reviews"
    className="bg-cover mt-32 sm:mt-24 md:mt-20 xl:mt-24 px-10 sm:px-20 lg:px-40 py-10 sm:py-20 xl:py-32"
    style={{ backgroundImage: `url(${bg1})` }}
  >
    <div className="sm:h-48 md:h-56 lg:h-72 xl:h-80 sm:w-5/6 md:w-3/4 xl:w-3/5 flex flex-col justify-center">
      <p className="sm:text-lg md:text-xl font-semibold mb-5 sm:mb-8 md:mb-16 relative">
        <i class="far fa-quote-left text-2xl sm:text-3xl md:text-4xl text-gray-400 mr-2 absolute -left-9 sm:-left-12 -top-5"></i>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        nulla non ad magni odio debitis, nostrum amet minus aperiam nam commodi
        cumque ipsa reprehenderit dolor?
        <i class="far fa-quote-right text-2xl sm:text-3xl md:text-4xl text-gray-400 ml-2 absolute -bottom-5"></i>
      </p>

      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
          Justin Lubin
        </h3>

        <p className="text-xs sm:text-sm md:text-base font-semibold">Patient</p>
      </div>
    </div>
  </div>
);

export default Reviews;
