var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("home", {
    layout: "wrapper",
    template: "home",
    title: "Breeder Theme 1",
    isHome: true,
  });
});

module.exports = router;
