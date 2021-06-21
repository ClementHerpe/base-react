export const FETCH_GENERAL_INFOS = 'FETCH_GENERAL_INFOS';
export const SAVE_INFOS = 'SAVE_INFOS';

export const fetchGeneralInfos = () => ({
  type: FETCH_GENERAL_INFOS,
});
export const saveInfos = (infos) => ({
    type: SAVE_INFOS,
    infos,
  });