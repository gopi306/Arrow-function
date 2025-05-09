// output is coming an array

let Todo= []

function Add(){
    let inputValue =document.querySelector('#input');

    let name =inputValue.value;
    // how to get output is array values .
   Todo.push(name);
   console.log(Todo);
   inputValue.value='';
   
}

console.log("I am updated");
