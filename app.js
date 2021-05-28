let texto = 'HolaComoEstamos';

// var array = texto.split();
// console.log(array);

// var index= array.indexOf("Estamos");

// array.join('');

// console.log(array);

// var index= texto.indexOf("Estamos");


function substrings(word1, word2){
    var words = [word1, word2];
    var index= texto.indexOf(word1);
    var index2= texto.indexOf(word2);
    
    if(index == -1){
        console.log('No found');
    }else{
        console.log(index, index2);
    }
}

substrings("Hola","Como");

// var array = ["test234", "test9495", "test234", "test93992", "test234"];
// let newArr=[];
// for (i=0;i<array.length;i++) {
//   if (array[i].indexOf("test234") >=0 ) {
//     newArr.push(i);
//   }
// }
// console.log(newArr);