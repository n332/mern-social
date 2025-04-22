const router = require("express").Router();
const Post = require("../models/Post")
const User = require("../models/User")

// CREATE a post

router.post("/", async (req,res)=>{
    const newPost = new Post (req.body)
    try{

        const savedPost = await newPost.save();
        res.status(200).json(savedPost);

    }catch(err){
        res.status(500).json(err)
    }
})

// UPDATE a post

router.put("/:id", async(req,res)=>{


    try{

        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId:currentUser._id})
        const friendPosts = await Promise.all(
            currentUser.followins.map(friendId=>{
                return Post.find({userId : friendId});
            })
        );

        res.json(userPosts.concat(...friendPosts));

    }catch(err){
        res.status(500).json(err)
    }

})

// DELETE a post

router.delete("/:id", async(req,res)=>{


    try{
        const post = await Post.findById(req.params.id);

        if (post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("deleted successfully :)")
    
        }else{
            res.status(403).json("you can only delete your posts")
        }

    }
    catch(err){
        res.status(500).json(err)
    }

})

// Like or unlike a post


router.put("/:id/like", async(req,res)=>{
    try{

        const post = await Post.findById(req.params.id);

        if (!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json("post has been liked")
        } else {
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json("post has been unliked")
        }

    }catch(err){
        res.status(500).json(err)
    }
})

// GET a post

router.get("/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    }catch(arr){
        res.status(500).json(err)
    }
})

// GET timeline posts

router.get("/timeline/:userId",async(req,res)=>{

    try {
        const currentUser = await User.findById(req.params.userId);
        if (!currentUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followins.map(friendId => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: "Internal server error" });
    }
})


module.exports = router;