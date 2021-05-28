function numberHappy(){
    // Input HTML
    var inputNumber = document.getElementById("inputNumber").value;

    //to convert int
    var inputNumberC = inputNumber * 1;

    if(inputNumberC <0) return alert("Just ask positive numbers. Negatives have a bad vibe")

    if (inputNumberC == 1 || inputNumberC == 7) return document.getElementById("resultHappy").value = "I'm happy, and you?";
        
    if (inputNumberC > 9) {
    }else{
        return document.getElementById("resultHappy").value = "I'm not happy but the important thing is health.";
    }
    
    boolean = this.isHappy(inputNumberC);
    
    if(boolean == true){
        document.getElementById("resultHappy").value = "I'm happy, and you?";
    }else{
         return document.getElementById("resultHappy").value = "I'm not happy but the important thing is health.";
    }
}

    function isHappy(n) {
    let narr = (n + '').split(''), sum = 0
    for (let i = 0;i < narr.length; i++) {
      sum = narr[i] * narr[i] + sum
    }
    return isHappy(sum)
  };