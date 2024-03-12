/*Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/

function computeSumAndProduct(numbers) {
    const sumFunc = (x, y) => x + y;
    const productFunc = (x, y) => x * y;
  
    const sumResult = numbers.reduce(sumFunc, 0);
    const productResult = numbers.reduce(productFunc, 1);
  
    return { sum: sumResult, product: productResult };
  }
  
  const numbersArray = [1, 2, 3, 4];
  const { sum, product } = computeSumAndProduct(numbersArray);
  
  console.log(`The sum is ${sum}.`);
  console.log(`The product is ${product}.`);