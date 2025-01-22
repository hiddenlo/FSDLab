function updateEmployeeDetails(employee,newrole)
{
    return {
        ...employee,
        role: newrole
    };
}

const employee ={
    name:'Shravya',
    role:'Student',
    age:20,
    location:'India'
}

let newrole = updateEmployeeDetails(employee,'StudentPresident');
console.log(newrole);