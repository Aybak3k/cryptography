const encryptMsg = (text, key=5, decrypt=false) => {
    // initialize an empty string to hold loop output
    let cryptedText = ''

    for (let char of text) {

        // escape the space char
        if (char.charCodeAt() == 32) {
            cryptedText += char
        } else {
            // en/decrypt!!
            cryptedText += String.fromCharCode(char.charCodeAt() + (key * (decrypt ? -1 : 1)))
        }
    }
    return cryptedText
}

// testing
console.log(encryptMsg('F~gfp8p', 5, true))
