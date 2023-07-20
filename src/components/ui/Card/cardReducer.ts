interface InitialState {
  showActionButton: boolean;
  showInfo: boolean;
}

type Action = { type: 'toggleInfo' } | { type: 'toggleActionButton' };

export const initialState = {
  showActionButton: false,
  showInfo: false,
};

export const cardReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case 'toggleActionButton':
      return {
        showActionButton: !state.showActionButton,
        showInfo: false,
      };

    case 'toggleInfo':
      return {
        showInfo: !state.showInfo,
        showActionButton: false,
      };

    default:
      throw new Error(`Invalid action type`);
  }
};
