function climbingLeaderboard(ranked, player) {
    
        let ranking = [];
        let redRanked = [...new Set(ranked)];
        
        player.forEach((el, i) => {
            redRanked.push(el);
            redRanked.sort((a, b) => b - a)
            ranking.push(redRanked.indexOf(el) + 1)
        })
        console.log(ranking)
    }

    let arr1 = [100, 100, 50, 40, 40, 20, 10];
    let arr2 = [5, 25, 50, 120];
    climbingLeaderboard(arr1, arr2)

    //6, 4, 2, 1