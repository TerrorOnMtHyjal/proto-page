import WebFont from 'webfontloader';

export const SEED_FONTS = 'SEED_FONTS';
export const SEED_FONTS_REQUESTED = 'SEED_FONTS_REQUESTED';
export const SEED_FONTS_SUCCESSFUL = 'SEED_FONTS_SUCCESSFUL';
export const SEED_FONTS_ERROR = 'SEED_FONTS_ERROR';

export const UPDATE_FONTS = 'UPDATE_FONTS';

export const APPLY_FONTS = 'APPLY_FONTS';
export const NEW_FONTS_REQUESTED = 'NEW_FONTS_REQUESTED';
export const NEW_FONTS_SUCCESSFUL = 'NEW_FONTS_SUCCESSFUL';

export const TOGGLE_LOCK = 'TOGGLE_LOCK';

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
  const { activeFonts } = getState();
  
  WebFont.load({
    loading: function() {
      dispatch(newFontsRequested());
    },
    active: function() {
      dispatch(newFontsSuccessful());
    },
    google: {
      families: [activeFonts.header.family, activeFonts.subheader.family, activeFonts.paragraph.family]
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
  const currentState = getState();
  const locks = currentState.controls.isLocked;
  const newFonts = {};

  for (let element in locks) {
    if(!locks[element]){
      const newFont = getRandomFont(currentState.fontsLibrary[currentState.controls.categories[element]]);
      newFonts[element] = {
        family : newFont.family,
        variant : 'regular'
      }
    } else {
      newFonts[element] = currentState.activeFonts[element];
    }
  }

  dispatch(updateFonts(newFonts));
  dispatch(applyFonts());
};

function updateFonts(newFonts){
  return {
    type : UPDATE_FONTS,
    newFonts
  }
};

function getRandomFont(category){
  return category[Math.floor(Math.random()*category.length)];
}

export const toggleLock = (lockToToggle) => {
  return {
    type: TOGGLE_LOCK,
    lockToToggle
  }
};