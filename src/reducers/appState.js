import * as actions from '../actions/actions';

const initialState= {
  isFetchingSeed : false,
  isFetchingFonts : false,
  fontsLibrary : {},
  activeFonts : {
    header : {
      family : 'Droid Serif',
      variant : 'regular',
      availableVariants : ['regular','italic','700','700italic']
    },
    subheader : {
      family : 'Droid Serif',
      variant : 'regular',
      availableVariants : ['regular','italic','700','700italic']
    },
    paragraph : {
      family : 'Droid Sans',
      variant : 'regular',
      availableVariants : ['regular','700']
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
    case actions.UPDATE_VARIANT:
      const updatedState = {...state};
      updatedState.activeFonts[action.element].variant = action.variant;
      return { ...updatedState };
    case actions.NEW_FONTS_REQUESTED:
      return { ...state, isFetchingFonts : action.isFetchingFonts};
    case actions.NEW_FONTS_SUCCESSFUL:
      return { ...state, isFetchingFonts : action.isFetchingFonts};
    case actions.TOGGLE_LOCK:
      const updatedControls = {...state.controls};
      updatedControls.isLocked[action.lockToToggle] = !updatedControls.isLocked[action.lockToToggle];
      return {...state, controls : updatedControls };
    default:
      return state;
  }
}