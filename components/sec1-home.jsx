import Image from "next/image";

const Section1 = () => {
  return (
    <div className="min-h-screen relative">
      <Image
        src={"/bg3.jpg"}
        alt="background"
        fill
        objectFit="cover"
        style={{ zIndex: -1 }}
      />
      <section
        className="min-h-screen text-black container mx-auto textshadow2"
        style={{ paddingTop: "8rem" }}
      >
        <div className="flex flex-col justify-center items-center w-100 text-center">
          <h1 className="sm:text-5xl text-4xl text-pink-500 satisfy sm:pb-2 pb-1 ">
            Acara Pernikahan
          </h1>
          <p className="patrick sm:text-3xl text-2xl sm:py-3 py-1">
            بسم الله الرحمن الرحيم
          </p>
          <p className="patrick text-lg sm:text-xl">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i dalam acara pernikahan putra-putri kami
          </p>

          <div className="flex gap-5 md:flex-row flex-col justify-center items-center p-7 w-screen patrick">
            <div className=" flex gap-5  text-base ">
              <div className="flex flex-col text-right p-2">
                <p className="text-3xl text-pink-500">Raffi Ahmad</p>
                <p className="text-lg">Putra pertama dari, </p>
                <p className="text-lg">Bapak Raffi</p>
                <p>dan</p>
                <p className="text-lg">Ibu Ahmad</p>
              </div>
              <div className="avatar rounded-full overflow-hidden">
                <div className="w-40  ">
                  <Image
                    src={"/model-male.png"}
                    alt="model-male"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>

            <div className=" flex gap-5  text-base ">
              <div className="avatar rounded-full overflow-hidden">
                <div className="w-40  ">
                  <Image
                    src={"/model-female.png"}
                    alt="model-female"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex flex-col text-left p-2">
                <p className="text-3xl text-pink-500">Nagita Slavina</p>
                <p className="text-lg">Putri kedua dari, </p>
                <p className="text-lg">Bapak Nagita</p>
                <p>dan</p>
                <p className="text-lg">Ibu Slavina</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
