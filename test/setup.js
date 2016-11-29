initGlobals();

function initGlobals() {
  const _ = require('lodash');
  const React = require('react');
  const ReactDOM = require('react-dom');
  const $ = require('jquery');

  gloabalize('_', _);
  gloabalize('React', React);
  gloabalize('ReactDOM', ReactDOM);
  gloabalize('$', $);
}

function gloabalize(key, value) {
  const windowExists = typeof window !== 'undefined';
  const globalExists = typeof GLOBAL !== 'undefined';

  if (windowExists) {
    window[key] = value;
  }

  if (globalExists) {
    GLOBAL[key] = value;
  }
}
