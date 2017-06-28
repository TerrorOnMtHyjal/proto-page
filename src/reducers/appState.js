import * as actions from '../actions/actions';

const initialState= {
  isFetchingSeed : false,
  isFetchingFonts : false,
  fontsLibrary : {},
  activeFonts : {
    header : {
      family : 'Droid Serif',
      variant : 'regular'
    },
    subheader : {
      family : 'Droid Serif',
      variant : 'regular'
    },
    paragraph : {
      family : 'Droid Sans',
      variant : 'regular'
    }
  },
  controls : {
    headersSynced : false,
    isLocked : {
      header : false,
      subheader : false,
      paragraph : false
    },
    categories: {
      header : 'serif',
      subheader : 'serif',
      paragraph : 'sans-serif'
    }
  }
}

export default function appState(state=initialState, action){
  switch (action.type){
    case actions.SEED_FONTS_REQUESTED:
      return { ...state, isFetchingSeed : action.isFetchingSeed};
    case actions.SEED_FONTS_SUCCESSFUL:
      return { ...state, isFetchingSeed : action.isFetchingSeed, fontsLibrary : action.fontsLibrary};
    case actions.UPDATE_FONTS:
      return { ...state, activeFonts : action.newFonts};
    case actions.NEW_FONTS_REQUESTED:
      return { ...state, isFetchingFonts : action.isFetchingFonts}
    case actions.NEW_FONTS_SUCCESSFUL:
      return { ...state, isFetchingFonts : action.isFetchingFonts}
    default:
      return state;
  }
}