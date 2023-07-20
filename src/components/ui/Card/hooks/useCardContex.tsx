import { useContext } from 'react';
import { CardContext } from '../Card';

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (Object.keys(context).length === 0) {
    throw new Error(`useCardContext Should be used into CardContext Provider`);
  }

  return context;
};
