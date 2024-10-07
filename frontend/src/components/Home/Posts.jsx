import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
function Posts({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  function handleLike() {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="shadow-xl  rounded-xl  w-full  md:m-5 p-3 overflow-x-clip ">
      <div className="flex justify-between">
        <div className="flex my-8">
          <img
            src="src\components\Image\photo_yared.jpg"
            alt=""
            className="w-10 rounded-full bg-cover bg-center"
          />
          <span className="my-auto mx-4 font-bold">Yared Desaley</span>
          <span className="my-auto text-sm">{post.seen} mins ago</span>
        </div>
        <MoreVertIcon />
      </div>
      <span>{post?.description}</span>
      <div className="mt-5 cursor-pointer">
        <img src={post.pic} alt="yad" />
        <div className="flex justify-between">
          <div className="flex">
            <figcaption className="flex my-5 ">
              <ThumbUpAltIcon
                className="bg-blue-500 rounded-full text-white mr-1"
                onClick={handleLike}
              />
              <FavoriteIcon
                className="bg-red-500 rounded-full text-white "
                onClick={handleLike}
              />
            </figcaption>
            <span className="text-sm my-auto ml-1">{like} people like it</span>
          </div>
          <span className=" my-auto">22 comments</span>
        </div>
      </div>
    </div>
  );
}

export default Posts;
