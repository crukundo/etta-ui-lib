import filledIcons from './filled-bitcoin-icons.json';
import outlineIcons from './outline-bitcoin-icons.json';

const filledIconNames = Object.keys(filledIcons);
const outlineIconNames = Object.keys(outlineIcons);

export type FilledIconName = keyof typeof filledIcons;
export type OutlineIconName = keyof typeof outlineIcons;

export { filledIcons, outlineIcons, filledIconNames, outlineIconNames };
