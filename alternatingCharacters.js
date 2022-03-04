function alternatingCharacters(str) {
        let deletions = 0;

        for(let i = 1; i < str.length; i++) {
                if(str[i] === str[i - 1]) {
                        deletions++;
                }
        }
        return deletions;
}

alternatingCharacters('AAAA'); //3
alternatingCharacters('BBBBB'); //4
alternatingCharacters('ABABABAB'); //0
alternatingCharacters('BABABA'); //0
alternatingCharacters('AAABBB'); //4
alternatingCharacters('AABAAB'); //2

