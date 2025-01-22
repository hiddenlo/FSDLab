const name1=Symbol("Shravya");
const name2=Symbol("Shravya");

const obj={
    [name1]:'Hello',
    [name2]:'Hello'
}

console.log(obj[name1]);
console.log(obj[name1]);
console.log(name1);
console.log(name2);
console.log(obj[name1]===obj[name2]);
console.log(name1===name2);
