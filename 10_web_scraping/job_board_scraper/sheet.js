const { GoogleSpreadsheet } = require('google-spreadsheet');
const dotenv = require('dotenv');

dotenv.config();

module.exports = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet('1Psn5o4HIy4RhehCx7qmNPL4cjqgI0Y2FzyCwX_J3RJ0');
  }

  async load() {
    await this.doc.useServiceAccountAuth(require('./cred.json'));
    await this.doc.loadInfo();
  }

  async addRows(rows) {
    const sheet = this.doc.sheetsByIndex[0];
    await sheet.addRows(rows);
  }
}
