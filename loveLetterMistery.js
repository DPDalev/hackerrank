function llm(str) {
        function isPalindrome(inputStr) {
                let length = Math.floor(inputStr.length / 2);
                for (let i = 0; i < length; i++) {
                        if (inputStr[i] !== inputStr[inputStr.length - 1 - i]) {
                                return false
                        }
                }
                return true
        }

        let changes = 0;

        if (isPalindrome(str)) {
                console.log(`${str} Palindrome`);
                return 0;
        }

        // let strArr = str.split('');

        let length = Math.floor(str.length / 2);

        for (let i = 0; i < length; i++) {
                changes += Math.abs(str.charCodeAt(i) - str.charCodeAt(str.length - i - 1))
        }

        console.log(`Changes in ${str}: `, changes);
        return changes;
}

llm('abc');
llm('abcba');
llm('abcd');
llm('cba');
