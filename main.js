//Trecho 04
//Sem Arrow function
const promise = function() {  return new Promise(function(resolve, reject) {
    return resolve();  })}

//Com Arrow Function
const promise = new Promise( (resolve, reject) => { resolve() } );

console.log(promise);

    