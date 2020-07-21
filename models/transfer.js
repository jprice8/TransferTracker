const fs = require("fs");
const path = require("path");

module.exports = class Transfer {
  constructor(date, facility, requester, imms, description, quantity, uom, filledBy, trackingNum) {
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
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'transferData.json'
    );
    fs.readFile(p, (err, fileContent) => {
        let transfers = [];
        if (!err) {
            transfers = JSON.parse(fileContent);
        }
        transfers.push(this);
        fs.writeFile(p, JSON.stringify(transfers), (err) => {
            console.log(err);
        });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'transferData.json'
    );
    
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        cb(JSON.parse(fileContent));
    });
  }
};
