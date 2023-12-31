import Image from "next/image";
import Countdown from "./head-countdown";
import Link from "next/link";

const Header = () => {
  return (
    <main>
      <div className="hero min-h-screen">
        <div className="min-h-screen">
          <Image
            src={"/bg2.jpg"}
            alt="background"
            fill
            objectFit="cover"
            style={{ zIndex: 5 }}
          />
        </div>

        <div className="hero-content text-center" style={{ zIndex: 7 }}>
          <div className="max-w-md">
            <h1 className="sm:text-5xl text-3xl font-bold  text-white patrick textshadow py-6 ">
              Wedding Invitation
            </h1>
            <p className="textshadow text-white patrick sm:text-xl text-base italic">
              Dengan memohon rahmat Allah SWT, izinkan kami untuk mengundang
              Bapak/Ibu/Saudara/i dalam acara akad dan resepsi pernikahan kami,
            </p>
            <h1 className="sm:text-5xl text-3xl font-bold  text-white satisfy  textshadow py-5 ">
              Lorem & Ipsum
            </h1>
            <div className="py-3 pb-6">
              <Countdown />
            </div>
            <Link
              className="btn btn-success text-white hover:bg-white hover:text-green-500 shadow-lg"
              href="/wedding"
            >
              Buka Undangan
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
