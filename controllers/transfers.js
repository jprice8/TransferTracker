const Transfer = require("../models/transfer");
// const { render } = require("ejs");

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
  const reqQty = req.body.reqQty;
  const uom = req.body.uom;
  const filledBy = req.body.filledBy;
  const shipQty = req.body.shipQty;
  const trackingNum = req.body.trackingNum;
  Transfer.create({
    date: date,
    facility: facility,
    requester: requester,
    imms: imms,
    description: description,
    reqQty: reqQty,
    uom: uom,
    filledBy: filledBy,
    shipQty: shipQty,
    trackingNum: trackingNum
  }).then(result => {
    // console.log(result);
    console.log("Created transfer");
    res.redirect('/');
  }).catch(err => {
    console.log(err);
  });
};

exports.getEditTransfer = (req, res, next) => {
  const editMode = req.query.edit;
  const transId = req.params.transferId;
  Transfer.findByPk(transId).then(transfer => {
    res.render('edit-transfer', {
      pageTitle: 'Edit Transfer',
      path: '/admin/edit-transfer',
      editing: editMode,
      transfer: transfer
    });
  })
  .catch(err => console.log(err));
};

exports.postEditTransfer = (req, res, next) => {
  const transId = req.body.transferId;
  const updatedDate = req.body.date;
  const updatedFacility = req.body.facility;
  const updatedRequester = req.body.requester;
  const updatedImms = req.body.imms;
  const updatedDescription = req.body.description;
  const updatedReqQty = req.body.reqQty;
  const updatedUom = req.body.uom;
  const updatedFilledBy = req.body.filledBy;
  const updatedShipQty = req.body.shipQty;
  const updatedTrackingNum = req.body.trackingNum;
  Transfer.findByPk(transId).then(transfer => {
    transfer.date = updatedDate;
    transfer.facility = updatedFacility;
    transfer.requester = updatedRequester;
    transfer.imms = updatedImms;
    transfer.description = updatedDescription;
    transfer.reqQty = updatedReqQty;
    transfer.uom = updatedUom;
    transfer.filledBy = updatedFilledBy;
    transfer.shipQty = updatedShipQty;
    transfer.trackingNum = updatedTrackingNum;
    return transfer.save();
  })
  .then(result => {
    console.log("UPDATED TRANSFER");
    res.redirect('/');
  })
  .catch(err => console.log(err));
};

exports.getTransfers = (req, res, next) => {
  Transfer.findAll().then(transfers => {
    res.render('transfer-list', {
      trans: transfers,
      pageTitle: 'Transfers',
      path: '/'
    });
  }).catch(err => {
    console.log(err);
  }); 
};

exports.postDeleteTransfer = (req, res, next) => {
  const tranId = req.body.transferId;
  Transfer.findByPk(tranId)
    .then(transfer => {
      return transfer.destroy();
    })
    .then(result => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
};
