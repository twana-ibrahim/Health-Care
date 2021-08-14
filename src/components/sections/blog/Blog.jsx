import bg2 from "../../../assets/images/bg2.jpg";
import pp from "../../../assets/images/pp.jpg";

const Blog = () => (
  <div
    id="blog"
    className="pb-10 px-6 sm:px-8 lg:px-10 xl:px-40 mt-14 xl:mt-20"
  >
    <h1 className="text-2xl md:text-3xl font-bold text-center mb-14">
      Let's see Our <span className="text-blue-600 underline">latest</span> news
    </h1>

    <div className="grid md:grid-cols-2 gap-x-10">
      <div>
        <div
          className="w-full py-24 sm:py-40 md:py-24 lg:py-32 xl:py-40 bg-cover mb-10 lg:mb-14 rounded-xl"
          style={{ backgroundImage: `url(${bg2})` }}
        ></div>

        <div className="flex justify-between items-center px-3 sm:px-10 md:px-0">
          <div className="flex items-center space-x-2">
            <img className="w-7 h-7 rounded-full" src={pp} alt="profile" />
            <p className="lg:font-semibold">By Maria Calzoni</p>
          </div>

          <p className="lg:font-semibold">
            <i class="fal fa-calendar mr-2"></i>
            21/07/2021
          </p>
        </div>

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold my-5 px-3 sm:px-10 md:px-0">
          Join me and respectfully fight COVID misinformation
        </h1>

        <p className="text-sm sm:text-base px-3 sm:px-10 md:px-0 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          eaque optio magni! Repellendus ratione dignissimos, assumenda magni,
          totam commodi, odit reprehenderit ab aut ea error unde?
        </p>

        <p className="text-sm sm:text-base px-3 sm:px-10 md:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          eaque optio magni! Repellendus ratione dignissimos, assumenda magni,
          totam commodi, odit reprehenderit ab aut ea error unde?
        </p>
      </div>

      <div className="mt-10 md:mt-0 px-3 sm:px-10 md:px-0">
        <div className="flex justify-between mb-5">
          <h6 className="lg:text-lg border-b-2 border-yellow-400 font-semibold">
            Latest News:
          </h6>
          <p className="lg:text-lg font-semibold">
            View All <i class="far fa-arrow-right font-semibold"></i>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 items-center mb-4">
          <img
            className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 rounded-xl"
            src={pp}
            alt="news"
          />

          <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
            <h3 className="sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-3 lg:mb-6">
              I'm called anti-science, I'm just an early...
            </h3>
            <p className="text-yellow-400 text-xs sm:text-base font-semibold">
              Read More <i class="far fa-chevron-right font-semibold ml-2"></i>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 items-center mb-4">
          <img
            className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 rounded-xl"
            src={pp}
            alt="news"
          />

          <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
            <h3 className="sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-3 lg:mb-6">
              I'm called anti-science, I'm just an early...
            </h3>
            <p className="text-yellow-400 text-xs sm:text-base font-semibold">
              Read More <i class="far fa-chevron-right font-semibold ml-2"></i>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 items-center mb-4">
          <img
            className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 rounded-xl"
            src={pp}
            alt="news"
          />

          <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
            <h3 className="sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-3 lg:mb-6">
              I'm called anti-science, I'm just an early...
            </h3>
            <p className="text-yellow-400 text-xs sm:text-base font-semibold">
              Read More <i class="far fa-chevron-right font-semibold ml-2"></i>
            </p>
          </div>
        </div>

        <h6 className="inline-block lg:text-lg border-b-2 border-yellow-400 font-semibold my-5">
          Coming Soon:
        </h6>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <img
            className="w-28 lg:w-32 h-28 lg:h-32 rounded-xl"
            src={pp}
            alt="news"
          />
          <img
            className="w-28 lg:w-32 h-28 lg:h-32 rounded-xl"
            src={pp}
            alt="news"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
