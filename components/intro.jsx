import Countdown from "./head-countdown";

const Intro = () => {
  return (
    <div className="h-40 p-10 flex flex-col items-center justify-center ">
      <Countdown />
      <h1>TIME REMAINING</h1>
    </div>
  );
};
export default Intro;
