const Transfer = require("../models/transfer");

exports.getAddTransfer = (req, res, next) => {
  res.render("add-transfer", {
    pageTitle: "Add Transfer",
    path: "/admin/add-transfer",
  });
};

exports.postAddTransfer = (req, res, next) => {
  const transfer = new Transfer(req.body.title);
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
