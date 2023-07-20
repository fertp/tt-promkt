import { FC } from 'react';
import { useCardContext } from '../hooks/useCardContex';

interface CardInfoProps {
  title: string;
  info: string[];
}

export const CardInfo: FC<CardInfoProps> = ({ title, info }) => {
  const { showInfo } = useCardContext();

  return (
    <>
      {showInfo && (
        <div className="absolute w-full h-full bg-gradient-to-b from-[#00000000] to-black"></div>
      )}
      <div className="absolute bottom-[10px] left-[13px] lg:left-[8px] text-white">
        <h2
          className={`${
            showInfo ? 'block' : 'hidden lg:group-hover/card:block'
          } text-[10px] font-bold leadnig-[14px] lg:text-base`}
        >
          {title}
        </h2>
        {showInfo && (
          <>
            <div className="flex flex-wrap gap-1 mt-[6px]">
              {info.map((datum) => (
                <p
                  key={datum}
                  className="inline-block p-[2px] rounded-md bg-[#FBBF2433] bg-opacity-20 text-primary-100 font-bold text-[8px] lg:text-[12px]"
                >
                  {datum}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
