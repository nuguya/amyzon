const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mysql = require("mysql");
const dbconfig = require("../config/database");
const Query = require("../sql/query");
const connection = mysql.createConnection(dbconfig);

module.exports = (function() {
  const dmlQuery = new Query();
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "uid",
        passwordField: "passwd",
        session: true,
        passReqToCallback: true
      },
      (req, id, password, done) => {
        connection.query(dmlQuery.getLoginInfo(), [id], function(err, rows) {
          if (err) return done(err);
          if (rows.length == 0) {
            return done(null, false, { message: "존재하지 않는 아이디입니다" });
          }
          if (id == rows[0].uid && password == rows[0].passwd) {
            return done(null, rows[0]);
          } else {
            return done(null, false, { message: "아이디와 비밀번호를 확인해주세요" });
          }
        });
      }
    )
  );
})();
