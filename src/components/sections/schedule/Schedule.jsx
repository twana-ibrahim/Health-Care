import image3 from "../../../assets/images/image3.jpg";

const Schedule = () => (
  <div
    id="schedule"
    className="grid md:grid-cols-2 gap-x-5 pb-10 px-6 sm:px-8 lg:px-10 xl:px-40 xl:mt-32"
  >
    <div className="px-3 sm:px-16 md:px-0">
      <h4 className="sm:text-lg lg:text-xl font-semibold mb-2">SCHEDULE</h4>

      <h3 className="text-xl sm:text-2xl lg:text-3xl pr-18 lg:pr-16 xl:pr-32">
        Let's see{" "}
        <span className="font-bold">
          my schedule time when I{" "}
          <span className="text-blue-600 underline">free</span>
        </span>
      </h3>

      <p className="text-xs sm:text-sm lg:text-base font-semibold my-3 pr-18 lg:pr-16 xl:pr-32">
        <i class="fal fa-level-up text-blue-500 text-xl transform rotate-90 mr-2"></i>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <p className="text-xs sm:text-sm lg:text-base mb-7 pr-18 lg:pr-16 xl:pr-32">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
        quibusdam tempora nam illum aspernatur dolores inventore.
      </p>

      <h1 className="text-lg lg:text-xl font-bold mb-4">
        Medical chech-up reviews:
      </h1>

      <div className="grid sm:grid-cols-2 gap-2 text-sm lg:text-base font-semibold">
        <p>
          <i class="fal fa-link text-yellow-400 font-semibold transform rotate-45 mr-2"></i>
          Heartbeat Rate
        </p>
        <p>
          <i class="fal fa-link text-yellow-400 font-semibold transform rotate-45 mr-2"></i>
          Glucose Tolerance Test
        </p>
        <p>
          <i class="fal fa-link text-yellow-400 font-semibold transform rotate-45 mr-2"></i>
          Blood Pressure
        </p>
        <p>
          <i class="fal fa-link text-yellow-400 font-semibold transform rotate-45 mr-2"></i>
          Blood Sugar Level
        </p>
      </div>
    </div>

    <div className="relative mt-20 md:mt-0">
      <img src={image3} alt="doctor" className="rounded-xl" />

      <div className="absolute -bottom-40 sm:-bottom-32 md:bottom-0 lg:-bottom-14 xl:-bottom-28 lg:right-10 xl:right-16 w-full lg:w-4/5 z-10 bg-white p-4 rounded-xl shadow-xl">
        <h6 className="text-center text-lg text-yellow-400 font-semibold mb-3">
          Get an appointment
        </h6>

        <div className="flex justify-around">
          <div>
            <p>
              <i class="fal fa-calendar-alt mr-1 mb-2"></i>
              Date:
            </p>

            <p className="font-bold">25 AUG :</p>
          </div>

          <div>
            <p>
              <i class="fal fa-clock mr-1 mb-2"></i>Time:
            </p>

            <p className="font-bold">01:30 PM :</p>
          </div>

          <div>
            <p>
              <i class="fal fa-map-marker-alt mr-1 mb-2"></i>
              Location:
            </p>

            <p className="font-bold">New York :</p>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button className="text-lg bg-blue-600 hover:bg-blue-500 text-white py-1 px-10 rounded-2xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Schedule;
