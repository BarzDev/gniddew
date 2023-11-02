const RSVP = () => {
  return (
    <div
      className="flex flex-col justify-center items-center p-5"
      style={{ height: "50vh" }}
    >
      <div
        className="flex flex-col justify-center items-center w-100 text-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="sm:text-5xl text-4xl text-pink-500 satisfy sm:pb-3 pb-1 ">
          Reservasi
        </h1>
      </div>
      <p
        className="patrick text-lg sm:text-xl sm:py-3 py-1 px-2 text-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Kehadiranmu sangat berarti bagi kami, silahkan konfirmasi kehadiran kamu
      </p>

      <div
        className="join join-vertical gap-2"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div>
          <div>
            <input
              className="input input-bordered join-item input-secondary"
              placeholder="Nama Kamu"
              req
            />
          </div>
        </div>
        <select className="select select-bordered join-item input-secondary">
          <option>Hadir</option>
          <option>Ragu-ragu</option>
          <option>Tidak Hadir</option>
        </select>
        <div className="indicator self-end">
          <button className="btn join-item btn-secondary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
