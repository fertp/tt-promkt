import { FC } from 'react';

interface Props {
  className?: string;
}

export const ChevronDownIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12_246)">
        <path
          d="M8.89745 16.25C8.57761 16.25 8.2576 16.1279 8.01385 15.8838L0.513855 8.38379C0.0255737 7.89551 0.0255737 7.10449 0.513855 6.61621C1.00214 6.12793 1.79315 6.12793 2.28143 6.61621L8.89745 13.2344L15.5146 6.61719C16.0029 6.12891 16.7939 6.12891 17.2822 6.61719C17.7705 7.10547 17.7705 7.89648 17.2822 8.38477L9.78221 15.8848C9.53807 16.1289 9.21776 16.25 8.89745 16.25Z"
          // fill={className}
          className={className}
        />
      </g>
      <defs>
        <clipPath id="clip0_12_246">
          <rect
            width="17.5"
            height="20"
            // fill="white"
            transform="translate(0.147461)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
