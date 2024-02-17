

const isPalindrome = (x) => {
  return x === +x.toString().split("").reverse().join("");
};
const res = isPalindrome(121);
console.log(res);//true

const fib = (n) => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};
const res1 = fib(9);
console.log(res1); //34 

//using recursion 
 const fibb=(n)=>{
    if(n<=1){
        return n;
    }
    return fibb(n-1)+fibb(n-2);
 }

 console.log(fibb(9));//34 


