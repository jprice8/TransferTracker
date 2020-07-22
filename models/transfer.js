const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'transfers.json'  
);

const getTransfersFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Transfer {
  constructor(id, date, facility, requester, imms, description, quantity, uom, filledBy, trackingNum) {
    this.id = id;
    this.date = date;
    this.facility = facility;
    this.requester = requester;
    this.imms = imms;
    this.description = description;
    this.quantity = quantity;
    this.uom = uom;
    this.filledBy = filledBy;
    this.trackingNum = trackingNum;
  }

  save() {
    getTransfersFromFile(transfers => {
      if (this.id) {
        const existingTransferIndex = transfers.findIndex(trans => trans.id === this.id);
        const updatedTransfers = [...transfers];
        updatedTransfers[existingTransferIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedTransfers), (err) => {
          console.log(err);
      });
      } else {
      this.id = Math.random().toString();
      transfers.push(this);
        fs.writeFile(p, JSON.stringify(transfers), (err) => {
            console.log(err);
        });
      }
    });
  }

  static deleteById(id) {
    getTransfersFromFile(transfers => {
      const filteredTransfers = transfers.filter(tran => tran.id !== id);
      fs.writeFile(p, JSON.stringify(filteredTransfers), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getTransfersFromFile(cb);
  }

  static findById(id, cb) {
    getTransfersFromFile(transfers => {
      const transfer = transfers.find(t => t.id === id);
      cb(transfer);
    });
  }
};
