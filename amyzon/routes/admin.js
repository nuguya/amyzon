const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const mysql = require("mysql");
const dbconfig = require("../config/database");
const Query = require("../sql/query");
const connection = mysql.createConnection(dbconfig);
const redis = require("../config/redis");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);

let filename;
const dmlQuery = new Query();

let storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "static_root/");
  },
  filename: function(req, file, callback) {
    let extension = path.extname(file.originalname);
    let basename = path.basename(file.originalname, extension);
    filename = basename + "-" + Date.now() + extension;
    callback(null, filename);
  }
});

const upload = multer({
  storage: storage
});

router.use(function(req, res, next) {
  if (req.isAuthenticated()) {
    switch (req.session.passport.user.usertype) {
      case "ADMIN":
        next();
        break;
      default:
        res.redirect("/");
        break;
    }
  } else {
    res.redirect("/");
  }
});

router.get("/", function(req, res, next) {
  res.render("admin");
});

router.get("/regist", function(req, res, next) {
  let cards = [];
  connection.query(dmlQuery.getCards(), function(err, rows) {
    if (err) next(err);
    rows.forEach(card => {
      cards.push(card);
    });
    res.render("regist", { cards: cards });
  });
});

router.post("/regist/primecard", upload.single("imagefile"), function(req, res, next) {
  const file = req.file;
  const title = req.body.title;
  const imageFileName = filename;
  connection.query(dmlQuery.registCard(), [title, imageFileName], function(err, rows) {
    if (err) next(err);
  });
  res.redirect("/admin/regist");
});

router.post("/regist/primeitem", upload.single("imagefile"), function(req, res, next) {
  const file = req.file;
  const imageFileName = filename;
  const item = {
    image_url: imageFileName,
    title: req.body.title,
    head: req.body.head,
    body: req.body.body,
    tail: req.body.tail,
    link: req.body.link,
    category: req.body.card
  };
  insertValue = [];
  for (let key in item) {
    insertValue.push(item[key]);
  }
  connection.query(dmlQuery.registPrimeItem(), insertValue, function(err, rows) {
    if (err) next(err);
  });
  res.redirect("/admin/regist");
});

router.use(function(err, req, res, next) {
  res.render(error, { message: err.message });
});

module.exports = router;
