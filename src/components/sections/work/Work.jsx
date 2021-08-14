const Work = () => (
  <div id="work" className="text-center py-20 px-8 md:px-12 lg:px-20 xl:px-40">
    <h1 className="text-3xl xl:text-4xl font-bold">
      My Skill <span className="text-blue-600 underline">depends</span> on work.
    </h1>

    <p className="w-3/4 xl:w-3/5 mx-auto my-10 lg:text-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et
      exercitationem laboriosam alias voluptatum tempore doloremque labore.
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-x-10">
      <div className="flex flex-col items-center bg-red-200 py-10 px-1 lg:px-2 rounded-lg">
        <div className="bg-red-500 rounded-full">
          <i className="fal fa-shield text-5xl p-6 text-gray-200"></i>
        </div>

        <h3 className="my-4 text-lg lg:text-xl font-bold">Patient Safety</h3>

        <p className="lg:font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>

      <div className="flex flex-col items-center bg-yellow-50 py-10 px-1 lg:px-2 rounded-lg">
        <div className="bg-yellow-600 rounded-full">
          <i className="fal fa-heartbeat text-5xl p-6 text-gray-200"></i>
        </div>

        <h3 className="my-4 text-lg lg:text-xl font-bold">Well Cared</h3>

        <p className="lg:font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>

      <div className="flex flex-col items-center bg-green-100 py-10 px-1 lg:px-2 rounded-lg">
        <div className="bg-green-500 rounded-full">
          <i className="fal fa-phone-alt text-5xl p-6 text-gray-200"></i>
        </div>

        <h3 className="my-4 text-lg lg:text-xl font-bold">24/7 Service</h3>

        <p className="lg:font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>

      <div className="flex flex-col items-center bg-blue-100 py-10 px-1 lg:px-2 rounded-lg">
        <div className="bg-blue-600 rounded-full">
          <i className="fal fa-desktop text-5xl p-6 text-gray-200"></i>
        </div>

        <h3 className="my-4 text-lg lg:text-xl font-bold">Online Support</h3>

        <p className="lg:font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </div>
  </div>
);

export default Work;
