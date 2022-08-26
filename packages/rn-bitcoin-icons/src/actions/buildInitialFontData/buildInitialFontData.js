import webfont from 'webfont';
import { getMetadataProvider } from './metadataBuilder';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const buildInitialFontData = data => {
  if (!data?.previousIconCodes)
    // eslint-disable-next-line no-undef
    return Promise.reject(new Error('previousIconCodes not found'));

  if (!data?.globalConfig?.cleanedSvgOutput)
    // eslint-disable-next-line no-undef
    return Promise.reject(new Error('cleanedSvgOutput not found'));

  const metadataProvider = getMetadataProvider(data);

  const config = {
    files: `${data.globalConfig.cleanedSvgOutput}**/*.svg`,
    fontHeight: 600,
    fontName: data.globalConfig.fontName,
    metadataProvider,
    normalize: true,
    template: 'css',
    templateFontPath: './fonts',
  };

  return webfont(config).then(response => ({ ...data, ...response }));
};

export default buildInitialFontData;
