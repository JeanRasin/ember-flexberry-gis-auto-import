import Ember from 'ember';

export default Ember.Route.extend({

  addLinkStyle(fileName) {

    if(Ember.isNone(fileName))
    {
      console.log('Specify file name.');
      return;
    }

    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;

    head.appendChild(link);
  },
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
     //console.log(this);
   //  debugger;

      this.addLinkStyle(leafletCss);

      window.L = leaflet;

      console.log('Successfully load leaflet asynchronously.');
    }).catch((error) => {
      console.log('Failed to load leaflet asynchronously.', error);
    });
  }
});
