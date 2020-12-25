const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet(process.env.SPREAD_SHEET);
  }

  async load() {
    await this.doc.useServiceAccountAuth(require('./creds.json'));
    await this.doc.loadInfo();
  }

  async readRows() {
    const sheet = this.doc.sheetsByIndex[0];
    return await sheet.getRows();
  }
}