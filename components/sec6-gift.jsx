import CardGift from "./sec6-giftCard";

const Gift = () => {
  return (
    <div className="min-h-screen bg-pink-500 flex flex-col justify-center items-center">
      <h1
        className="sm:text-5xl text-4xl text-white satisfy sm:pt-0 pt-5 "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Hadiah
      </h1>
      <p
        className="patrick text-white sm:text-3xl text-2xl sm:py-3 py-4 text-center"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        Kirim Hadiahmu Melalui Rekening berikut <span>😊😊😊</span>
      </p>

      <div className="flex gap-5 flex-wrap items-center justify-center sm:pb-0 pb-20">
        <CardGift bankImage="/bca.png" />
        <CardGift bankImage="/bni.png" />
        <CardGift bankImage="/mandiri.png" />
      </div>
    </div>
  );
};
export default Gift;
