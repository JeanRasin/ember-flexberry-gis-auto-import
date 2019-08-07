/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

/* leaflet plugin resources */
const LeafletPath = 'node_modules/leaflet/dist/';
const LeafletImgPath = LeafletImgPath + 'images/';

/* processed resources */
const OutputFolder = '/assets/';
const OutputImgFolder = OutputFolder + 'images';

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // minifyJS: {
    //   enabled: true
    // },
    minifyCSS: {
      enabled: true
    }
  });

  app.import (LeafletPath + 'leaflet.css', { outputFile: OutputFolder + 'leaflet.css' })

  app.import(LeafletImgPath+'layers.png', { destDir: OutputImgFolder });
  app.import(LeafletImgPath+'layers-2x.png', { destDir: OutputImgFolder });
  app.import(LeafletImgPath+'marker-icon.png', { destDir: OutputImgFolder });
  app.import(LeafletImgPath+'marker-icon-2x.png', { destDir: OutputImgFolder });
  app.import(LeafletImgPath+'marker-shadow.png', { destDir: OutputImgFolder });

  return app.toTree();
};
