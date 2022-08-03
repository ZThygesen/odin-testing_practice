export function caesarCipher(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (isLetter(charCode)) {
            newStr += shift(charCode);
        } else {
            newStr += str.charAt(i);
        }
    }
    
    return newStr;
}

function isLetter(charCode) {
    return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122); 
}

function shift(charCode) {
    let newCode;
    if (isUpper(charCode)) {
        newCode = ((charCode - 62) % 26) + 65;
    } else {
        newCode = ((charCode - 94) % 26) + 97;
    }

    return String.fromCharCode(newCode);
}

function isUpper(charCode) {
    return charCode >= 65 && charCode <= 90
}

