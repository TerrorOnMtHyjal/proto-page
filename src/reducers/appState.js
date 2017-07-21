import * as actions from '../actions/actions';

const initialState= {
  isFetchingSeed : false,
  isFetchingFonts : false,
  fontsLibrary : {},
  activeFonts : {
    header : {
      family : 'Montserrat',
      variant : '600',
      availableVariants : ['100','100italic','200','200italic','300','300italic','regular','italic','500','500italic','600','600italic','700','700italic','800','800italic','900','900italic'],
      category: 'sans-serif',
      size : 100,
      locked : false
    },
    subheader : {
      family : 'Montserrat',
      variant : 'regular',
      availableVariants : ['100','100italic','200','200italic','300','300italic','regular','italic','500','500italic','600','600italic','700','700italic','800','800italic','900','900italic'],
      category : 'sans-serif',
      size : 100,
      locked : false
    },
    paragraph : {
      family : 'Roboto Slab',
      variant : 'regular',
      availableVariants : ['100','300','regular','700'],
      category : 'serif',
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
  sizes : [50, 100, 150, 200, 300],
  categories : ['sans-serif', 'serif', 'handwriting', 'monospace', 'display'],
  popular : false
}

export default function appState(state=initialState, action){
  switch (action.type){
    
    case actions.SEED_FONTS_REQUESTED:
      return { ...state, isFetchingSeed : action.isFetchingSeed};

    case actions.SEED_FONTS_SUCCESSFUL:
      return { ...state, isFetchingSeed : action.isFetchingSeed, fontsLibrary : action.fontsLibrary};

    case actions.NEW_FONTS_REQUESTED:
      return { ...state, isFetchingFonts : action.isFetchingFonts};

    case actions.NEW_FONTS_SUCCESSFUL:
      return { ...state, isFetchingFonts : action.isFetchingFonts};

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

    case actions.REPLACE_ACTIVE_FONTS:
      return {
        ...state,
        activeFonts : {
          ...state.activeFonts,
          ...action.newFonts
        }
      }
    
    case actions.TOGGLE_POPULAR:
      return {
        ...state, popular : action.bool
      }

    default:
      return state;
  }
}