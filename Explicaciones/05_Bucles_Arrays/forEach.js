// for in a.k.a foreach

// for (key in object) {
//     // code block to be executed
//   }

const person = {fname:"John", lname:"Doe", age:25};

function forIn(){
    let text = "";
    for (let x in person) {
    text += person[x];
    }
    return text;
}

console.log(forIn());


