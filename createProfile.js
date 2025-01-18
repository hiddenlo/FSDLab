function createProfile({ name, email }) {
    return { name, email };
}

const profile = createProfile(
    { 
        name: 'Shravya', 
        age: 20, 
        email: 'example.com', 
        address: 'hyderabad' 
    });
console.log(profile);
