/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

/* processed resources */
const OutputFolder = '/assets/';

/* leaflet plugin resources */
const LeafletPath = 'node_modules/leaflet/dist/';
const LeafletImgPath = LeafletPath + 'images/';
const OutputLeafletImgFolder = OutputFolder + 'images/leaflet';

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    minifyCSS: {
      enabled: true
    }
  });

  app.import (LeafletPath + 'leaflet.css', { outputFile: OutputFolder + 'leaflet.css' })
  app.import(LeafletImgPath + 'layers.png', { destDir: OutputLeafletImgFolder });
  app.import(LeafletImgPath + 'layers-2x.png', { destDir: OutputLeafletImgFolder });
  app.import(LeafletImgPath + 'marker-icon.png', { destDir: OutputLeafletImgFolder });
  app.import(LeafletImgPath + 'marker-icon-2x.png', { destDir: OutputLeafletImgFolder });
  app.import(LeafletImgPath + 'marker-shadow.png', { destDir: OutputLeafletImgFolder });

  return app.toTree();
};
