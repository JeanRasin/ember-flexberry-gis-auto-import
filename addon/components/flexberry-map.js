import Ember from 'ember';
import layout from '../templates/components/flexberry-map';

export default Ember.Component.extend({
  /**
    Reference to leaflet map.

    @property _leafletMap
    @type <a href="http://leafletjs.com/reference-1.0.0.html#map">L.Map</a>
    @default null
    @private
  */
  _leafletMap: null,

  /**
    Reference to component's template.
  */
  layout,

  /**
    Component's wrapping <div> CSS-classes names.
    Any other CSS-class names can be added through component's 'class' property.
    ```handlebars
    {{#flexberry-map class="my-class"}}
      Map's content
    {{/flexberry-map}}
    ```
    @property classNames
    @type String[]
    @default ['flexberry-map']
  */
  classNames: ['flexberry-map'],

  /**
    Initializes DOM-related component's properties.
  */
  didInsertElement() {
    this._super(...arguments);

    if (Ember.isNone(window.L)) {
      console.log('Leaflet is not loaded yet, so flexberry-map component can\'t be initialized.');

      return;
    }

    // Initialize leaflet map.
    let $leafletContainer = this.$();
    let leafletMap = L.map($leafletContainer[0]);

    leafletMap.setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap);

    L.marker([51.5, -0.09])
      .addTo(leafletMap)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();

    this.set('_leafletMap', leafletMap);
  },

  /**
    Destroys DOM-related component's properties.
  */
  willDestroyElement() {
    this._super(...arguments);

    let leafletMap = this.get('_leafletMap');
    if (!Ember.isNone(leafletMap)) {
      return;
    }

    // Destroy leaflet map.
    leafletMap.remove();
    this.set('_leafletMap', null);
  }
});
