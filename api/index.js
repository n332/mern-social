const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");


dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB Successfully :)");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB :(", err);
    });

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);


// Start server
app.listen(8800, () => {
    console.log("Backend server is running!");
});
