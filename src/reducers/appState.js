import * as actions from '../actions/actions';

const initialState= {
  isFetchingSeed : false,
  isFetchingFonts : false,
  fontsLibrary : {},
  activeFonts : {
    header : {
      family : 'Droid Serif',
      variant : 'regular',
      availableVariants : ['regular','italic','700','700italic'],
      category: 'serif',
      size : 100,
      locked : false
    },
    subheader : {
      family : 'Droid Serif',
      variant : '700',
      availableVariants : ['regular','italic','700','700italic'],
      category : 'serif',
      size : 100,
      locked : false
    },
    paragraph : {
      family : 'Droid Sans',
      variant : 'regular',
      availableVariants : ['regular','700'],
      category : 'sans-serif',
      size : 100,
      locked: false
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
      available : ['sans-serif', 'serif', 'handwriting', 'monospace', 'display'],
      header : 'serif',
      subheader : 'serif',
      paragraph : 'sans-serif'
    },
  },
  sizes : [50, 100, 200, 300, 400, 500],
  categories : ['sans-serif', 'serif', 'handwriting', 'monospace', 'display']
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
      return { ...state, isFetchingFonts : action.isFetchingFonts};

    case actions.NEW_FONTS_SUCCESSFUL:
      return { ...state, isFetchingFonts : action.isFetchingFonts};

    case actions.TOGGLE_LOCK:
      return {
        ...state,
        activeFonts : {
          ...state.activeFonts,
          [action.element]: {
            ...state.activeFonts[action.element],
            locked: !state.activeFonts[action.element].locked
          }
        }
      }

    case actions.UPDATE_ACTIVE_FONT:
      return {
        ...state,
        activeFonts : {
          ...state.activeFonts,
          [action.element] : {
            ...state.activeFonts[action.element],
            [action.updateType] : action.option
          }
        }
      }

    default:
      return state;
  }
}