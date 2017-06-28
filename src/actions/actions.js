const WebFont = require('webfontloader');

export const SEED_FONTS = 'SEED_FONTS';
export const SEED_FONTS_REQUESTED = 'SEED_FONTS_REQUESTED';
export const SEED_FONTS_SUCCESSFUL = 'SEED_FONTS_SUCCESSFUL';
export const SEED_FONTS_ERROR = 'SEED_FONTS_ERROR';

export const APPLY_INITIAL_FONTS = 'APPLY_INITIAL_FONTS';

export const seedFonts = () => (dispatch) => {
  dispatch(seedFontsRequested());

  fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAoq2H7SrmQO7EeyXNvdwYWXHYYM4Xh0Ms&sort=popularity")
    .then(response => {
      if(!response.ok){
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(fonts => {
      const fontsLibrary = {};

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

export const applyFonts = (header, subheader, paragraph) => {
  WebFont.load({
    google: {
      families: [header.family, subheader.family, paragraph.family]
    }
  });

  return {
    type: APPLY_INITIAL_FONTS
  };
}