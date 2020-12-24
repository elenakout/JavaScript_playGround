const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet('169IbdIYLhXQPYASm5pzt8uicla6b6dFcW7G6yeYyxYc');
  }

  async load() {
    await this.doc.useServiceAccountAuth(require('./crendentials.json'));
    await this.doc.loadInfo();
  }

  async addRows(rows) {
    const sheet = this.doc.sheetsByIndex[0];
    await sheet.addRows(rows);
  }
}
