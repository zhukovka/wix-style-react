import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

// Required setup for the Carousel test suites to pass because using react-slick
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    };
  };

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 0);
  };

// Prevent `eyes.it` to initialize itself
process.env.EYES_API_KEY = '';
