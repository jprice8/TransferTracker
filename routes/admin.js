const path = require("path");

const express = require("express");

const transfersController = require('../controllers/transfers');

const router = express.Router();

// /admin/add-transfer => GET
router.get("/add-transfer", transfersController.getAddTransfer);

// /admin/add-transfer => POST
router.post("/add-transfer", transfersController.postAddTransfer);

module.exports = router;