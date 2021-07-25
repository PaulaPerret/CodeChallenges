class ShiftCipher {
    constructor(number) {
        this.number = number;
    }
    encrypt(string) {
        const capslock = string.toUpperCase();
        let newStr = '';

        for (let i = 0; i < capslock.length; i++) {
            let num = capslock.charCodeAt(i);
            if (num >= 65 && num <= 90) {
                num += this.number;
            }
            if (num > 90) {
                num -= 26;
            }
            newStr += String.fromCharCode(num);
        }
        return newStr;
    }
    decrypt(newString) {
        const lowerCase = newString.toLowerCase();
        let newStr2 = '';

        for (let j = 0; j < lowerCase.length; j++) {
            let convert = lowerCase.charCodeAt(j);

            if (convert >= 97 && convert <= 122) {
                convert -= this.number;
                if (convert < 97) {
                    convert += 26;
                }
            }

            newStr2 += String.fromCharCode(convert);
        }
        return newStr2;
    }
}
