import LeftBar from "./LeftBar";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoodIcon from "@mui/icons-material/Mood";
import Posts from "./Posts";
import RightBar from "./RightBar";
import { arry } from "../data";

export default function Feed() {
  return (
    <div className="flex overflow-x-clip">
      <LeftBar />
      <div className="w-full  md:w-5/12">
        <OnYourMind />
        {arry.map((item) => (
          <Posts key={item.id} post={item} />
        ))}
      </div>
      <RightBar />
    </div>
  );
}

function OnYourMind() {
  return (
    <div className="w-full shadow-xl m-5 p-3 rounded-xl">
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
        <div className="flex w-full mt-5 justify-between md:flex-col ">
          <div className="flex gap-8 md:gap-4">
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
            <div className="flex mr-4 md:mr-0">
              <MoodIcon className="text-orange-600" />
              <span className="hidden md:flex">Feeling</span>
            </div>
          </div>
          <button className="text-white border-none rounded-2xl bg-lime-500 mt-3  px-3 mr-8 md:mr-0">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
