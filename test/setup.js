initGlobals();

function initGlobals() {
  var _ = require("lodash");
  var React = require("react");
  var ReactDOM = require("react-dom");
  var $ = require("jquery");

  gloabalize("_", _);
  gloabalize("React", React);
  gloabalize("ReactDOM", ReactDOM);
  gloabalize("$", $);
}

function gloabalize(key, value) {
  var windowExists = typeof window !== "undefined";
  var globalExists = typeof GLOBAL !== "undefined";

  if (windowExists)
    window[key] = value;

  if (globalExists)
    GLOBAL[key] = value;
}
