const Transfer = require("../models/transfer");

exports.getAddTransfer = (req, res, next) => {
  res.render("add-transfer", {
    pageTitle: "Add Transfer",
    path: "/admin/add-transfer",
  });
};

exports.postAddTransfer = (req, res, next) => {
  const date = req.body.date;
  const facility = req.body.facility;
  const requester = req.body.requester;
  const imms = req.body.imms;
  const description = req.body.description;
  const quantity = req.body.quantity;
  const uom = req.body.uom;
  const filledBy = req.body.filledBy;
  const trackingNum = req.body.trackingNum;
  const transfer = new Transfer(date, facility, requester, imms, description, quantity, uom, filledBy, trackingNum);
  transfer.save();
  res.redirect("/");
};

exports.getTransfers = (req, res, next) => {
  Transfer.fetchAll((transfers) => {
    res.render("transfer-list", {
      trans: transfers,
      pageTitle: "Transfer List",
      path: "/",
    });
  });
};
