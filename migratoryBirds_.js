function migratoryBirds(arr) {
        arr.sort((a, b) => a - b);

        let result = arr[0];
        let first = 1;
        let next = 0;

        for ( let i = 0; i < arr.length; i++ ) {
                if ( arr[i] === result) {
                        // result++;
                        first++;
                } else {
                        next++;
                        if ( next > first ) {
                                result = arr[i];
                                first = next;
                                next = 0;
                        }
                }
        }

        console.log(result)
}

let arr = [1, 1, 2, 2, 3];
arr = [1, 4, 4, 4, 5, 3];
arr= [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
arr = [4, 4, 4, 4];



migratoryBirds(arr)