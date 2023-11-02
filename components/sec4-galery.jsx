import Image from "next/image";

const Section3 = () => {
  return (
    <div className="min-h-screen relative overflow-hidden ">
      <Image
        src={"/bg4.jpg"}
        alt="background"
        fill
        objectFit="cover"
        style={{ zIndex: -1 }}
      />
      <section className="min-h-screen  mx-auto ">
        <div className="flex flex-col justify-center items-center w-100 text-center sm:pt-20 pt-36">
          <h1 className="sm:text-5xl text-4xl text-pink-500 satisfy sm:pb-2 pb-1 ">
            Galeri
          </h1>
        </div>

        <div className="flex justify-center items-center w-100 gap-3 flex-wrap p-5">
          <div
            className=" rounded-xl overflow-hidden w-80 h-44 flex items-center  shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-96 h-56 relative ">
              <Image
                src={"/photo1.jpg"}
                alt="photo1"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div
            className=" rounded-xl overflow-hidden w-80 h-44 flex items-center "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="w-96 h-56 relative">
              <Image
                src={"/photo2.jpg"}
                alt="photo2"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div
            className=" rounded-xl overflow-hidden w-80 h-44 flex items-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="w-96 h-56 relative">
              <Image
                src={"/photo3.jpg"}
                alt="photo3"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div
            className=" rounded-xl overflow-hidden w-80 h-44 flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-96 h-56 relative">
              <Image
                src={"/photo4.jpg"}
                alt="photo4"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div
            className=" rounded-xl overflow-hidden w-80 h-44 flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-96 h-56 relative">
              <Image
                src={"/photo5.webp"}
                alt="photo5"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div
            className=" rounded-xl overflow-hidden w-80 h-44 flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-96 h-56 relative">
              <Image
                src={"/photo6.webp"}
                alt="photo6"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
