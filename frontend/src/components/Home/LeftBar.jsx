import RssFeedIcon from "@mui/icons-material/RssFeed";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import SwitchVideoIcon from "@mui/icons-material/SwitchVideo";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
export default function LeftBar() {
  const [show, setShow] = useState(false);
  return (
    <div className="hidden md:flex md:flex-col w-1/4 p-4 h-screen overflow-y-scroll overflow-x-hidden sticky top-14">
      <ul className="flex flex-col gap-6 font-bold cursor-pointer">
        <li>
          <RssFeedIcon /> Feed
        </li>
        <li>
          <MarkUnreadChatAltIcon /> Chats
        </li>
        <li>
          <SwitchVideoIcon /> Videos
        </li>
        <li>
          <PeopleIcon /> Groups
        </li>
        <li>
          <BookmarkIcon /> Bookmarks
        </li>
        <li>
          <HelpOutlineIcon /> Questions
        </li>
        <li>
          <WorkOutlineIcon /> Jobs
        </li>
        <li>
          <EventIcon /> Events
        </li>
        <li>
          <SchoolIcon /> Courses
        </li>
      </ul>
      <button
        className="bg-gray-400 px-5 py-2 my-4 rounded-xl text-sm"
        onClick={() => setShow(!show)}
      >
        {show ? "Show less " : "Show More"}
      </button>
      <hr className="border-2 border-gray-500 w-11/12" />
      {show ? (
        <div>
          <div className="flex gap-2 my-2">
            <img
              src="src\components\Image\photo_yared.jpg"
              alt="yad"
              className="w-10 rounded-full"
            />
            <span>this is Left side bar</span>
          </div>
          <div className="flex gap-2 my-2">
            <img
              src="src\components\Image\photo_yared.jpg"
              alt="yad"
              className="w-10 rounded-full"
            />
            <span>this is Left side bar</span>
          </div>
          <div className="flex gap-2 my-2">
            <img
              src="src\components\Image\photo_yared.jpg"
              alt="yad"
              className="w-10 rounded-full"
            />
            <span>this is Left side bar</span>
          </div>
          <div className="flex gap-2 my-2">
            <img
              src="src\components\Image\photo_yared.jpg"
              alt="yad"
              className="w-10 rounded-full"
            />
            <span>this is Left side bar</span>
          </div>
          <div className="flex gap-2 my-2">
            <img
              src="src\components\Image\photo_yared.jpg"
              alt="yad"
              className="w-10 rounded-full"
            />
            <span>this is Left side bar</span>
          </div>
          <div className="flex gap-2 my-2">
            <img
              src="src\components\Image\photo_yared.jpg"
              alt="yad"
              className="w-10 rounded-full"
            />
            <span>this is Left side bar</span>
          </div>
          <div className="flex gap-2 my-2">
            <img
              src="src\components\Image\photo_yared.jpg"
              alt="yad"
              className="w-10 rounded-full"
            />
            <span>this is Left side bar</span>
          </div>
          <div className="flex gap-2 my-2">
            <img
              src="src\components\Image\photo_yared.jpg"
              alt="yad"
              className="w-10 rounded-full"
            />
            <span>this is Left side bar</span>
          </div>
          <div className="flex gap-2 my-2">
            <img
              src="src\components\Image\photo_yared.jpg"
              alt="yad"
              className="w-10 rounded-full"
            />
            <span>this is Left side bar</span>
          </div>
          <div className="flex gap-2 my-2">
            <img
              src="src\components\Image\photo_yared.jpg"
              alt="yad"
              className="w-10 rounded-full"
            />
            <span>this is Left side bar</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
