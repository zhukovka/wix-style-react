const ZIndexValues = {
  Page: 1,
  Modal: 11,
  Tooltip: 2000,
};

export function ZIndex(layerName) {
  const zIndexValue = ZIndexValues[layerName];
  if (!zIndexValue) {
    throw new Error(
      `ZIndex: Layer with name ${layerName} does NOT exist. Layers = ${Object.keys(
        ZIndexValues,
      ).join(', ')}`,
    );
  }
  return zIndexValue;
}
