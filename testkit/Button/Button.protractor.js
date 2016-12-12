import {componentFactory, buttonDriverFactory} from '../test/e2e/Button/Button.driver';
import _ from 'lodash/fp';

const protractorButtonTestkitFactory = _.compose(buttonDriverFactory, componentFactory);

export {protractorButtonTestkitFactory};
