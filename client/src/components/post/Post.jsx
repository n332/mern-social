import "./post.css"
import {MoreVert} from '@mui/icons-material';
import axios from "axios";

// import {Users} from "../../dummyData"
import { useEffect, useState } from "react";

export default function Post({post}) {

    const [like, setLike] = useState(post.like);
    const [isLiked, setisLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    useEffect(()=>{
        const fetchUsers = async ()=>{
        const res = await axios.get(`users/${post.userId}`);
        setUser(res.data)
        }
        fetchUsers();
        
    },[])


    const likeHandeler = ()=>{
        // like = like -1 (if isLiked = T) or like +1 (if isLiked = F)
        // after making the action => opposite the state (isLiked)
        setLike(isLiked ? like - 1 : like +1)
        setisLiked(!isLiked)
    }


    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture} alt="" className="postProfileImg" />

                        <span className="postUserName">
                            {user.username}
                        </span>
                        
                        <span className="postDate">{post.date} mins ago</span>
                    </div>

                    <div className="postTopRight">
                        <MoreVert></MoreVert>
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.photo} alt="" className="postImg" />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img  className="likeIcon" src={`${PF}like.png`} onClick={likeHandeler} alt="" />
                        <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandeler} alt="" />
                        <span className="postLikeCounter">{like} ducks like it</span>
                    </div>

                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
