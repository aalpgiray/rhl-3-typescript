import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

colors;

fs.readFile('src/index.html', 'utf8', (err, markup)=> {
  if (err) {
    return console.log(err.message.red);
  }

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="style.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err.message.red);
    }
    console.log('index.html written to /dist'.green);
  });
});
