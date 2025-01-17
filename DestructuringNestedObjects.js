const person = { name: 'Shravya', address: { street: 'old maruthi nagar', city: 'Hyderabad', zip: '500035' }, age: 20 };
const { address: { street, city } } = person;
console.log(street);
console.log(city);
