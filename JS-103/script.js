function getSum1(num1, num2) {
    var total = num1 + num2;
    return total;
  }
  
  // ------------------------------
  
  // function expression - Anonymus
  var getSum2 = function(num1, num2) {
      var total = num1 + num2;
      return total;
  };
  
  console.log(getSum2(10,20));
  getSum2(10,20);
  console.log(getSum2);
  
  // ------------------------------
  
  // assign function to another variable
  var sum1 = getSum2;
  console.log(sum1(100,200));
  (function () {
    console.log('Welcome to Immediately invoked function expression (IIFE)');
  }());