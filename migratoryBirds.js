function migratoryBirds(arr) {

        let types = [0, 0, 0, 0, 0];

        for ( let i = 0; i < arr.length; i++ ) {
                types[arr[i] - 1]++;
        }

        types.sort((a, b) => a - b);
        let midArr = [...new Set(types)];
        let mid = Math.max(...midArr)
        let result = types.lastIndexOf(mid)

        console.log(types, midArr, mid, result)
}

let arr = [1, 1, 2, 2, 3];
arr= [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
arr = [4, 4, 4, 4];
arr = [1, 4, 4, 4, 5, 3];
arr = [ 1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4 ]



migratoryBirds(arr)