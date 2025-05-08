import "./profile.css";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <>
      <Topbar></Topbar>

      <div className="profile">
        <Sidebar></Sidebar>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}posts/3.jpg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}people/1.jpg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName" >Nour Mostafa</h4>
              <span className="profileInfoDesc" >Hello my friends</span>
            </div>
          </div>
          <div className="profileRightbottom">
            <Feed></Feed>
            <Rightbar profile ></Rightbar>
          </div>
        </div>
      </div>
    </>
  );
}
