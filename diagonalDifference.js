
function diagonalDifference(ar) {

    let leftDiag = 0;
    let rightDiag = 0;
    
    let arr = ar.flat();
    let width = Math.sqrt(arr.length);

        for ( let i = 0; i < width; i++) {
                leftDiag += arr[i * (width + 1)];
                rightDiag += arr[(width - 1 ) * (i + 1)];

                console.log(arr[i * (width + 1)], arr[(i + 1) * (width - 1)]);
        }
        return Math.abs(leftDiag - rightDiag)
}

// inputArr = [1, 2, 3, 4, 5, 6, 9, 8, 9]
// inputArr = [1, 2, 4, 5, 6, 10, 8, -12]
// inputArr = [3, 11, 2, 4, 4, 5, 6, 10, 8, -12]
inputArr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]

diagonalDifference(inputArr)