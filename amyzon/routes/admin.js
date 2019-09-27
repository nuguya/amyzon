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
  const username = req.session.passport.user.username;
  res.render("admin", { username: username });
});

router.get("/regist", function(req, res, next) {
  let cards = [];
  connection.query(dmlQuery.getCards(), function(err, rows) {
    if (err) next(err);
    rows.forEach(card => {
      cards.push(card);
    });
    connection.query(dmlQuery.getItemsInfo(), function(err, rows) {
      if (err) next(err);
      res.render("regist", { cards: cards, items: rows });
    });
  });
});

router.get("/item/:id", function(req, res, next) {
  connection.query(dmlQuery.getItemInfoById(), [req.params.id], function(err, rows) {
    if (err) next(err);
    res.render("item", { item: rows });
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

router.post("/update/:id", function(req, res, next) {
  console.log(req.body);
  res.send("sdaf");
});

router.post("/delete/:id", function(req, res, next) {
  console.log(req.body);
  res.render("admin");
});

router.post("/regist/primeitem", upload.single("imagefile"), function(req, res, next) {
  console.log(req.body);
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

router.get("/showuser", function(req, res, next) {
  connection.query(dmlQuery.getAllUserInfo(), function(err, rows) {
    res.render("showuser", { users: rows });
  });
});

router.post("/showuser", function(req, res, next) {
  if (req.body.usertype === "ADMIN") {
    connection.query(dmlQuery.updateUsersAuth(), ["NORMAL", req.body.uid], function(err, rows) {
      if (err) next();
      res.json({ res: "NORMAL" });
    });
  } else {
    connection.query(dmlQuery.updateUsersAuth(), ["ADMIN", req.body.uid], function(err, rows) {
      if (err) next();
      res.json({ res: "ADMIN" });
    });
  }
});

router.use(function(err, req, res, next) {
  res.render(err, { message: err.message });
});

module.exports = router;
