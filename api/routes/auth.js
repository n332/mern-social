const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req, res) => {

    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // save user and response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});



// LOGIN

router.post("/login",async (req,res)=>{

    try{
        console.log("Request Body:", req.body); // Log the request body

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send("user not found");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json("wrong password");
        }

        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }

})

module.exports = router;
