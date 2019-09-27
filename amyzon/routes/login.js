const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const path = require("path");
const dbconfig = require("../config/database");
const Query = require("../sql/query");
const connection = mysql.createConnection(dbconfig);
const dmlquery = new Query();
const passport = require("passport");

router.use(function(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else next();
});

router.get("/", function(req, res, next) {
  res.render("login");
});

router.post(
  "/",
  passport.authenticate("local", {
    failureRedirect: "/login"
  }),
  function(req, res, next) {
    res.redirect("/");
  }
);

module.exports = router;
