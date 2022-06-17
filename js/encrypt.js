/**
 * 
 * @param {String} str 
 * @param {Number} key 
 */
function encrypt(str, key) {
    str = content(str)
    let primeNumbers = {'A': 503, 'B': 509 , 'C': 521 , 'D': 523 , 'E': 541 , 'F': 547 , 'G': 557 , 'H': 563 , 'I': 569 , 'J': 571 , 'K': 577 , 'L': 587 , 'M': 593 , 'N': 599 , 'O': 601 , 'P': 607 , 'Q': 613 , 'R': 617 , 'S': 619 , 'T': 631 , 'U': 641 , 'V': 643 , 'W': 647 , 'X': 653 , 'Y': 659 , 'Z': 661 }
    let primeNumbersKeys = Object.keys(primeNumbers)
    let primeNumbersValues = Object.values(primeNumbers)
    let maxNumber = (primeNumbers["Y"] * primeNumbers["Z"]).toString().length;

    let decrypted = '';
    let newStr = '';
    let encryptedStr = '';
  
    let decryptNumbers = chunkStr(str,maxNumber, []);
    for(decryptNumber in decryptNumbers){
        let factors = primeFactors(decryptNumbers[decryptNumber])
    
        let charValue = factors[0]
        let keyCharIndex = primeNumbersValues.indexOf(charValue)
        let keyCharValue = primeNumbersKeys[keyCharIndex]

        if(primeNumbersValues[(keyCharIndex - key) + 26] == factors[1]){
            keyCharIndex = primeNumbersValues.indexOf(factors[1])
            keyCharValue = primeNumbersKeys[keyCharIndex]
         }
        let keyValue = keyCharIndex + Number(key)
        if(keyValue >= 26) keyValue = keyValue % 26
        let keyChar = primeNumbersValues[keyValue]

        let encryptedChar = primeNumbersValues[keyCharIndex] * keyChar;
        newStr += encryptedChar;
        encryptedStr += decryptNumbers[decryptNumber]

        if(newStr != encryptedStr) {
             keyCharIndex = primeNumbersValues.indexOf(keyChar)
             keyCharValue = primeNumbersKeys[keyCharIndex]
        }

        decrypted += keyCharValue
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

const chunkStr = (str, n, acc) => {     
    if (str.length === 0) {
        return acc
    } else {
        acc.push(str.substring(0, n));
        return chunkStr(str.substring(n), n, acc);
    }
}
 

$("#decrypt").on("click", function() {
    let str = $("#str").val();
    let key = $("#key").val();
    let decrypted = decrypt(str, key);
    $("#encrypted").val(decrypted);
});
    let primeNumbersKeys = Object.keys(primeNumbers)
    let primeNumbersValues = Object.values(primeNumbers)
    let maxNumber = (primeNumbers["Y"] * primeNumbers["Z"]).toString().length;

    let encrypted = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let charIndex = primeNumbersKeys.indexOf(char);
        let charValue = primeNumbersValues[charIndex];
        let keyIndex = Number(charIndex) + Number(key)
        if(keyIndex >= primeNumbersKeys.length){
            keyIndex = keyIndex - primeNumbersKeys.length
        }
        let keyChar = primeNumbersValues[keyIndex]
        if(key == 0){
            keyChar = 1
        }
        let encryptedChar = charValue * keyChar;
        let encryptedCharLength = encryptedChar.toString().length;
        if(encryptedCharLength < maxNumber){
            encryptedChar = encryptedChar.toString().padStart(maxNumber, '0')
        }
        encrypted += encryptedChar;
    }

    return encrypted;
}

function content(str) {
    str = str.toUpperCase()
    str = str.replace(/\n/g, "")
    str = str.replace(/ /g, "")
    str = str.replace("", "")
    str = str.replace(/Ö/g, "O")
    str = str.replace(/Ü/g, "U")
    str = str.replace(/Ä/g, "A")
    str = str.replace(/İ/g, "I")
    str = str.replace(/Ğ/g, "G")
    str = str.replace(/Ş/g, "S")
    str = str.replace(/Ç/g, "C")
    return str;
}


$("#encrypt").on("click", function() {
    let str = $("#str").val();
    let key = $("#key").val();
    let encrypted = encrypt(str, key);
    $("#encrypted").val(encrypted);
    return;
});
