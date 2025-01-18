function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  const fib = fibonacci();
  console.log(fib.next().value);  
  console.log(fib.next().value);  
  console.log(fib.next().value); 
  console.log(fib.next().value); 
  console.log(fib.next().value);  
  