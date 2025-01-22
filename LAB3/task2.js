function multiplyByTwo(num, callback) {
    callback(num * 2);
  }
  
  function subtractThree(num, callback) {
    callback(num - 3);
  }
  
  function addTen(num, callback) {
    callback(num + 10);
  }
  
  function processNumber(num) {
    multiplyByTwo(num, (result) =>
      subtractThree(result, (result) =>
        addTen(result, (result) => console.log(`Final Result: ${result}`))
      )
    );
  }
  processNumber(6); 
  