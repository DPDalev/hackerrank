function superReducedString(str) {

        let strArr = str.split('');
        let buffer = [];

        do {
                buffer = strArr.slice();
                for (let i = 0; i < strArr.length; i++) {
                        if (strArr[i] === strArr[i + 1]) {
                                strArr.splice(i, 2);
                        }
                }
        } while (JSON.stringify(strArr) != JSON.stringify(buffer))
        
        if ( strArr.length > 0 ) {
                console.log(strArr.join(''));
                return strArr.join('') 
        } else {
                console.log('Empty String');
                return 'Empty String'
        }
}

superReducedString('aaabccddd')//abd
superReducedString('abba')
superReducedString('aab')
superReducedString('abba')
