// let input = 'barfoothefoobarman';

// function substrings([word1, word2]){

//     var arrayWords1 = word1 + word2;
//     var arrayWords2 = word2 + word1;

//     var index= input.indexOf(arrayWords1);
//     var index2= input.indexOf(arrayWords2);

//     var arrayIndex = [index, index2];

//     if(index, index2 == -1) {
//         return console.log("No found");
//     }else if(index < 0){
//         arrayIndex[0] = "No found";
//         return console.log(arrayIndex);
//     }else if(index2 <= -1){
//         arrayIndex[1] = "No found"
//         return console.log(arrayIndex);
//     }
    
//     console.log(arrayIndex);
// }

// var words = ["foo", "bar"];

// substrings(words);




let input = prompt('Enter a word:','');

function substrings([word1, word2]) {

    var arrayWords1 = word1 + word2;
    var arrayWords2 = word2 + word1;

    var index = input.indexOf(arrayWords1);
    var index2 = input.indexOf(arrayWords2);

    var arrayIndex = [index, index2];

    if (index, index2 == -1) {
        return alert("No found");
    } else if (index < 0) {
        arrayIndex[0] = "No found";
        return alert(arrayIndex);
    } else if (index2 <= -1) {
        arrayIndex[1] = "No found"
        return alert(arrayIndex);
    }

        alert(arrayIndex);
}

let first = prompt('Send the first word');
let second = prompt('Send the second word');

var words = [first, second];

substrings(words);

// var array = ["Hola", "Como", "Hola", "Estamos", "Hola"];
// let newArr=[];
// for (i=0;i<array.length;i++) {
//   if (array[i].indexOf("Hola") >=0 ) {
//     newArr.push(i);
//   }
// }
// console.log(newArr);