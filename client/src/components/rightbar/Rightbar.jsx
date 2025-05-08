import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.PNG" alt="" className="birthdayImg" />

          <span className="birthdayText">
            <b>Menna mostafa</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>

        <img src="assets/ad.jpg" alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u}></Online>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle" >User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">City: </span>
          <span className="rightbarInfoValue">Cairo</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">From: </span>
          <span className="rightbarInfoValue">Cairo</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">Relationship: </span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle" >User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src={`${PF}people/2.jpg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Menna Mostafa</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}people/2.jpg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Menna Mostafa</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}people/2.jpg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Menna Mostafa</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}people/2.jpg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Menna Mostafa</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}people/2.jpg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Menna Mostafa</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}people/2.jpg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Menna Mostafa</span>
        </div>

      </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
