function processPaymentFlow(user, paymentMethod, amount) {
    if (!user.isAuthenticated) return console.log("Authentication failed");
    if (!paymentMethod.isValid) return console.log("Invalid payment method");
    if (amount <= 0) return console.log("Payment failed");
  
    user.balance -= amount;
    console.log(`Email to ${user.email}: Payment processed successfully`);
    console.log("Notification sent");
  }
  
  const user = { isAuthenticated: true, email: "navyanampalli.com", balance: 100 };
  const paymentMethod = { isValid: true };
  const amount = 50;
  
  processPaymentFlow(user, paymentMethod, amount);
  