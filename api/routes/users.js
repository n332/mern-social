const User = require("../models/User")
const router = require("express").Router();
const bcrypt = require("bcrypt");

// UPDATE user
router.put("/:id",async(req,res)=>{
    if (req.body.userId == req.params.id || req.body.isAdmin){

        if (req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password =  await bcrypt.hash(req.body.password, salt)
            }catch(err){
                return res.status(500).json(err);
            }
        }

        try{

            const user = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            });
            res.status(200).json("Account has been updated");
        }catch(err){
            return res.status(500).json(err);
        }

    }else{
        return res.status(403).json("you can update only your account")
    }
})

// DELETE user

router.delete("/:id",async(req,res)=>{

    if (req.body.userId == req.params.id || req.body.isAdmin){

        try{

            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been Deleted");
        }catch(err){
            return res.status(500).json(err);
        }

    }else{
        return res.status(403).json("you can delete only your account")
    }
})

// GET a user

router.get("/:id", async (req,res)=>{

    try{

        const user = await User.findById(req.params.id);

        const {password, updatedAt, ...other}= user._doc
        res.status(200).json(other);

    }catch(arr){
        return res.status(500).json(err);
    }
})

// Follow a user

router.put("/:id/follow", async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id); // the onw who follow
            const currentUser = await User.findById(req.body.userId); // the one who will be followed

            if (!user.followins.includes(req.body.userId)){

                await user.updateOne({$push:{followins:req.body.userId}}) // push the one who will be followed to the followins arry of the one who followed
                await currentUser.updateOne({$push:{followers:req.params.id}}) // push the one who follows to the followes arry of the one who will be followed

                res.status(200).json("user has been followed")

            }else{
                res.status(403).json("you'r already follow this user")
            }
        }catch(err){
            return res.status(500).json(err);
        }

    }else{
        res.status(403).json("you cannot follow yourself you narcissistic fool !")
    }
})

// Unfollow a use 

router.put("/:id/unfollow", async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id); 
            const currentUser = await User.findById(req.body.userId); 

            if (user.followins.includes(req.body.userId)){

                await user.updateOne({$pull:{followins:req.body.userId}}) 
                await currentUser.updateOne({$pull:{followers:req.params.id}}) 
                res.status(200).json("user has been unfollowed")

            }else{
                res.status(403).json("you don't follow this user")
            }
        }catch(err){
            return res.status(500).json(err);
        }

    }else{
        res.status(403).json("you cannot unfollow yourself you narcissistic fool !")
    }
})

module.exports = router;