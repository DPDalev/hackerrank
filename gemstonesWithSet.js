function gemstones(arr) {
        let gemsCount = 0;
        let resStr = '';
        
        arr.map(el => {
                resStr = resStr.concat(el)
        });
        let resArr = resStr.split('');
        let uniArr = [...new Set(resArr)];
        let check = 0;

        uniArr.map(el => {
                arr.map(stone => {
                        if (stone.split('').includes(el)) {
                                check++;
                        }
                })
                if (check === arr.length) {
                        gemsCount++;
                }
                check = 0;
        })
        console.log(gemsCount)
}

gemstones(['abcdde', 'baccd', 'eeabg']); //2
gemstones(['abc', 'abc', 'bc']); //2
