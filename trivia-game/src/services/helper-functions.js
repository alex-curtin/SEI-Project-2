
export const shuffle = (array) => {
  let currentIndex = array.length;
  let tempValue;
  let randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return array;
}

export const fixCategoryName = (name) => {
  let fixed = name.replace('Entertainment: ', '').replace('Science: ', '');
  return fixed;
}

export const convertSpecialCharacters = (str) => {
  const fixed = str.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&percnt/g, '%').replace(/&num/g, '#').replace(/&dollar/g, '$').replace(/&micro/g, 'µ');
  return fixed;
}