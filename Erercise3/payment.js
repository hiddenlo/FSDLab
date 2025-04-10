<!DOCTYPE html>
    <html>
    <head>
      <title>Payment Processing System</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 50px;
          background-color: #f4f4f4;
        }
        form {
          background: white;
          padding: 20px;
          max-width: 400px;
          border-radius: 10px;
          box-shadow: 0 0 10px #aaa;
        }
        input {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        button {
          padding: 10px 20px;
          background-color: #28a745;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #218838;
        }
      </style>
    </head>
    <body>
    
    <h2>💳 Payment Portal</h2>
    
    <form onsubmit="event.preventDefault(); handlePayment();">
      <label>Username:</label>
      <input type="text" id="username" required>
    
      <label>Password:</label>
      <input type="password" id="password" required>
    
      <label>Card Number:</label>
      <input type="text" id="card" required maxlength="16">
    
      <label>Amount (₹):</label>
      <input type="number" id="amount" required>
    
      <label>Email:</label>
      <input type="email" id="email" required>
    
      <button type="submit">Make Payment</button>
    </form>
    <script>
      // Step 1: Authenticate user
      function authenticateUser(user, callback) {
        setTimeout(() => {
          if (user.username === "john" && user.password === "1234") {
            callback(null, user);
          } else {
            callback("Authentication failed", null);
          }
        }, 500);
      }
    
      // Step 2: Verify payment method
      function verifyPaymentMethod(card, callback) {
        setTimeout(() => {
          if (card.length === 16) {
            callback(null, true);
          } else {
            callback("Invalid card number", null);
          }
        }, 500);
      }
      // Step 3: Process payment
      function processPayment(amount, callback) {
        setTimeout(() => {
          if (amount > 0) {
            callback(null, "Payment processed successfully");
          } else {
            callback("Payment failed: invalid amount", null);
          }
        }, 500);
      }
    
      // Step 4: Update user account
      function updateAccount(user, amount, callback) {
        setTimeout(() => {
          callback(null, `Account updated. Deducted ₹${amount}`);
        }, 500);
      }
    
      // Step 5: Send notification
      function notifyUser(email, message, callback) {
        setTimeout(() => {
          callback(null, `Email sent to ${email}: ${message}`);
        }, 500);
      }
    
      // Final flow on form submit
      function handlePayment() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const card = document.getElementById("card").value;
        const amount = parseFloat(document.getElementById("amount").value);
        const email = document.getElementById("email").value;
    
        const user = { username, password };
    
        authenticateUser(user, (err, authUser) => {
          if (err) return alert(err);
    
          verifyPaymentMethod(card, (err) => {
            if (err) return alert(err);
    
            processPayment(amount, (err, paymentMsg) => {
              if (err) return alert(err);
    
              updateAccount(authUser, amount, (err, updateMsg) => {
                if (err) return alert(err);
    
                notifyUser(email, paymentMsg, (err, notifyMsg) => {
                  if (err) return alert(err);
    
                  alert("✅ Success!\n" + paymentMsg + "\n" + updateMsg + "\n" + notifyMsg);
                });
              });
            });
          });
        });
      }
    </script>
    </body>
    </html>
