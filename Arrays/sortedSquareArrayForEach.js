// using forEach

const sortArray = (n) => {
  let squares = [];
  n.forEach((x) => squares.push(x * x));
  let result = squares.sort((a, b) => a - b);
  return result;
};
console.log(sortArray([-4, -1, 0, 3, 10]));
