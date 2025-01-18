function createProfile({name,age,interests:[interest1,interest2]})
{
    return {name,age,interest1,interest2};
}

const profile = createProfile({
    name: 'Shravya',
    age: 20,
    interests:["kdramas","anchoring","Reading"]
});

console.log(profile);