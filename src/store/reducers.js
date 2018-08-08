import { LAMAS_INITIAL_STATE } from './initial-state';

export const lamasReducer = (state = LAMAS_INITIAL_STATE, action) => {
  if (action.type === "LAMAS/LOAD") {
    console.log("LOAD", state, action);
    return {
      ...state,
      detail: state.list.find(lama => lama.id === action.id) || null
    };
  }

  if (action.type === "LAMAS/ADD") {
    return {
      ...state,
      list: [...state.list, action.lama]
    };
  }

  if (action.type === "LAMAS/UPDATE") {
    const updatedLama = {
      ...action.lama
    };

    return {
      list: state.list.map(lama => {
        if (lama.id === action.lama.id) {
          return updatedLama;
        }

        return lama;
      }),
      detail: updatedLama
    };
  }

  if (action.type === "LAMAS/REMOVE") {
    return {
      list: state.list.filter(lama => lama.id !== action.id),
      detail: state.detail && state.detail.id === action.id ? null : state.detail
    };
  }

  return state;
};
