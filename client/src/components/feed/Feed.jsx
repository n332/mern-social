import { useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios"
// import {Posts} from "../../dummyData"

export default function Feed() {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("posts/timeline/66acb63baf49ced365025bf9");
      setPosts(res.data)
    }
    fetchPosts();
    
  },[])

  return (
    <div className="feed" >
      <div className="feedWrapper">
        <Share></Share>
        {posts.map((p)=>(
          <Post key={p.id} post = {p} ></Post>
        )
        )}


        
        
      </div>
    </div>
  )
}
