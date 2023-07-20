import { MouseEvent, createContext, useReducer } from 'react';
import { LARGE_SCREEN_BREAKPOINT } from './constants';
import { Button } from '../Button';
import { CardInfo } from './components/CardInfo';
import { CardSlot } from './components/CardSlot';
import { cardReducer, initialState } from './cardReducer';

interface CardProps {
  /** Determines if the Card is disabled or not. */
  disabled: boolean;

  /** The background image of the card */
  image?: string;

  /** The text to display on the action button. */
  actionButtonText: string;

  /** A callback function to handle the action button click event. */
  onClick?: () => void;

  /** A function that renders the content of the Card */
  children: (params: {
    /** Indicates whether the action button is visible */
    showActionButton: boolean;

    /** Indicates whether additional information is visible. */
    showInfo: boolean;

    /** Function to toggle the visibility of additional information. */
    toggleInfo: (e: MouseEvent) => void;
  }) => JSX.Element;
}

interface CardContext {
  disabled: CardProps['disabled'];
  showActionButton: boolean;
  showInfo: boolean;
}

export const CardContext = createContext({} as CardContext);

/**
 * A Card component with optional image, action button, and additional information.
 *
 * @component
 *
 * @param {CardProps} props - The component props.
 *
 * @returns {JSX.Element} The rendered Card component.
 */
export const Card = ({
  children,
  disabled,
  image,
  actionButtonText,
  onClick,
}: CardProps) => {
  const [{ showActionButton, showInfo }, dispatch] = useReducer(
    cardReducer,
    initialState
  );

  const handleCardClick = () => {
    if (window.innerWidth > LARGE_SCREEN_BREAKPOINT) return;
    dispatch({ type: 'toggleActionButton' });
  };

  const toggleInfo = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'toggleInfo' });
  };

  return (
    <CardContext.Provider
      value={{
        disabled,
        showActionButton,
        showInfo,
      }}
    >
      <article
        className="group/card relative w-[130px] h-[120px] rounded-lg lg:w-[249px] lg:h-[200px] lg:rounded-2xl overflow-hidden"
        onClick={handleCardClick}
      >
        {image && (
          <div
            className={`absolute w-full h-full bg-center bg-no-repeat bg-cover`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}

        {disabled ? (
          <div className="absolute w-full h-full grid place-items-center bg-black bg-opacity-60">
            <Button disabled variant="contained" color="accent" size="sm">
              NO DISPONIBLE
            </Button>
          </div>
        ) : (
          <>
            {children({
              showInfo,
              showActionButton,
              toggleInfo,
            })}

            {!showInfo && (
              <div
                className={`${
                  showActionButton ? 'block' : 'hidden lg:group-hover/card:grid'
                } absolute w-full h-full grid place-items-center bg-gradient-to-b from-[#00000000] to-black`}
              >
                <Button
                  color="accent"
                  variant="contained"
                  size="sm"
                  className="bg-opacity-60"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onClick !== undefined) {
                      onClick();
                    }
                  }}
                >
                  {actionButtonText}
                </Button>
              </div>
            )}
          </>
        )}
      </article>
    </CardContext.Provider>
  );
};

Card.Info = CardInfo;
Card.Slot = CardSlot;
