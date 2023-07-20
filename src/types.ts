export interface Game {
  disabled: boolean;
  info: {
    moodBonus: boolean;
    rtp: string;
    version: number;
  };
  name: string;
  src: string;
  supplier: 'PragmaticPlay' | 'Evoplay' | 'PlayTech' | 'Spinomenal';
}
