import "./sidebar.css"
import {RssFeed, Chat,PlayCircle , Group, Bookmarks, Help, WorkOutline, School} from '@mui/icons-material';
import {Users} from "../../dummyData"
import CloseFriends from "../closeFriends/CloseFriends";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"></RssFeed>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <Chat className="sidebarIcon"></Chat>
            <span className="sidebarListItemText">Chat</span>
          </li>

          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon"></PlayCircle>
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <Group className="sidebarIcon"></Group>
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <Bookmarks className="sidebarIcon"></Bookmarks>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <Help className="sidebarIcon"></Help>
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"></WorkOutline>
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"></RssFeed>
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <School className="sidebarIcon"></School>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton" >Show more</button>

        <hr className="sidebarHr"/>

        <ul className="sidebarFriendList">
          {Users.map(u=>(
            <CloseFriends key={u.id} user = {u} ></CloseFriends>
          ))}
        </ul>
      </div>
    </div>
  )
}
