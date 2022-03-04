function divisibleSumPairs(n, k, arr) {
        let pairs = 0;
        for ( let i = 0; i < n; i++ ) {
                for ( let j = i + 1; j < n; j++ ) {
                        if ( ( arr[i] + arr[j] ) % k ===0 )
                        pairs++
                }
        }
    console.log( pairs )
}

// let arr = [];

divisibleSumPairs(6, 3, [1, 2, 3, 4, 5, 6]);