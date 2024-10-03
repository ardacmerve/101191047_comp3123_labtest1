


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (arr) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject(new Error('Input must be an array'));
    } else {
      const filteredArray = arr.filter((item) => typeof item === 'string');
      const lowerCaseArray = filteredArray.map((str) => str.toLowerCase());
      resolve(lowerCaseArray);
    }
  });
};

lowerCaseWords(mixedArray)
  .then((result) => console.log(result)) 
  .catch((error) => console.error(error));