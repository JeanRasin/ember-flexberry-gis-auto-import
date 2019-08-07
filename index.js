/* eslint-env node */
'use strict';

// var appAssetsDirectory = '/assets';
// var appImagesDirectory = appAssetsDirectory + '/images';
module.exports = {
  name: 'ember-flexberry-gis-auto-import',
  included: function (app) {
  //  console.log('bowerDirectory: ', app.bowerDirectory);
    //app.import('bower_components/leaflet/dist/leaflet.css');
    // app.import('node_modules/leaflet/dist/leaflet.css',{
    //   destDir: appImagesDirectory
    // });
  },
  options: {
    babel: {
      plugins: [ require.resolve('ember-auto-import/babel-plugin') ]
    },

	  // Options for ember-auto-import addon (see https://github.com/ef4/ember-auto-import#customizing-build-behavior).
    autoImport: {
	    webpack: {
        externals: { jquery: 'jQuery' }
      }
    }
  }
};

