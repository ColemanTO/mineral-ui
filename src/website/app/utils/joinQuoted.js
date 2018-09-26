/* @flow */
type OptionsT = {
  delimiter: string,
  quote: string
};

export default (
  array: Array<any>,
  options?: OptionsT = {
    delimiter: ' | ',
    quote: `'`
  }
): string => {
  const { delimiter: d, quote: q } = options;
  return `${q}${array.join(`${q}${d}${q}`)}${q}`;
};
