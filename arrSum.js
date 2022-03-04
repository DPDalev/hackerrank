function arrSum(arr) {
        let res = 0;
        let res1 = 0;

        arr.reduce((res, el) => { res + el}, 0)

        console.log(res)
}

arrSum([1, 2, 3, 4, 10, 11]) //31