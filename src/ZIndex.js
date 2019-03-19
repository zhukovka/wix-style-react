import ZIndexVars from './ZIndex.scss';

/* Creates an object like this:

 export const ZIndex = {
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

export function ZIndex(layerName) {
  const zIndexValue = ZIndexObj[layerName];
  if (!zIndexValue) {
    throw new Error(
      `ZIndex: Layer with name ${layerName} does NOT exist. Layers = ${Object.keys(
        ZIndexObj,
      ).join(', ')}`,
    );
  }
  return zIndexValue;
}
