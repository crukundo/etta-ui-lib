import path from 'path';
import {
  buildSvgPaths,
  optimizeSvgFilled,
  optimizeSvgOutline,
  buildPreviousIconCodes,
  buildInitialFontData,
  buildCurrentIconCodes,
  buildJsonDts,
  buildJson,
  buildCss,
  buildCssDts,
  buildFonts,
  // buildSwift,
  // buildDrawable,
  writeFiles,
} from './actions';

export const buildFilledConfig = () => ({
  cleanedSvgOutput: path.resolve(__dirname, '../dist/svg/filled'),
  fontExtensions: ['eot', 'ttf', 'woff', 'woff2', 'svg'],
  fontName: 'filled-bitcoin-icons',
  iconCodesPath: path.resolve(
    __dirname,
    './generated/filled-bitcoin-icon-codes.json'
  ),
  outputPath: path.resolve(__dirname, '../dist'),
  rawSvgInput: './svg/**/*.svg',
});

export const buildOutlineConfig = () => ({
  cleanedSvgOutput: path.resolve(__dirname, '../dist/svg/outline'),
  fontExtensions: ['eot', 'ttf', 'woff', 'woff2', 'svg'],
  fontName: 'outline-bitcoin-icons',
  iconCodesPath: path.resolve(
    __dirname,
    './generated/outline-bitcoin-icon-codes.json'
  ),
  outputPath: path.resolve(__dirname, '../dist'),
  rawSvgInput: './svg/**/*.svg',
});

export const initFilled = () =>
  buildSvgPaths({
    globalConfig: buildFilledConfig(),
  })
    .then(optimizeSvgFilled)
    .then(buildPreviousIconCodes)
    .then(buildInitialFontData)
    .then(buildCurrentIconCodes)
    .then(buildJson)
    .then(buildJsonDts)
    .then(buildCss)
    .then(buildCssDts)
    .then(buildFonts)
    // .then(buildSwift)
    // .then(buildDrawable)
    .then(writeFiles)
    .catch(msg => console.log(msg));

export const initOutline = () =>
  buildSvgPaths({
    globalConfig: buildOutlineConfig(),
  })
    .then(optimizeSvgOutline)
    .then(buildPreviousIconCodes)
    .then(buildInitialFontData)
    .then(buildCurrentIconCodes)
    .then(buildJson)
    .then(buildJsonDts)
    .then(buildCss)
    .then(buildCssDts)
    .then(buildFonts)
    // .then(buildSwift)
    // .then(buildDrawable)
    .then(writeFiles)
    .catch(msg => console.log(msg));
