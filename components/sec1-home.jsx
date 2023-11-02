import Image from "next/image";

const Section1 = () => {
  return (
    <div className="min-h-screen relative overflow-hidden ">
      <Image
        src={"/bg3.jpg"}
        alt="background"
        fill
        objectFit="cover"
        style={{ zIndex: -1 }}
      />
      <section className="min-h-screen text-black container mx-auto textshadow2 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-100 text-center">
          <h1 className="sm:text-5xl text-4xl text-pink-500 satisfy sm:pb-2 pb-1 ">
            Acara Pernikahan
          </h1>
          <p
            className="patrick sm:text-3xl text-2xl sm:py-3 py-1"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            بسم الله الرحمن الرحيم
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="patrick text-lg sm:text-xl px-4"
          >
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i dalam acara pernikahan putra-putri kami
          </p>

          <div className="flex gap-5 md:flex-row flex-col justify-center items-center p-7 w-screen patrick">
            <div
              className=" flex gap-5  text-base "
              data-aos="fade-down-right"
              data-aos-duration="3000"
            >
              <div className="flex flex-col text-right p-2">
                <p className="text-3xl text-pink-500">Lorem Ipsum</p>
                <p className="text-lg">Putra pertama dari, </p>
                <p className="text-lg">Bapak Lorem</p>
                <p>dan</p>
                <p className="text-lg">Ibu Lorem</p>
              </div>
              <div className="avatar rounded-full overflow-hidden">
                <div className="w-40 transform scale-x-[-1]  md:transform-none">
                  <Image
                    src={"/model-man.png"}
                    alt="model-male"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>

            <div
              className=" flex gap-5  text-base "
              data-aos="fade-up-left"
              data-aos-duration="3000"
            >
              <div className="avatar rounded-full overflow-hidden">
                <div className="w-40 transform scale-x-[-1]  md:transform-none">
                  <Image
                    src={"/model-woman.png"}
                    alt="model-female"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex flex-col text-left p-2">
                <p className="text-3xl text-pink-500">Ipsum Lorem</p>
                <p className="text-lg">Putri kedua dari, </p>
                <p className="text-lg">Bapak Ipsum</p>
                <p>dan</p>
                <p className="text-lg">Ibu Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
