// variable scope= where a variable is accessible 

// let = variables are limited to block scope{}
// var = variables are limited to a function(){}
// Global variable = is declared out any function.
//(if global, var will CHANGE Browser's window properties)


// can access in block
for(let i=1;i<=3;i+=1){
    console.log(i);
}

for(var i=1;i<=3;i+=1){
    //console.log(i);
}

// cannot access outsite block of code
console.log(i);

doSomething();

function doSomething(){
    for(var i=1;i<=3;i+=1){
        //console.log(i);
    }
}
// cannot access outsite a function
console.log(i);

for(var i=1;i<=3;i+=1){
    //console.log(i);
}
// Here we can access
console.log(i);


