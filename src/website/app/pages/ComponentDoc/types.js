/* @flow */
export type BestPracticeT = {
  backgroundColor?: string,
  description: string,
  example: React$Node,
  type: string
};
export type BestPracticesT = Array<BestPracticeT>;

type ThemeT = (theme: Object) => Object; // TODO: this should be defined elsewhere
type ThemesT = Array<ThemeT>;

export type ExampleT = {
  backgroundColor?: string,
  description?: React$Node,
  hideFromProd?: boolean,
  hideSource?: boolean,
  id: string,
  propValues?: Object,
  scope?: Object,
  source?: string,
  title: React$Node
};
export type ExamplesT = Array<ExampleT>;

type AdditionalPropDocT = {
  title: string,
  description: React$Node,
  propDocs: ComponentPropDocsT
};
type AdditionalPropDocsT = Array<AdditionalPropDocT>;

export type ComponentDocT = {
  title: string,
  slug: string,
  description?: React$Node,
  examples?: ExamplesT,
  propDocs?: ComponentPropDocsT,
  propsComment?: string | React$Element<*>,
  additionalPropDocs?: AdditionalPropDocsT,
  theme?: ThemeT | ThemesT,
  whenHowToUse?: string,
  bestPractices?: BestPracticesT
};

export type ComponentDocsT = Array<ComponentDocT>;

export type ComponentPropDocsT = {
  [key: string]: ComponentPropDocT
};

export type ComponentPropDocT = {
  description: string,
  defaultValue?: string,
  required?: boolean,
  type: string | { name: string, value: string }
};
