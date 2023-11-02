import Image from "next/image";

const CardGift = ({ bankImage }) => {
  return (
    <div
      className="card w-60 bg-base-100 shadow-xl"
      data-aos="fade-up-left"
      data-aos-duration="2000"
    >
      <div className="px-10 pt-5">
        <div className="w-full h-20 overflow-hidden flex items-center justify-center">
          <div className="relative w-40 h-40">
            <Image src={bankImage} alt="bank" fill objectFit="cover" />
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 flex items-center justify-center">
        <div className="relative w-40 h-40">
          <Image src={"/qr.jpeg"} alt="qr" fill objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default CardGift;
