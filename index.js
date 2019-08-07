/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-flexberry-gis-auto-import',
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

