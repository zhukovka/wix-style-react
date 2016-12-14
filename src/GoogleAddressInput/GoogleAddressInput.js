import React from 'react';
import AutoCompleteInput from '../AutoCompleteInput';
import _ from 'lodash';

class GoogleAddressInput extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      suggestions: [],
      value: params.defaultValue || params.value || ''
    };

    this.autoCompleteRequestId = 0;
    this.geocodeRequestId = 0;

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onSet = this.onSet.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this._getSuggestions(nextProps.value).then(suggestions => {
        this.setState({suggestions});
      }).catch(() => {
        // Nothing really to do...
        this.setState({suggestions: []});
      });
    }
  }

  render() {
    const {
      placeholder,
      error,
      magnifyingGlass
    } = this.props;

    const {
      suggestions,
      value
    } = this.state;

    return (
      <div>
        <AutoCompleteInput
          placeholder={placeholder}
          error={error}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onSet={this.onSet}
          value={value}
          magnifyingGlass={magnifyingGlass}
          suggestions={_.map(suggestions, 'description')}
          />
      </div>
    );
  }

  onChange(e) {
    const value = e.target.value;

    this.props.onChange && this.props.onChange(e);
    this.props.onSet && this.props.onSet(null);

    if (!_.isUndefined(this.props.value)) {
      // Controlled mode
      return;
    }

    this._getSuggestions(value).then(suggestions => {
      this.setState({suggestions});
    }).catch(() => {
      // Nothing really to do...
      this.setState({suggestions: []});
    });
  }

  onBlur() {
    this.props.onBlur && this.props.onBlur();

    this.timer = setTimeout(() => {
      this.setState({suggestions: []});
    }, 250);
  }

  onFocus() {
    this.props.onFocus && this.props.onFocus();
  }

  onSet(value) {
    const {
      Client,
      countryCode
    } = this.props;

    const suggestion = _.find(this.state.suggestions, s => s.description === value);

    this.setState({suggestions: [], value: this.props.value || value});

    const request = {
      region: countryCode,
      [suggestion ? 'placeId' : 'address']: suggestion ? suggestion.place_id : value
    };

    const requestId = ++this.geocodeRequestId;

    (new Client()).geocode({request}).then(results => {

      if (requestId !== this.geocodeRequestId) {
        return;
      }

      if (results.length === 0) {
        console.error('[GoogleAddressInput] Geocode returned no results on', value);
        this.props.onSet && this.props.onSet(null);
        // This shouldn't happen since we're running geocode on exactly the same
        // value returned by suggestions list
        return;
      }

      const result = {
        originValue: value,
        googleResult: results[0],
        address: google2address(results[0])
      };

      this.props.onSet && this.props.onSet(result);

    }).catch(e => {
      console.error('[GoogleAddressInput] Geocode failed on', value, e.message);
      this.props.onSet && this.props.onSet(null);
    });
  }

  onKeyDown(e) {

    this.props.onKeyDown && this.props.onKeyDown(e);

    if (e.keyCode === 13 /* enter */) {

      const value = e.target.value;

      this._getSuggestions(value, !_.isUndefined(this.props.value)).then(suggestions => {

        if (suggestions.length === 0) {
          // No suggestion to the text entered
          this.props.onSet && this.props.onSet(null);
          return;
        }

        this.onSet(suggestions[0].description);
      });
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  _getSuggestions(value, skipSetState) {
    const {
      valuePrefix = '',
      countryCode,
      types,
      filterTypes,
      Client
    } = this.props;

    const requestId = ++this.autoCompleteRequestId;

    return new Promise(resolve => {

      if (skipSetState) {
        // Controlled mode
        resolve();
        return;
      }

      this.setState({value}, () => resolve());

    }).then(() => {
      if (value === '') {
        return Promise.resolve([]);
      }

      const request = {types, components: 'country:' + countryCode, input: valuePrefix + value};

      return (new Client()).autocomplete({request});
    }).then(results => {
      if (results.length === 0) {
        return Promise.resolve([]);
      }

      if (requestId !== this.autoCompleteRequestId) {
        return Promise.resolve([]);
      }

      if (filterTypes) {
        results = _.filter(results, pred => _.includes(pred.types, filterTypes));
      }

      return Promise.resolve(results);
    });
  }
}

function google2address(google) {
  const result = {
    formatted: google.formatted_address,
    latLng: {
      lat: google.geometry.location.lat(),
      lng: google.geometry.location.lng()
    },
    approximate: (!_.includes(google.types, 'street_address') && (!_.includes(google.types, 'premise')))
  };

  _.each(google.address_components, component => {
    _.each(component.types, type => {
      switch (type) {
        case 'country':
          result.country = component.long_name || null;
          result.countryCode = component.short_name || null;
          break;
        case 'locality':
          result.city = component.long_name || null;
          break;
        case 'route':
          result.street = component.long_name || null;
          break;
        case 'street_number':
          result.number = component.long_name || null;
          break;
        case 'postal_code':
          result.postalCode = component.long_name || null;
          break;
        default:
          // Do nothing
          break;
      }
    });
  });

  return result;
}

GoogleAddressInput.defaultProps = {
  magnifyingGlass: true
};

GoogleAddressInput.propTypes = {
  placeholder: React.PropTypes.string,
  valuePrefix: React.PropTypes.string,
  countryCode: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  value: React.PropTypes.string,
  types: React.PropTypes.array,
  filterTypes: React.PropTypes.array,
  error: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onKeyDown: React.PropTypes.func,
  onSet: React.PropTypes.func,
  Client: React.PropTypes.func.isRequired,
  magnifyingGlass: React.PropTypes.bool
};

export default GoogleAddressInput;
