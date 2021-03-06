const Sheet = require('./sheet');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

async function scrapePage(i) {
  const res = await fetch(`https://jobs.github.com/positions.json?page=${i}&search=code`);

  const resjson = await res.json();

  const rows = resjson.map(job => {
    return {
      company: job.company,
      title: job.title,
      location: job.location,
      date: job.created_at,
      url: job.url,
    }
  });

  return rows;

}

(async function() {

  let i = 1;
  let rows = [];

  while(true) {
    const newRows = await scrapePage(i);

    if(newRows.length === 0) break;

    rows = rows.concat(newRows);
    i++;

  }

  console.log('total rows length', rows.length);


  const sheet = new Sheet();
  await sheet.load();

  await sheet.addRows(rows)



})()