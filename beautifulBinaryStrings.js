function bbs(str) {
        let operations = 0;
        let strArr = str.split('');
        let buffer = [];

        do {    
                buffer = strArr.slice();
                // console.log(buffer)
                for (let i = 2; i < strArr.length; i++) {
                        if (strArr[i] === '0' && strArr[i - 1] === '1' && strArr[i - 2] === '0') {
                                strArr[i] = 1;
                                operations++;
                                // console.log(strArr.join(''), operations)
                        }                        
                }
        } while (JSON.stringify(buffer) !== JSON.stringify(strArr))

        console.log(operations)
}

bbs('0101010');
bbs('01100');
bbs('0100101010');