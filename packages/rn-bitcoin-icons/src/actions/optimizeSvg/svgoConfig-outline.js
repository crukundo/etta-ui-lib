export const svgoConfig = {
  plugins: [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: false },
    { cleanupEnableBackground: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: { noSpaceAfterFlags: false } },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: false },
    {
      mergePaths: {
        noSpaceAfterFlags: false,
      },
    },
    { convertShapeToPath: true },
    { removeXMLNS: false },
    { sortAttrs: true },
    { removeDimensions: true },
    { removeAttrs: { attrs: 'stroke' } },
    {
      addAttributesToSVGElement: {
        attributes: [
          {
            stroke: 'currentColor',
          },
        ],
      },
    },
  ],
};

export default svgoConfig;
