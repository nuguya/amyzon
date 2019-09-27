const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const path = require("path");
const dbconfig = require("../config/database");
const Query = require("../sql/query");
const connection = mysql.createConnection(dbconfig);
const dmlquery = new Query();

function getAllItems() {
  return new Promise((resolve, reject) => {
    connection.query(dmlquery.getAllItems(), function(err, rows) {
      if (err) {
        reject(new Error("can not get items"));
      }
      resolve(rows);
    });
  });
}

function getCards() {
  return new Promise((resolve, reject) => {
    connection.query(dmlquery.getCards(), function(err, rows) {
      if (err) {
        reject(new Error("can not get items"));
      }
      resolve(rows);
    });
  });
}

router.get("/", function(req, res, next) {
  if (req.isAuthenticated()) res.render("index", { res: "login" });
  else res.render("index", { res: "logout" });
});

router.get("/prime_allitems", async function(req, res, next) {
  let result = [];

  try {
    const items = await getAllItems();
    const cards = await getCards();
    cards.forEach(card => {
      let obj = {};
      obj[card.title] = [];
      obj["image"] = card.image_url;
      result.push(obj);
    });
    items.forEach(item => {
      let obj = {
        image: item.image_url,
        title: item.title,
        head: item.head,
        body: item.body,
        tail: item.tail,
        link: item.link
      };
      for (let i of result) {
        if (i[item.category]) {
          i[item.category].push(obj);
        }
      }
    });
    res.json(result);
  } catch (e) {
    next();
  }
});

module.exports = router;
