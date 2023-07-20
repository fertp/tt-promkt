import { Card as HOC } from './Card';
import { CardInfo } from './components/CardInfo';
import { CardSlot } from './components/CardSlot';

export const Card = Object.assign(HOC, {
  Info: CardInfo,
  Slot: CardSlot,
});
