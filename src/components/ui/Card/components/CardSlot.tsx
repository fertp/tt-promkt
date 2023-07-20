import React, { CSSProperties, FC, MouseEvent } from 'react';

interface CardSlotProps {
  children: React.ReactNode;
  role?: string;
  ariaLabel?: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  style?: CSSProperties;
  onClick?: (e: MouseEvent) => void;
}

const positionStyleMap = {
  'top-left': 'top-[10px] left-[13px] lg:left-[8px]',
  'top-right': 'top-[10px] right-[13px] lg:right-[8px]',
  'bottom-left': 'bottom-[10px] left-[13px] lg:left-[8px]',
  'bottom-right': 'bottom-[10px] right-[13px] lg:right-[8px]',
};

export const CardSlot: FC<CardSlotProps> = ({
  children,
  role = 'generic',
  ariaLabel,
  position,
  className = '',
  style = {},
  onClick,
}) => {
  return (
    <div
      role={role}
      aria-label={ariaLabel}
      className={`absolute ${positionStyleMap[position]} inline-flex justify-center items-center h-[20px] lg:h-[24px] min-w-[20px] lg:min-w-[24px] p-[2px] box-border rounded-md bg-[#010101] opacity-80 ${className}`}
      style={style}
      onClick={(e) => {
        if (onClick !== undefined) {
          onClick(e);
        }
      }}
    >
      {children}
    </div>
  );
};
