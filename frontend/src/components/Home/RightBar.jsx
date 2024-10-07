import Posts from "./Posts";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { online } from "../data";

function RightBar() {
  return (
    <div className="w-4/12 hidden md:flex ">
      <div className="mx-8 my-5">
        <div>
          <CardGiftcardIcon className="text-red-700" />
          <span>
            <strong> Pola Foster</strong> and <strong>3 others friends</strong>{" "}
            have a birth day.
          </span>
          <img
            src="src/components/Image/photo_yared.jpg"
            alt=""
            className="h-56 w-full rounded-2xl"
          />
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <span>Online Friends</span>
          {online.map((item) => (
            <Online key={item.id} par={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Online({ par }) {
  return (
    <div className="flex gap-2 relative">
      <img src={par.pic} className="w-10 rounded-full" />
      <div className="rounded-full bg-lime-600 p-1 h-2 absolute left-8 outline-white outline-4"></div>
      <span className="my-auto">{par.friend}</span>
    </div>
  );
}

export default RightBar;
