const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const videos = require("./videos.json");

app.get("/videos", (req, res) => {
    res.json(videos);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});