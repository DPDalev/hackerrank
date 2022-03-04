function color(pixels) {
    let redStr = "";
    let greenStr = "";
    let blueStr = "";

    let redValue = 0;
    let greenValue = 0;
    let blueValue = 0;

    let dBlack = 0;
    let dWhite = 0;
    let dRed = 0;
    let dGreen = 0;
    let dBlue = 0;

    let d = 0;
    let currResult = [];
    let minValue = 0;
    let result = [];
    let dValues = [];
    let refArr = ["Black", "White", "Red", "Green", "Blue"];
    let controlArr = [];
    let index = 0;
    
    pixels.forEach(el => {
        redString = el.slice(0, 8);
        greenString = el.slice(8, 16);
        blueString = el.slice(16, 24);
        
        redValue = parseInt(redString, 2);
        greenValue = parseInt(greenString, 2);
        blueValue = parseInt(blueString, 2);
        
        dBlack = calcD(redValue, greenValue, blueValue, 0, 0, 0);
        dWhite = calcD(redValue, greenValue, blueValue, 255, 255, 255);
        dRed = calcD(redValue, greenValue, blueValue, 255, 0, 0);
        dGreen = calcD(redValue, greenValue, blueValue, 0, 255, 0);
        dBlue = calcD(redValue, greenValue, blueValue, 0, 0, 255);
        
        dValues = [dBlack, dWhite, dRed, dGreen, dBlue];
        minValue = Math.min(dBlack, dWhite, dRed, dGreen, dBlue);

        controlArr = [...new Set(dValues)]

        console.log("control", dValues)
        
        index = dValues.indexOf(minValue);
        console.log(index)
        
        currResult = refArr[index]
        
        result.push(currResult)
    })

    function calcD(red, green, blue, r, g, b) {
        d = Math.sqrt( Math.pow(red - r, 2)
         + Math.pow(green - g, 2)
         + Math.pow(blue - b, 2))
        return d
    }

    console.log(result)
}

    color(["000000001111111100000110", "111111111111111100000110"])