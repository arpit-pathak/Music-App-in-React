import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../Components";
import { genres } from "../assets/constants";

const Discover = () => {
  console.log(genres);
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col justify-between items-center sm:flex-row mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-2 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genres) => (
            <option key={genres.value} value={genres.value}>
              {genres.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song) => (
          <SongCard />
        ))}
      </div>
      {/* <Loader title={"song is loading"} /> */}
    </div>
  );
};
export default Discover;
