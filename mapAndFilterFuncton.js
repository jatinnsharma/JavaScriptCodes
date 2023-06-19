let names=['Jatin',"Jack","Jessica"]

// we want result like Jatin1,Jack1,Jessica1.
// first method using for loop
for(let i =0;i<names.length;i++){
    console.log(names[i]+"1")
}

// Second method using map
names.map((name)=>{
    console.log(name)
})
names.map((name)=>{
return name+'1'
})

// Names in heading tags 
names.map((name)=>{
return <h1>{name}</h1>
})


/*
 This filter function is similar to the function 
 It will loop through every element in the array 

*/


let names2=['jatin','jatin','nurender','arrav']
names2.filter((name)=>{
    return name!=="jatin"
})

/*
 This would makes names become an array 
 wtihout jatin would just keep as an array as
 nurender and arrav
*/


