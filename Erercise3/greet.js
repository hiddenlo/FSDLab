function callback(name)
{
    return `Hello,${name}`;
}

function greet(name,callback)
{
    return callback("Shravya");
}

console.log(greet("Shravya",callback))