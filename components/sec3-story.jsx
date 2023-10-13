import Image from "next/image";

const Section3 = () => {
  return (
    <section className="min-h-screen  mx-auto bg-slate-700">
      <div className="flex flex-col justify-center items-center w-100 text-center pt-20">
        <h1 className="sm:text-5xl text-4xl text-white satisfy sm:pb-2 pb-1 ">
          Our Galery
        </h1>
      </div>

      <div className="flex justify-center items-center w-100 gap-3 flex-wrap p-5">
        <div className=" rounded-xl overflow-hidden w-80 h-44 flex items-center  shadow-lg">
          <div className="w-96 h-56 relative ">
            <Image
              src={"/photo1.jpg"}
              alt="photo1"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className=" rounded-xl overflow-hidden w-80 h-44 flex items-center ">
          <div className="w-96 h-56 relative">
            <Image
              src={"/photo2.jpg"}
              alt="photo2"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className=" rounded-xl overflow-hidden w-80 h-44 flex items-center">
          <div className="w-96 h-56 relative">
            <Image
              src={"/photo3.jpg"}
              alt="photo3"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className=" rounded-xl overflow-hidden w-80 h-44 flex items-center">
          <div className="w-96 h-56 relative">
            <Image
              src={"/photo4.jpg"}
              alt="photo4"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className=" rounded-xl overflow-hidden w-80 h-44 flex items-center">
          <div className="w-96 h-56 relative">
            <Image
              src={"/photo5.webp"}
              alt="photo5"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className=" rounded-xl overflow-hidden w-80 h-44 flex items-center">
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
  );
};

export default Section3;
