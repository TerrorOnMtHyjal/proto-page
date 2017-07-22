//Formats string for proper capitalization and spacing in the menu.
export const formatOption =  option => {
  let formattedOption = option;

  if(typeof option === 'string'){
    let tempFormat = option.replace(/(\d+)/g, (_, num) => {
      return ' ' + num + ' ';
    }).trim();
    formattedOption = tempFormat.replace(/(\b[a-z](?!\s))/g, x => x.toUpperCase());
  }

  if(typeof option === 'number'){
    formattedOption += "%";
  }
  
  return formattedOption;
}