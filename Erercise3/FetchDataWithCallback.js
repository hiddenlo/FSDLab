function getUserDetails(userId, callback) {
    setTimeout(() => {
      const users = {
        1: { name: "Alice", age: 25 },
        2: { name: "Bob", age: 30 },
      };
  
      if (users[userId]) {
        callback(null, users[userId]);
      } else {
        callback("User not found", null);
      }
    }, 1000); // 1 second delay
  }
  getUserDetails(1, (err, data) => {
    if (err) {
      console.log("Error:", err);
    } else {
      console.log("User Found:", data);
    }
  });
