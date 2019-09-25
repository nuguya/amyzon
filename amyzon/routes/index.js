const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const dbconfig = require("../config/database");
const Query = require("../sql/query");
const connection = mysql.createConnection(dbconfig);

const dmlquery = new Query();

router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/prime_allitems", function(req, res, next) {
  connection.query(dmlquery.getAllItems(), function(err, rows) {
    res.send(rows);
  });
});

module.exports = router;
