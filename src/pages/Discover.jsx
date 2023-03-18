import { Error, Loader, SongCard } from "../Components";
import { genres } from "../assets/constants";

const Discover = () => {
  console.log(genres);
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col justify-between items-center sm:bg-blue-400 sm:flex-row mt-4 mb-10 bg-red-400">
        <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genres) => (
            <option key={genres.value} value={genres.value}>
              {genres.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Discover;
