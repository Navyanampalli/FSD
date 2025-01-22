function fetchDataWithCallback(success, callback) {
    setTimeout(() => {
      callback(success ? null : "Failed to fetch data", success ? { message: "Data fetched successfully!" } : null);
    }, 2000);
  }
  
  // Test success
  fetchDataWithCallback(true, (error, data) => console.log(error || data));
  
  // Test failure
  fetchDataWithCallback(false, (error, data) => console.log(error || data));
  