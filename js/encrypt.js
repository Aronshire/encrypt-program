/**
 * 
 * @param {String} str 
 * @param {Number} key 
 */
function encrypt(str, key) {
    str = content(str)
    let primeNumbers = {'A': 2,'B': 5,'C': 7,'D': 11,'E': 13,'F': 17,'G': 19,'H': 23,'I': 29,'J': 31,'K': 37,'L': 41,'M': 43,'N': 47,'O': 53,'P': 59,'Q': 61,'R': 67,'S': 71,'T': 73,'U': 79,'V': 83,'W': 89,'X': 97,'Y': 101,'Z': 103}
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