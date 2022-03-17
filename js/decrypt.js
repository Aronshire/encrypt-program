/**
 * 
 * @param {String} str 
 * @param {Number} key 
 */
 function decrypt(str, key) {
    str = str.match(/.{1,5}/g)
     str = str.map(function(item){   
         return Number(item)
     })
     let primeNumbers = {'A': 2,'B': 5,'C': 7,'D': 11,'E': 13,'F': 17,'G': 19,'H': 23,'I': 29,'J': 31,'K': 37,'L': 41,'M': 43,'N': 47,'O': 53,'P': 59,'Q': 61,'R': 67,'S': 71,'T': 73,'U': 79,'V': 83,'W': 89,'X': 97,'Y': 101,'Z': 103}
     let primeNumbersKeys = Object.keys(primeNumbers)
     let primeNumbersValues = Object.values(primeNumbers)
 
     let decrypted = '';
 
     for (let i = 0; i < str.length; i++) {
         let factor = primeFactors(str[i])
         let charIndex = primeNumbersValues.indexOf(factor[0])
         let charValue = primeNumbersKeys[charIndex]
         if(primeNumbersValues[(charIndex - key) + 26] == factor[1]){
            charIndex = primeNumbersValues.indexOf(factor[1])
            charValue = primeNumbersKeys[charIndex]
         }
         console.log(factor)
         decrypted += charValue;
     }
 
     return decrypted;
 }
 
 
 function primeFactors(n){
     var factors = [], 
         divisor = 2;
     
     while(n>=2){
       if(n % divisor == 0){
          factors.push(divisor); 
          n= n/ divisor;
       }
       else{
         divisor++;
       }     
     }
     return factors;
   }
 

$("#decrypt").on("click", function() {
    let str = $("#str").val();
    let key = $("#key").val();
    let decrypted = decrypt(str, key);
    $("#encrypted").val(decrypted);
});