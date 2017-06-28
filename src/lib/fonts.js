export default function seedFonts(){
  fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAoq2H7SrmQO7EeyXNvdwYWXHYYM4Xh0Ms&sort=popularity")
  .then(response => {
    if(response.status !== 200){
      console.log('Oops! Status Code: ', response.status);
      return;
    }

    response.json()
    .then(data => {
      
    });
  })
  .catch(err => {
    console.log('Fetch Error: ', err);
  });
}

