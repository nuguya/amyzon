const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const multer = require("multer");
const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");
const loginRouter = require("./routes/login");
const redis = require("./config/redis");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mysql = require("mysql");
const passportConfig = require("./config/passport");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "static_root")));
app.use(
  session({
    store: new RedisStore({
      client: redis,
      host: "106.10.50.11",
      port: 6379,
      prefix: "session:",
      db: 0
    }),
    resave: false,
    saveUninitialized: false,
    secret: "dogodogdogo",
    cookie: { maxAge: 2000000 }
  })
);
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결

app.use("/", indexRouter);
app.use("/admin", adminRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
