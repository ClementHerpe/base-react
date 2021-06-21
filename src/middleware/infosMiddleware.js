import axios from 'axios';
import {
  FETCH_GENERAL_INFOS,
  saveInfos,
} from '../actions/infos';

const infosMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case FETCH_GENERAL_INFOS:
      axios.get("https://www.hotel-lembarcadere.fr/wp-json/wp/v2/pages")
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveInfos(response.data));
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default infosMiddleware;
