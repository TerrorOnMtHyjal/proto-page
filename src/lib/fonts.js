//ELI: what's a better way to call this?
var WebFont = require('webfontloader');


const fonts = {
  seed : function (){
    fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAoq2H7SrmQO7EeyXNvdwYWXHYYM4Xh0Ms&sort=popularity")
    .then(response => {
      if(response.status !== 200){
        console.log('Oops! Status Code: ', response.status);
        return;
      }
      response.json()
      .then(data => {
        const fontsLibrary = {};
        data.items.forEach(item => {
          if(!fontsLibrary[item.category]){
            fontsLibrary[item.category] = [];
          }

          fontsLibrary[item.category].push(
            {
              family : item.family,
              variants : item.variants
            }
          )
        });
        console.log(fontsLibrary)
        return fontsLibrary;
      });
    })
    .catch(err => {
      console.log('Fetch Error: ', err);
    });
  },

  //get initial fonts for page load
  getInitial : function(){
    console.log("initial get!");
  },

  //get new randomized fonts
  getNew : function(){
    console.log("new fonts get!");
  }
};

export default fonts;

