function total(...nums)
{
    let sum=0;
    for(let i in nums)
    {
        sum+=nums[i];
    }
    return sum;
}

console.log(total(1,2,3,4));    