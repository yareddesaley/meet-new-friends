import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";
import down_arrow from "../Image/down.png";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-blue-500 text-white  sticky top-0 overflow-x-clip z-50">
      <div className="flex ml-8 mr-4 w-full justify-between text-center py-2">
        <span className="my-auto cursor-pointer  hidden md:flex">Logo</span>
        <span
          className=" cursor-pointer flex relative"
          onClick={() => setShow(!show)}
        >
          <img src={down_arrow} alt="dropdown" className="h-10 md:hidden" />
          <AnimatePresence>
            {show ? (
              <motion.div
                initial={{ x: -100 }}
                animate={{
                  x: 0,
                  transition: { type: "spring", stiffness: 500, duration: 0.5 },
                }}
                exit={{
                  x: -400,
                  transition: { duration: 0.5 },
                }}
                className="absolute bg-gray-200 rounded-xl  h-96 flex flex-col gap-5 px-24 py-5 top-10 text-black text-xl "
              >
                <span className="cursor-pointer ">
                  <Link to={"/"}>
                    <button className="hover:text-2xl">Homepage</button>
                  </Link>
                </span>
                <span className="cursor-pointer">
                  <button className="hover:text-2xl">Timeline</button>
                </span>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </span>
        <div className="flex w-10/12 justify-center gap-6 my-auto">
          <div className="bg-white hidden md:flex w-1/2 border-2  rounded-2xl  p-1 cursor-pointer">
            <span className=" text-black">
              <SearchIcon />{" "}
            </span>
            <input
              type="text"
              placeholder="Search for friend , post or video"
              className="w-full border-none focus:outline-none  text-black rounded-2xl pl-3"
            />
          </div>
          <span className="cursor-pointer my-auto hidden md:flex ">
            <Link to={"/"}>Homepage</Link>
          </span>
          <span className="cursor-pointer my-auto hidden md:flex ">
            Timeline
          </span>
          <div className="flex gap-8 my-auto">
            <div className="cursor-pointer">
              <PersonAddAltIcon className="relative" />
              <span className="absolute top-1 bg-red-700 rounded-full px-2">
                1
              </span>
            </div>
            <div className="cursor-pointer">
              <MessageIcon className="relative" />
              <span className="absolute top-1 bg-red-700 rounded-full px-2">
                1
              </span>
            </div>
            <div className="cursor-pointer ">
              <NotificationsNoneIcon className="relative" />
              <span className="absolute top-1 bg-red-700 rounded-full px-2 ">
                1
              </span>
            </div>
          </div>
          <div className="cursor-pointer">
            <Link to="/profile">
              {" "}
              <img
                src="src/components\Image\photo_yared.jpg"
                alt="yadu"
                className="w-10 rounded-full ml-10 bg-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
