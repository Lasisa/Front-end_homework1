

// 1.

function printEvenNumbersDescending(num1, num2) {
    const start = Math.max(num1, num2)
    const end = Math.min(num1, num2)

    for(let i = start; i>= end; i--) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
printEvenNumbersDescending(10, 3)




// 2.

function power(base, exponent = 2) {
    return Math.pow(base, exponent)
  }

  console.log(power(2, 3))
  console.log(power(5))
  


// 3.

function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  
  console.log(sumNumbers(5))
  console.log(sumNumbers(10))
  

// 4.

function sumEvenOddNumbers(n, m) {
    let sumEven = 0;
    let sumOdd = 0;
  
    for (let i = n; i <= m; i++) {
      if (i % 2 === 0) {
        sumEven += i;
      } else {
        sumOdd += i;
      }
    }
  
    console.log("Сумма четных чисел:", sumEven);
    console.log("Сумма нечетных чисел:", sumOdd);
  }
  
  sumEvenOddNumbers(1, 10)
  
  sumEvenOddNumbers(5, 15)
  

// 5.

function findLongestString(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    let longestString = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longestString.length) {
        longestString = arr[i];
      }
    }
  
    return longestString;
  }
  

  const strings = ['one', 'two', 'three']
  console.log(findLongestString(strings))
  
  const emptyArray = [];
  console.log(findLongestString(emptyArray))
  
















