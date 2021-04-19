import { POVEĆAJ_UKUPNO, RESETIRAJ_UKUPNO } from "./akcije";
function reducer(state, action) {
  if (action.type === POVEĆAJ_UKUPNO) {
    return { ...state, trofeji: state.trofeji + 1 };
  }
  if (action.type === RESETIRAJ_UKUPNO) {
    return { ...state, trofeji: state.trofeji * 0 };
  }
  return state;
}

export default reducer;
