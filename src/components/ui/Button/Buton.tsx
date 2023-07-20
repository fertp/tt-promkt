import { CSSProperties, FC, MouseEvent } from 'react';
import { ButtonIcon } from './ButtonIcon';
import { variants } from './constants';

export type ButtonProps = ButtonWithChildren | ButtonWithOnlyIcon;

interface DefaultProps {
  /** aria-label attribute for accesibility */
  ariaLabel?: string;

  /** Size of the button. */
  size: 'sm' | 'lg';

  /** Color variant of the button. */
  color: 'primary' | 'accent';

  /** The type of the button (e.g., 'button', 'reset', or 'submit'). @default 'button' */
  type?: 'button' | 'reset' | 'submit';

  /** Determines if the button is disabled. */
  disabled?: boolean;

  /** Custom CSS class name for the button. */
  className?: string;

  /** Custom CSS inline properties for the button. */
  style?: CSSProperties;

  /** Callback function to be executed when the button is clicked. */
  onClick?: (e: MouseEvent) => void | (() => void);
}

interface ButtonWithOnlyIcon extends DefaultProps {
  variant: typeof variants.ONLY_ICON;
  ariaLabel: string;
  children?: never;
}

interface ButtonWithChildren extends DefaultProps {
  variant: Exclude<Variants, typeof variants.ONLY_ICON>;
  children: string;
}

type Variantkeys = keyof typeof variants;
type Variants = (typeof variants)[Variantkeys];

const buttonColorsMap = {
  primary: {
    filled:
      'bg-primary-900 text-primary-100 hover:bg-primary-500 active:bg-primary-500 border-[1px] active:border-solid active:border-primary-900 active:shadow-active-button',
    outlined:
      'bg-white border-2 border-solid border-primary-900 text-primary-900 hover:bg-primary-100 active:bg-primary-500 active:text-primary-100',
  },
  accent: {
    filled:
      'bg-accent-900 text-accent-100 hover:bg-accent-500 active:bg-accent-500 border-[1px] active:border-solid active:border-accent-900 active:shadow-active-button',
    outlined:
      'bg-white border-2 border-solid border-accent-900 text-accent-900 hover:bg-accent-100 active:bg-accent-500 active:text-accent-100',
  },
  disabled: {
    filled: 'bg-neutral-100 text-neutral-200',
    outlined:
      'bg-white border-2 border-solid border-neutral-200 text-neutral-200',
  },
};

const buttonSizeMap = {
  sm: 'px-[18px] py-2 rounded-lg text-[10px]',
  lg: 'px-8 py-3 rounded-xl text-xl',
};

/**
 * Button component.
 * @component
 * @example
 *  <Button variant="contained" color="primary" size="lg">
 *    BUTTON
 *  </Button>
 * @param {ButtonProps} props - The component props.
 * @returns {JSX.Element} A React JSX element representing the Button component.
 */
export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  ariaLabel,
  color,
  size,
  disabled,
  variant,
  className = '',
  style = {},
  onClick,
}) => {
  const colorkey = disabled ? 'disabled' : color;
  const colorVariant = variant === 'outlined' ? 'outlined' : 'filled';
  const colorVariantToApply = buttonColorsMap[colorkey][colorVariant];

  const hasIcon = (
    [variants.ONLY_ICON, variants.ICON_LEFT, variants.ICON_RIGHT] as string[]
  ).includes(variant);

  const buttonFlexDirection =
    variant === variants.ICON_RIGHT ? 'flex-row-reverse' : 'flex-row';

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={`${colorVariantToApply} ${buttonFlexDirection} ${buttonSizeMap[size]} flex items-center gap-[6px] leading-button font-bold ${className}`}
      style={style}
      onClick={onClick}
    >
      {hasIcon && (
        <ButtonIcon
          disabled={disabled}
          size={size}
          color={color}
          variant={variant}
        />
      )}
      {variant !== variants.ONLY_ICON && children}
    </button>
  );
};
