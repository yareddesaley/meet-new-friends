import LeftBar from "../Home/LeftBar";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoodIcon from "@mui/icons-material/Mood";
import Posts from "../Home/Posts";
import RightBar from "../Home/RightBar";
import { arry } from "../data";

export default function Feed() {
  return (
    <div className="flex overflow-x-clip">
      <LeftBar />
      <div>
        <div className="h-72 relative mb-20">
          <img
            src="/src/components/Image/pexels-mali-101667.jpg"
            alt="pp"
            className="w-full  bg-cover bg-center h-64 relative"
          />
          <div className="flex flex-col justify-center items-center">
            <img
              src="src/components/Image/photo_yared.jpg"
              alt=""
              className="w-36 rounded-full absolute top-44 "
            />
            <span className="mt-16 flex flex-col ">
              <strong className="mx-auto text-lg font-bold">
                Yared Desaley
              </strong>
              <span className="text-sm">Tommorow is a minute away</span>
            </span>
          </div>
        </div>
        <div className="flex ">
          <div>
            <OnYourMind />
            {arry.map((item) => (
              <Posts key={item.id} post={item} />
            ))}
          </div>
          <RightBar />
        </div>
      </div>
    </div>
  );
}

function OnYourMind() {
  return (
    <div className="w-full shadow-2xl m-5 p-3 rounded-xl">
      <div>
        <div className="flex gap-2">
          <img
            src="src\components\Image\photo_yared.jpg"
            alt="yad"
            className="w-10 rounded-full"
          />
          <span className="text-gray-400">What's in your mind Yadu?</span>
        </div>
        <input
          type="text"
          className="w-ful focus:outline-none w-11/12 border-b-2 border-b-gray-600 border-b-solid mx-auto"
        />
        <div className="flex  mt-5 justify-between ">
          <div className="flex gap-2 ">
            <div className="flex">
              <AddToPhotosIcon className="text-red-700" />
              <span className="hidden md:flex">Photo or Video</span>
            </div>
            <div className="flex">
              <LabelIcon className="text-blue-700" />
              <span className="hidden md:flex">Tag</span>
            </div>
            <div className="flex">
              <LocationOnIcon className="text-lime-600" />
              <span className="hidden md:flex">Location</span>
            </div>
            <div className="flex">
              <MoodIcon className="text-orange-600" />
              <span>Feeling</span>
            </div>
          </div>
          <button className="text-white border-none rounded-2xl bg-lime-500 px-3 mr-5 md:mr-0">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
