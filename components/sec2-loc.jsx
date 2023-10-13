import Image from "next/image";

const Section2 = () => {
  return (
    <div className="min-h-screen relative">
      <Image
        src={"/bg4.jpg"}
        alt="background"
        fill
        objectFit="cover"
        style={{ zIndex: -1 }}
      />
      <section className="min-h-screen  mx-auto">
        <div className="flex flex-col justify-center items-center w-100 text-center sm:pt-20 pt-36">
          <h1 className="sm:text-5xl text-4xl text-cyan-500 satisfy sm:pb-2 pb-1 textshadow2">
            Resepsi Pernikahan
          </h1>
          <p className="patrick text-lg sm:text-xl sm:p-5 p-3">
            Yang akan diselenggarakan pada :
          </p>
          <h2 className="patrick sm:text-4xl text-2xl font-bold  text-cyan-500">
            Ahad, 1 Januari 2020
          </h2>
          <h1 className="patrick sm:text-4xl text-2xl font-bold  text-pink-500 ">
            Pukul 08.00 WIB
          </h1>
          <p className="patrick text-lg sm:text-xl sm:p-5 p-3">
            Di kediaman mempelai wanita
          </p>
          <h2 className="patrick sm:text-2xl text-xl font-bold  text-cyan-500">
            Jalan. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quis nostrum id, velit amet saepe nihil accusamus? Dicta, inventore!
          </h2>
          <div className="sm:p-5 p-3">
            <a href="" className="btn btn-error text-white">
              Buka Peta
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
