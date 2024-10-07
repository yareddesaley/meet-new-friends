import NavBar from "../Home/NavBar";
import Feed from "./ProfileFeed";

function Profile() {
  return (
    <div onClick={window.scrollTo(0, 0)}>
      <NavBar />
      <Feed />
    </div>
  );
}

export default Profile;
