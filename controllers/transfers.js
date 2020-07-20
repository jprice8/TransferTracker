const Transfer = require("../models/transfer");

exports.getAddTransfer = (req, res, next) => {
  res.render("add-transfer", {
    pageTitle: "Add Transfer",
    path: "/admin/add-transfer",
  });
};

exports.postAddTransfer = (req, res, next) => {
  const facility = req.body.facility;
  const imms = req.body.imms;
  const description = req.body.description;
  const quantity = req.body.quantity;
  const transfer = new Transfer(facility, imms, description, quantity);
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
