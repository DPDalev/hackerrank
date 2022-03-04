function gemstones(arr) {
        let gemsCount = 0;
        let resStr = '';
        let uniArr = [];
        
        arr.map(el => {
                resStr = resStr.concat(el)
        });
        let resArr = resStr.split('');
        
        resArr.map(el => {
                if (!uniArr.includes(el)) {
                        uniArr.push(el);
                }
        })

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

gemstones(['abcdde', 'baccd', 'eeabg']);
gemstones(['abc', 'abc', 'bc'])
