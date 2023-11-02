import StoryList from "./sec3-storyList";

const Story = () => {
  // const weddingdate = new Date();
  // weddingdate.setDate(weddingdate.getDate() + 10);

  // function formatDate(date) {
  //   const options = { day: "numeric", month: "long", year: "numeric" };
  //   const formattedDate = date.toLocaleDateString("en-US", options);
  //   const formattedDay = addOrdinalSuffix(date.getDate());
  //   const month = date.toLocaleString("default", { month: "long" });
  //   const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  //   return `${formattedMonth} ${formattedDay}, ${date.getFullYear()}`;
  // }

  // function addOrdinalSuffix(day) {
  //   if (day > 3 && day < 21) return day + "th";
  //   switch (day % 10) {
  //     case 1:
  //       return day + "st";
  //     case 2:
  //       return day + "nd";
  //     case 3:
  //       return day + "rd";
  //     default:
  //       return day + "th";
  //   }
  // }

  // const formattedDate = formatDate(weddingdate);

  return (
    <div className="min-h-screen">
      <div className="w-screen flex flex-col items-center justify-center pt-10 pb-5">
        <h1
          className="sm:text-5xl text-4xl text-pink-500 satisfy sm:pb-2 pb-1 "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Cerita Cinta Kami
        </h1>
      </div>

      <div className="flex items-center justify-center patrick px-10 pb-10">
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="patrick text-lg sm:text-xl px-4"
          >
            <StoryList
              title={"Pertemuan Pertaman"}
              month={"January 13th, 2000"}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="patrick text-lg sm:text-xl px-4"
          >
            <StoryList title={"Kencan Pertama"} month={"February 12th, 2000"} />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="patrick text-lg sm:text-xl px-4"
          >
            <StoryList title={"Jadian"} month={"Maret 11th, 2000"} />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="patrick text-lg sm:text-xl px-4"
          >
            <StoryList title={"Tunangan"} month={"Mei 9th, 2000"} />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="patrick text-lg sm:text-xl px-4 mb-4"
          >
            <StoryList title={"Menikah"} month={"Januari 1st,2020"} />
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Story;
