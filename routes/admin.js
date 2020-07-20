const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-transfer => GET
router.get("/add-transfer", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-transfer.html"));
});

// /admin/add-transfer => POST
router.post("/add-transfer", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
