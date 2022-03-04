function circularArray (inputArr, k, positionsToReturn) {
        
        for (let i = 0; i < k; i++) {
                rotateArr(inputArr)
        }

        function rotateArr(inputArr) {
                let currElement = inputArr.pop()
                inputArr.unshift(currElement)
                console.log(currElement);
                console.log(inputArr);
        }

        positionsToReturn.forEach(e => {
                console.log(inputArr[e]);
        });
}

circularArray([1,2,3,4,5], 2, [2,4])
