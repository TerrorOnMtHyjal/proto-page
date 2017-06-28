import * as actions from '../actions/actions';

const initialState= {
  isFetchingSeed : false,
  fontsLibrary : {},
  activeFonts : {
    header : 'Droid Serif',
    subheader : 'Droid Serif',
    paragraph : 'Droid Sans'
  },
  isLocked : {
    headers : false,
    header : false,
    subheader : false,
    paragraph : false
  }
}

export default function appState(state=initialState, action){
  switch (action.type){
    case actions.SEED_FONTS_REQUESTED:
      return { ...state, isFetchingSeed : action.isFetchingSeed};
    case actions.SEED_FONTS_SUCCESSFUL:
      return { ...state, isFetchingSeed : action.isFetchingSeed, fontsLibrary : action.fontsLibrary};
    default:
      return state;
  }
}