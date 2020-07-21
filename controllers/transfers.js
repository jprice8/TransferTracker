const Transfer = require("../models/transfer");

exports.getAddTransfer = (req, res, next) => {
  res.render("edit-transfer", {
    pageTitle: "Add Transfer",
    path: "/admin/add-transfer",
    editing: false
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
  const transfer = new Transfer(null, date, facility, requester, imms, description, quantity, uom, filledBy, trackingNum);
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

exports.getEditTransfer = (req, res, next) => {
  const editMode = req.query.edit;
  
  const transId = req.params.transferId;
  Transfer.findById(transId, transfer => {
    if (!transfer) {
      return res.redirect('/');
    }
    res.render('edit-transfer', {
      pageTitle: 'Edit Transfer',
      path: '/admin/edit-transfer',
      editing: editMode,
      transfer: transfer
    });
  });
};

exports.postEditTransfer = (req, res, next) => {
  const transId = req.body.transferId;
  const updatedDate = req.body.date;
  const updatedRequester = req.body.requester;
  const updatedImms = req.body.imms;
  const updatedDescription = req.body.description;
  const updatedQuantity = req.body.quantity;
  const updatedUom = req.body.uom;
  const updatedFilledBy = req.body.filledBy;
  const updatedTrackingNum = req.body.trackingNum;
  const updatedTransfer = new Transfer(
    transId,
    updatedDate,
    updatedRequester,
    updatedImms,
    updatedDescription,
    updatedQuantity,
    updatedUom,
    updatedFilledBy,
    updatedTrackingNum,
  );
  updatedTransfer.save();
  res.redirect('/');
}
