import WebFont from 'webfontloader';

export const SEED_FONTS = 'SEED_FONTS';
export const SEED_FONTS_REQUESTED = 'SEED_FONTS_REQUESTED';
export const SEED_FONTS_SUCCESSFUL = 'SEED_FONTS_SUCCESSFUL';
export const SEED_FONTS_ERROR = 'SEED_FONTS_ERROR';
export const UPDATE_FONTS = 'UPDATE_FONTS';
export const UPDATE_VARIANT = 'UPDATE_VARIANT';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const APPLY_FONTS = 'APPLY_FONTS';
export const NEW_FONTS_REQUESTED = 'NEW_FONTS_REQUESTED';
export const NEW_FONTS_SUCCESSFUL = 'NEW_FONTS_SUCCESSFUL';
export const TOGGLE_LOCK = 'TOGGLE_LOCK';
export const UPDATE_ACTIVE_FONT = 'UPDATE_ACTIVE_FONT';
export const REPLACE_ACTIVE_FONTS = 'REPLACE_ACTIVE_FONTS';

export const seedFonts = () => (dispatch) => {
  dispatch(seedFontsRequested());

  return fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAoq2H7SrmQO7EeyXNvdwYWXHYYM4Xh0Ms&sort=popularity")
    .then(response => {
      if(!response.ok){
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(fonts => {
      const fontsLibrary = {};

//move this logic into reducer
      fonts.items.forEach(font => {
        if(!fontsLibrary[font.category]){
          fontsLibrary[font.category] = [];
        }

        fontsLibrary[font.category].push(
          {
            family : font.family,
            variants : font.variants
          }
        )
      });
      dispatch(seedFontsSuccessful(fontsLibrary));  
    })
    .catch(err => {
      dispatch(seedFontsError(err));
    });
};

export const updateActiveFont = (option, element, updateType) => ({
  type : UPDATE_ACTIVE_FONT,
  option,
  updateType,
  element
});

function seedFontsRequested() {
  return {
    type : SEED_FONTS_REQUESTED,
    isFetchingSeed : true
  };
}

function seedFontsSuccessful(fontsLibrary) {
  return {
    type : SEED_FONTS_SUCCESSFUL,
    isFetchingSeed : false,
    fontsLibrary
  };
}

function seedFontsError(err) {
  return {
    type : SEED_FONTS_ERROR,
    isFetchingSeed : false,
    err
  };
}

export const applyFonts = () => (dispatch, getState) => {
  const { header, subheader, paragraph } = getState().appState.activeFonts;

  WebFont.load({
    classes : false,
    loading: function() {
      dispatch(newFontsRequested());
    },
    active: function() {
      dispatch(newFontsSuccessful());
    },
    google: {
      families: [`${header.family}:${header.availableVariants.join()}`, `${subheader.family}:${subheader.availableVariants.join()}`, `${paragraph.family}:${paragraph.availableVariants.join()}`]
    }
  });
}

function newFontsRequested(){
  return {
    type : NEW_FONTS_REQUESTED,
    isFetchingFonts : true
  }
}

function newFontsSuccessful(){
  return {
    type : NEW_FONTS_SUCCESSFUL,
    isFetchingFonts : false
  }
}

export const randomizeFonts = () => (dispatch, getState) => {
  const {activeFonts, fontsLibrary} = getState().appState;
  const newFonts = {};

  for(let element in activeFonts){
    const currentElement = activeFonts[element];

    if(!currentElement.locked){
      const newFont = getRandomFont(fontsLibrary[currentElement.category]);

      newFonts[element] = {
        family : newFont.family,
        variant : 'regular',
        availableVariants : newFont.variants,
        category: currentElement.category,
        size : 100,
        locked : false
      }
    }
  }

  dispatch(replaceActiveFonts(newFonts));
  dispatch(applyFonts());
}

function replaceActiveFonts(newFonts){
  return {
    type : REPLACE_ACTIVE_FONTS,
    newFonts
  }
}

function getRandomFont(category){
  return category[Math.floor(Math.random()*category.length)];
}