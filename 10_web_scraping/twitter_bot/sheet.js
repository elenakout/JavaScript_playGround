const { GoogleSpreadsheet } = require('google-spreadsheet');

const cred = {
  "type": "service_account",
  "project_id": process.env.SHEETS_PROJECT_ID,
  "private_key_id": process.env.SHEETS_PRIVATE_KEY_ID,
  "private_key": process.env.SHEETS_PRIVATE_KEY,
  "client_email": process.env.SHEETS_CLIENT_EMAIL,
  "client_id": process.env.SHEETS_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/jswbsc%40getshitdone-f39aa.iam.gserviceaccount.com"
}

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