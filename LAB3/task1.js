function greet(name, callback) {
    return callback(`Hello, ${name}!`);
  }
const result = greet("Navya", (message) => message);
  console.log(result); 
  