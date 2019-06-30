
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
  let fixed = name.replace('Entertainment: ', '')
  return fixed;
}