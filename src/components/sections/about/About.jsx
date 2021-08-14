import { NavHashLink as Link } from "react-router-hash-link";
import { Progress, Rate } from "antd";

import image2 from "../../../assets/images/image2.jpg";

const About = () => (
  <div
    id="about"
    className="grid md:grid-cols-2 gap-x-5 py-20 px-6 sm:px-8 lg:px-16 xl:px-40"
  >
    <div className="relative">
      <img src={image2} alt="doctor" className="rounded-xl" />

      <div className="absolute -bottom-48 sm:-bottom-28 md:bottom-5 lg:bottom-10 xl:-bottom-32 right-0 xl:right-20 xl:w-4/5 z-10 bg-white p-4 rounded-xl shadow-xl">
        <div className="grid grid-cols-2 items-center gap-x-1 gap-y-2 xl:gap-2">
          <h6 className="text-green-500 sm:text-lg md:text-base lg:text-lg font-semibold">
            Dr. Kierra Calzoni
          </h6>

          <div>
            <p>
              <span className="sm:text-lg md:text-base lg:text-lg font-bold md:font-semibold lg:font-bold mr-1">
                Rating:
              </span>{" "}
              <>
                <Rate style={{ fontSize: "1.125rem" }} defaultValue={4} />
              </>
            </p>
          </div>

          <div>
            <p className="text-xs lg:text-sm mb-3 pr-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque labore consectetur.
            </p>
            <p className="text-sm lg:text-base">
              <i className="fas fa-phone-alt text-green-400"></i> 07701234567
            </p>
          </div>

          <>
            <Progress
              className="text-center"
              strokeColor={{ "90%": "rgb(248, 113, 113)" }}
              type="circle"
              percent={90}
            />
          </>
        </div>
      </div>
    </div>

    <div className="px-3 sm:px-16 md:pr-10 xl:pr-20 mt-52 sm:mt-40 md:mt-0">
      <h4 className="sm:text-lg lg:text-xl font-semibold mb-2">ABOUT ME</h4>

      <h3 className="text-xl sm:text-2xl lg:text-3xl mb-1">
        I'm Dr. Kierra Calzoni.
      </h3>

      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold pr-10 xl:pr-32">
        Actually, I love to care{" "}
        <span className="text-blue-500 underline">Patient</span>.
      </h1>

      <p className="text-xs sm:text-sm lg:text-base mt-5">
        <span className="font-semibold">Lorem ipsum dolor sit amet,</span>{" "}
        consectetur adipisicing elit. Quisquam quibusdam tempora nam illum
        aspernatur dolores inventore.
      </p>

      <p className="text-xs sm:text-sm lg:text-base my-2">
        Lorem, ipsum dolor sit{" "}
        <span className="font-semibold underline">amet consectetur</span>{" "}
        adipisicing elit.
      </p>

      <p className="text-xs sm:text-sm lg:text-base mb-7">
        <span className="font-semibold underline">Lorem ipsum</span> dolor sit
        amet consectetur adipisicing elit. Quisquam quibusdam tempora nam illum
        aspernatur dolores inventore.
      </p>

      <Link
        to="#talk"
        className="bg-blue-600 hover:bg-blue-500 lg:text-lg text-white px-5 py-1 rounded-3xl tracking-widest"
      >
        Let's Talk
      </Link>
    </div>
  </div>
);

export default About;
