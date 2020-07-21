const path = require("path");

const express = require("express");

const transfersController = require('../controllers/transfers');

const router = express.Router();

// /admin/add-transfer => GET
router.get("/add-transfer", transfersController.getAddTransfer);

// /admin/add-transfer => POST
router.post("/add-transfer", transfersController.postAddTransfer);

// User has fired this url, now we are saying "when you see this url, fire this controller."
// /admin/edit-transfer => GET
router.get("/edit-transfer/:transferId", transfersController.getEditTransfer);

// /admin/edit-transfer => POST
router.post("/edit-transfer", transfersController.postEditTransfer);

module.exports = router;