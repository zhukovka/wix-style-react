class GoogleMapsClient {
  constructor() {
    this._autocomplete = new window.google.maps.places.AutocompleteService();
    this._geocoder = new window.google.maps.Geocoder();
  }

  autocomplete({request}) {
    return new Promise((resolve, reject) => {
      try {
        this._autocomplete.getPlacePredictions(request, (results, status) => {
          if ((status !== window.google.maps.GeocoderStatus.OK) && (status !== window.google.maps.GeocoderStatus.ZERO_RESULTS)) {
            reject({code: 'internal'});
          } else {
            resolve(results);
          }
        });
      } catch (e) {
        reject({code: 'internal', message: e.message});
      }
    });
  }

  geocode({request}) {
    return new Promise((resolve, reject) => {
      try {
        this._geocoder.geocode(request, (results, status) => {
          if ((status !== window.google.maps.GeocoderStatus.OK) && (status !== window.google.maps.GeocoderStatus.ZERO_RESULTS)) {
            reject({code: 'internal'});
          } else {
            resolve(results);
          }
        });
      } catch (e) {
        reject({code: 'internal', message: e.message});
      }
    });
  }
}

export default GoogleMapsClient;
