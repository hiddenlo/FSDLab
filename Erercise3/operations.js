function add(n,callback)
{
    return callback(n+10);
}
function subtract(n,callback)
{
    return callback(n-3);
}
function multiply(n)
{
    return n*2;
}

const ans=add(10,(res1)=>{
    return subtract(res1,(res2)=>{
        return multiply(res2)
    })
});

console.log(ans);