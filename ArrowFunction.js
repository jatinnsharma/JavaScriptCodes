// ES6 arrow function (2 arguments)
// Object
// template literals
//methods Math.floor()



// simple function
function doSomething(){

}



// Arrow function
const doSomething =()=>{

}

// arrow function 
const introducer =(name,shirt)=>{
    const person={
        name:name,
        shirt:shirt,
        assets: 100000,
        liabilities:50000,
        netWorth: function (){
            return this.assets-this.liabilities
        }
    }

    const intro =`Hi , my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()} USD`

    return intro 
}

console.log(introducer('jatin','black')) 




