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

router.get("/adopt", function (req, res, next) {
  res.render("adopt", {
    layout: "wrapper",
    template: "adopt",
    title: "Adopt",
    isAdopt: true,
  });
});

router.get("/faq", function (req, res, next) {
  res.render("faq", {
    layout: "wrapper",
    template: "faq",
    title: "FAQ",
  });
});

  // res.render("/puppies", {
  //   layout: "wrapper",
  //   template: "puppies",
  //   title: "Puppies",
  //   isPuppies: true,
  // });

  // res.render("/parents", {
  //   layout: "wrapper",
  //   template: "parents",
  //   title: "Parents",
  //   isParents: true,
  // });

  // res.render("/info", {
  //   layout: "wrapper",
  //   template: "info",
  //   title: "Info",
  //   isInfo: true,
  // });

  // res.render("/contact", {
  //   layout: "wrapper",
  //   template: "contact",
  //   title: "Contact",
  //   isContact: true,
  // });

module.exports = router;
