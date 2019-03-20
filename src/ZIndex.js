import ZIndexVars from './ZIndex.scss';

/* Creates an object like this:

 const ZIndex = {
   Page: 1,
   Modal: 11,
   Tooltip: 2000,
 };

 It basically:
  - Strips the 'zIndex' prefix
  - parses to int Number
*/
const ZIndexObj = Object.keys(ZIndexVars).reduce((acc, name) => {
  const parsedValue = parseInt(ZIndexVars[name]);
  const shortName = name.replace('zIndex', '');
  acc[shortName] = isNaN(parsedValue) ? null : parsedValue;
  return acc;
}, {});

function isProduction() {
  // If node-sass didn't work properly, then we are not in production,
  // but probably in `generate-autodocs-registry`
  return ZIndexVars.zIndexPage !== '$zIndex_PAGE';
}

export function ZIndex(layerName) {
  if (!isProduction()) {
    // This is a Hack for generate-autodocs-registry to work
    // See this Issues: https://github.com/wix/yoshi/issues/1156
    return '';
  }
  const zIndexValue = ZIndexObj[layerName];
  if (!zIndexValue) {
    throw new Error(
      `ZIndex: Layer with name ${layerName} does NOT exist. Layers = ${Object.keys(
        ZIndexObj,
      ).join(', ')}`,
    );
  }
  return zIndexValue;

  // return '';
}
