require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Please DO NOT INCLUDE the private app access token in your repo. Don't do this practicum in your normal account.
const PRIVATE_APP_ACCESS = process.env.PRIVATE_APP_ACCESS;
const CUSTOM_OBJECT_TYPE = process.env.CUSTOM_OBJECT_TYPE;

app.get("/", async (req, res) => {
  res.render("homepage", { title: "Video Games" });
});

app.get("/update-cobj", (req, res) => {
  res.render("updates", { title: "Update Video Game" });
});

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
