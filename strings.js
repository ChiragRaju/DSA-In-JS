const isValidAnagram = (s, b) => {
    if (s.length !== b.length) {
      return false;
    }
     s = s.split("").sort().join("");
     b = b.split("").sort().join("");
    return s === b;
  };
  
  console.log(isValidAnagram("listen", "silent")); // true
  console.log(isValidAnagram("hello", "world")); // false
  