function camelCase(str) {

        if ( str.length === 0 ) {
                console.log(0)
                return 0
        }

        let count = str.match(/[A-Z]/g);

        if ( count === null ) {
                console.log(1);

                return 1
        } else {
                console.log(count.length + 1);
                return count.length + 1
        }

        console.log(count)
}


camelCase("programmerDimitarPenchevDalev")
camelCase("")
camelCase("dalev")
