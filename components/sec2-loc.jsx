import Image from "next/image";
import Map from "./sec2-map";
import Link from "next/link";

const Section2 = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Image
        src={"/bg4.jpg"}
        alt="background"
        fill
        objectFit="cover"
        style={{ zIndex: -1 }}
      />
      <section className="min-h-screen  mx-auto">
        <div className="flex flex-col justify-center items-center w-100 text-center sm:pt-20 pt-36">
          <h1
            data-aos="zoom-out-up"
            data-aos-duration="2000"
            className="sm:text-5xl text-4xl text-cyan-500 satisfy sm:pb-2 pb-1 textshadow2"
          >
            Resepsi Pernikahan
          </h1>
          <p
            data-aos="zoom-out-up"
            data-aos-duration="2000"
            className="patrick text-lg sm:text-xl sm:p-2 p-1"
          >
            Yang akan diselenggarakan pada :
          </p>
          <h2
            data-aos="zoom-out-up"
            data-aos-duration="2000"
            className="patrick sm:text-4xl text-2xl font-bold  text-cyan-500"
          >
            Ahad, 1 Januari 2020
          </h2>
          <h1
            data-aos="zoom-out-up"
            data-aos-duration="2000"
            className="patrick sm:text-4xl text-2xl font-bold  text-pink-500 "
          >
            Pukul 08.00 WIB
          </h1>
          <p
            data-aos="zoom-out-up"
            data-aos-duration="2000"
            className="patrick text-lg sm:text-xl sm:p-2 p-1"
          >
            Di kediaman mempelai wanita
          </p>
          <h2
            data-aos="zoom-out-up"
            data-aos-duration="2000"
            className="patrick sm:text-2xl text-xl font-bold  text-cyan-500"
          >
            Jalan. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quis nostrum id, velit amet saepe nihil accusamus? Dicta, inventore!
          </h2>
          <div
            className="sm:p-2 p-1"
            data-aos="zoom-out-up"
            data-aos-duration="2000"
          >
            <Link
              className="btn btn-error text-white"
              href={
                "https://www.google.com/maps/place/Masjid+Raya+Al-A'zhom+Kota+Tangerang/@-6.170017,106.639013,15z/data=!4m6!3m5!1s0x2e69f92915f6f83f:0x17b4619610799a2e!8m2!3d-6.170017!4d106.6390129!16s%2Fg%2F1tflv9p5?hl=id&entry=ttu"
              }
              target="blank"
            >
              <span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              Buka Peta
            </Link>
          </div>

          <div
            className="border border-2 p-2 border-pink-300 rounded-lg"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
