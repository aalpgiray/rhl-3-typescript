import webpack from 'webpack';
import webpackConfig from '../webpack.config.test';
import colors from 'colors';

colors;

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via Webpack. This will take a moment..'.blue);

webpack(webpackConfig).watch({},(err, stats) => {
  if (err) {
    console.log(err.message.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  // console.log(`Webpack stats: ${stats}`);

  console.log('Your tests has been compiled in production mode and written to /tests. Is\'s ready to roll'.green);

  return 0;
});
