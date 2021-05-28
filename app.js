//------------------//------------------TASKS  NO.1------------------//------------------//

//------------------CONSOLE------------------
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


//------------------ALERTS------------------

// let input = prompt('Enter a word:','');

// function substrings([word1, word2]) {

//     var arrayWords1 = word1 + word2;
//     var arrayWords2 = word2 + word1;

//     var index = input.indexOf(arrayWords1);
//     var index2 = input.indexOf(arrayWords2);

//     var arrayIndex = [index, index2];

//     if (index, index2 == -1) {
//         return alert("No found");
//     } else if (index < 0) {
//         arrayIndex[0] = "No found";
//         return alert(arrayIndex);
//     } else if (index2 <= -1) {
//         arrayIndex[1] = "No found"
//         return alert(arrayIndex);
//     }

//         alert(arrayIndex);
// }

// let first = prompt('Send the first word');
// let second = prompt('Send the second word');

// var words = [first, second];

// substrings(words);


//------------------WITH HTML------------------

function getInput() {
    var first = document.getElementById("Fword").value;
    var second = document.getElementById("Sword").value;

    var words = [first, second];

    this.subStrings(words);

}

function subStrings([word1, word2]) {

    var arrayWords1 = word1 + word2;
    var arrayWords2 = word2 + word1;

    var input = document.getElementById('string').value;

    var index = input.indexOf(arrayWords1);
    var index2 = input.indexOf(arrayWords2);

    var arrayIndex = [index, index2];

    if (index == -1 && index2 == -1) {
        return document.getElementById("result").value = "No found";
    } else if (index < 0) {
        arrayIndex[0] = "No found";
        return document.getElementById("result").value = arrayIndex;
    } else if (index2 <= -1) {
        arrayIndex[1] = "No found";
        return document.getElementById("result").value = arrayIndex;
    }

    return document.getElementById("result").value = arrayIndex;
}

//------------------//------------------TASKS  NO.2------------------//------------------//

function numberHappy(){

    var inputNumber = document.getElementById("inputNumber").value;
    var inputHappy = document.getElementById("resultHappy").value;

    var inputNumberC = inputNumber * 1;

}
