import Ember from 'ember';

export default Ember.Route.extend({
    /**
    Called before the router attempts to resolve the model for the given route.
  */
  beforeModel() {
    // Check if leaflet has been already loaded.
    if (!Ember.isNone(window.L)) {
      return;
    }

    // Load leaflet asynchronously.
    return import('leaflet').then((leaflet) => {
      const leafletCss = '/assets/leaflet.css';
      const iconFolder = 'assets/images/leaflet/';

      Ember.$('<link/>', {rel: 'stylesheet', type : 'text/css', href: leafletCss}).appendTo('head');

      // map icon folder
      leaflet.Icon.Default.imagePath = iconFolder;
      window.L = leaflet;

      console.log('Successfully load leaflet asynchronously.');
    }).catch((error) => {
      console.log('Failed to load leaflet asynchronously.', error);
    });
  }
});
