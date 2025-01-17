function mergeUserData(userDetails, userAddress, userPreferences) {
    return { 
        ...userDetails, 
        ...userAddress, 
        ...userPreferences 
    };
}

// Example input
const userDetails = { name: 'Shravya', age: 25 };
const userAddress = { address: 'Kothapet', city: 'Hyderabad' };
const userPreferences = { theme: 'Edu', language: 'EN' };

// Example output
const mergedUserData = mergeUserData(userDetails, userAddress, userPreferences);
console.log(mergedUserData);
