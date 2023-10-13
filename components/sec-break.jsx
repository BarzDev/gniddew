import Image from "next/image";

const Break = () => {
  return (
    <div className="h-10 bg-white flex items-center justify-center">
      <div className="w-36 h-10 relative  ">
        <Image
          src={"/ornament.png"}
          alt="photo1"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-36 h-10 relative  ">
        <Image
          src={"/ornament.png"}
          alt="photo1"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-36 h-10 relative  ">
        <Image
          src={"/ornament.png"}
          alt="photo1"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-36 h-10 relative  ">
        <Image
          src={"/ornament.png"}
          alt="photo1"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-36 h-10 relative  ">
        <Image
          src={"/ornament.png"}
          alt="photo1"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Break;
