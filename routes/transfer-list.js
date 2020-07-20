const path = require("path");

const express = require("express");

const transfersController = require('../controllers/transfers');

const router = express.Router();

// GET "/"
router.get("/", transfersController.getTransfers);

module.exports = router;
