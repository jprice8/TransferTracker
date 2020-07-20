const fs = require("fs");
const path = require("path");

module.exports = class Transfer {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'transfers.json'
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
        'transfers.json'
    );
    
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        cb(JSON.parse(fileContent));
    });
  }
};
