// program to get a random item from an array

function getRandomItem (arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random
    const item = arr[randomIndex];

    return item;
  }

  const arrayNumeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const arrayAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const arraySpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '~', '`'];

  const result = getRandomItem(array);
  console.log(result);