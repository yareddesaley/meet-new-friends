import NavBar from "./NavBar";
import Feed from "./Feed";

export default function Home() {
  return (
    <div onClick={window.scrollTo(0, 0)} className="overflow-x-clip">
      <NavBar />
      <Feed />
    </div>
  );
}
