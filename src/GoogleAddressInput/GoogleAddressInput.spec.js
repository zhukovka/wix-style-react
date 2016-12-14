import 'react';
import {componentFactory} from './GoogleAddressInput.driver';
import _ from 'lodash/fp';
import sinon from 'sinon';

const GEOCODE_RESULT = JSON.parse('{"formatted_address":"_formatted_address_","address_components":[{"types":["street_number"],"long_name":123}]}');
GEOCODE_RESULT.geometry = {
  location: {
    lat: () => 31.12,
    lng: () => 33.34
  }
};

class GmapsTestClient {
  autocomplete({request}) {

    if (request.input === 'dontfind') {
      return Promise.resolve([]);
    }

    return Promise.resolve([
      {description: JSON.stringify(request) + ' - 1'},
      {description: JSON.stringify(request) + ' - 2'}
    ]);
  }

  geocode({request}) {
    return Promise.resolve(
      [_.extend({}, GEOCODE_RESULT, {__called__: JSON.stringify(request)})]
    );
  }
}

describe('GoogleAddressInput', () => {
  const {createShallow} = componentFactory();

  describe('appearance', () => {
    it('should show magnifying glass by default', () => {
      const component = createShallow({ Client: GmapsTestClient });
      expect(component.find('AutoCompleteInput').props().magnifyingGlass).toEqual(true);
    });
    it('should allow hiding magnifying glass', () => {
      const component = createShallow({ Client: GmapsTestClient, magnifyingGlass: false });
      expect(component.find('AutoCompleteInput').props().magnifyingGlass).toEqual(false);
    });
  });

  describe('User Interactions', () => {

    it('If user changes the value in the autocomplete box, request suggestions from google.maps', done => {

      const component = createShallow({Client: GmapsTestClient, countryCode: 'XX'});
      const event = {target: {value: 'Hatomer 49'}};
      component.find('AutoCompleteInput').props().onChange(event);

      // Defer to make sure all promises run
      _.defer(() => {
        try {
          component.update();
          expect(component.find('AutoCompleteInput').props().suggestions).toEqual([
            '{"components":"country:XX","input":"Hatomer 49"} - 1',
            '{"components":"country:XX","input":"Hatomer 49"} - 2'
          ]);
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });

    it('If user pressed <enter> with a suggested value, geocode the suggested value, and call the onSet callback', done => {

      const onSet = sinon.spy();

      const component = createShallow({Client: GmapsTestClient, countryCode: 'XX', onSet});
      component.setState({suggestions: [JSON.parse('{"description": "my address", "place_id": 123}')]});
      component.find('AutoCompleteInput').props().onSet('my address');

      // Defer to make sure all promises run
      _.defer(() => {
        try {
          expect(onSet.args[0][0]).toEqual({
            originValue: 'my address',
            googleResult: GEOCODE_RESULT,
            address: {
              approximate: true,
              latLng: {
                lat: 31.12,
                lng: 33.34
              },
              number: 123,
              formatted: '_formatted_address_'
            }
          });
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });

    it('If user pressed <enter> with a value that is not on the suggestions list, try to suggest it and geocode if successful', done => {
      const onSet = sinon.spy();

      const component = createShallow({Client: GmapsTestClient, countryCode: 'XX', onSet});
      component.setState({suggestions: [JSON.parse('{"description": "my address", "place_id": 123}')]});
      component.find('AutoCompleteInput').props().onKeyDown({keyCode: 13, target: {value: 'my addr'}});

      // Defer to make sure all promises run
      _.defer(() => {
        try {
          expect(onSet.args[0][0]).toEqual({
            originValue: '{"components":"country:XX","input":"my addr"} - 1', // The first suggestion
            googleResult: GEOCODE_RESULT,
            address: {
              approximate: true,
              latLng: {
                lat: 31.12,
                lng: 33.34
              },
              number: 123,
              formatted: '_formatted_address_'
            }
          });
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });

    it('If user pressed <enter> with a value that is not on the suggestions list, try to suggest it and return null if unsuccessful', done => {
      const onSet = sinon.spy();
      const component = createShallow({Client: GmapsTestClient, countryCode: 'YY', onSet});
      component.setState({suggestions: [JSON.parse('{"description": "my address", "place_id": 123}')]});
      component.find('AutoCompleteInput').props().onKeyDown({keyCode: 13, target: {value: 'dontfind'}});

      // Defer to make sure all promises run
      _.defer(() => {
        try {
          expect(onSet.args[0][0]).toEqual(null);
          done();
        } catch (e) {
          done.fail(e);
        }
      });
    });
  });
});
