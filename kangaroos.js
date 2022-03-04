function kangaroo(x1, v1, x2, v2) {
    
        let path1 = x1;
        let path2 = x2;
        
        
        if (v2 > v1) {
            console.log( "NO")
        } else if ( v1 === v2 ) {
            if ( x1 === x2 ) {
                console.log( "YES")
            } else console.log( "NO")
        } else {
            let n = ( x2 - x1 ) / ( v1 - v2 )
            console.log(n)
            if ( n === Math.abs(n) ) console.log( "YES")
        }
        
    
    }

    // kangaroo(0, 3, 4, 2) //YES
    // kangaroo(2, 1, 1, 2) //YES
    // kangaroo(0, 2, 5, 3) //NO
    kangaroo(21, 6, 47, 3) //NO

    

