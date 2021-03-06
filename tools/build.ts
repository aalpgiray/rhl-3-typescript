import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors, { bold,yellow,red } from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via Webpack. This will take a moment..'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.message.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log('Your app has been compiled in production mode and written to /dist. Is\'s ready to roll'.green);

  return 0;
});
