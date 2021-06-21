import { SAVE_INFOS } from '../actions/infos';

export const initialState = {
  infos: [],
};

const infos = (state = initialState, action = {}) => {
  switch (action.type) {
    // Action to get a direct import of all our recipes
    case SAVE_INFOS:
      console.log('save infos');
      console.log(action.infos);
      return {
        ...state,
        infos: action.infos,
      };
    default:
      return state;
  }
};

export default infos;
