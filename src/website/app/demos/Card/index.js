/* @flow */
import cardDoc from './Card';
import cardActionsDoc from './CardActions';
import cardBlockDoc from './CardBlock';
import cardDividerDoc from './CardDivider';
import cardFooterDoc from './CardFooter';
import cardImageDoc from './CardImage';
import cardStatusDoc from './CardStatus';
import cardTitleDoc from './CardTitle';

import type { ComponentDocsT } from '../../pages/ComponentDoc/types';

const componentDocs: ComponentDocsT = [
  cardDoc,
  cardActionsDoc,
  cardBlockDoc,
  cardDividerDoc,
  cardFooterDoc,
  cardImageDoc,
  cardStatusDoc,
  cardTitleDoc
];

export default componentDocs;
