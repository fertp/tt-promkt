import { FC } from 'react';
import type { ButtonProps } from './Buton';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { VectorIcon } from './icons/VectorIcon';
import { variants } from './constants';

interface Props {
  disabled: ButtonProps['disabled'];
  size: ButtonProps['size'];
  color: ButtonProps['color'];
  variant: ButtonProps['variant'];
}

const iconColorMap = {
  primary: 'fill-primary-100',
  accent: 'fill-accent-100',
  disabled: 'fill-neutral-200',
};

const iconSizeMap = {
  sm: 'w-3 h-3',
  lg: 'w-5 h-5',
};

/**
 * ButtonIcon component renders an icon inside a button.
 *
 * @param {Props} props - The props for the ButtonIcon component.
 * @returns {JSX.Element} A React JSX element representing the ButtonIcon.
 */
export const ButtonIcon: FC<Props> = ({ disabled, size, color, variant }) => {
  const iconColor = disabled ? iconColorMap.disabled : iconColorMap[color];

  return (
    <span className={`${iconSizeMap[size]} flex items-center justify-center`}>
      {variant === variants.ONLY_ICON ? (
        <ChevronDownIcon className={iconColor} />
      ) : (
        <VectorIcon className={iconColor} />
      )}
    </span>
  );
};
