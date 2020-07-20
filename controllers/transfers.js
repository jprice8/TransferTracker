const transfers = [];

exports.getAddTransfer = (req, res, next) => {
    res.render('add-transfer', {
      pageTitle: 'Add Transfer',
      path: '/admin/add-transfer'
    });
  };

  exports.postAddTransfer = (req, res, next) => {
    transfers.push({ title: req.body.title });
    res.redirect("/");
  };

  exports.getTransfers = (req, res, next) => {
    res.render("transfer-list", {
      trans: transfers,
      pageTitle: 'Transfer List',
      path: '/'
    });
  };