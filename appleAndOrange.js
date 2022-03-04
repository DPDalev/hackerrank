function applesAndOranges(s, t, a, b, apples, oranges) {

        let result = [0, 0];
        
        transformArr(apples, a, 0);
        transformArr(oranges, b, 1);

        
        oranges.forEach(el => {
                el = el + b;
        });

        
        function transformArr(arr, distance, resultIndex) {
                for ( let i = 0; i < arr.length; i++ ) {
                        arr[i] = arr[i] + distance;
                        if ( arr[i] >= s && arr[i] <= t) {
                                result[resultIndex]++
                        }
                }
        }
        console.log(s, t, a, b, apples, oranges)
console.log(result)
}

let apples = [-2, 2, 1];
let oranges = [5, -6];

applesAndOranges(7, 11, 5, 15, apples, oranges);
