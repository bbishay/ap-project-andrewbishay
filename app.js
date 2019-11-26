function checkInput(input){
    const invalidChars = /[^1-9]/gi
            if(invalidChars.test(input.value)) {
                    input.value = input.value.replace(invalidChars,'');
          }
};
//restricts typeable characters in input to only numerical values


//obtain input values and create arrays of the board, rows, and columns
document.querySelector('.submit').addEventListener('click', function(){
    //console.log('test1');
    let values = [];
    let arr = []

    for (i = 1; i < 82; i++){
        values.push(Number(document.querySelector(`.square-small${i}`).value));
    }
    for (i = 0; i <= 8; i++) {
        let row = [];
        for (x = 0 + 9 * i; x <= 8 + 9 * i; x++) {
            row.push(values[x])
        }
        arr.push(row)
    }
    values = [...arr]
    
    for (i = 0; i < 3; i++){
        let rowOne = [values[i], values[i + 9], values[i + 18]]; 
        let rowTwo = [values[i + 3], values[i + 12], values[i + 21]];
        let rowThree = [values[i + 6], values[i + 15], values[i + 24]];
        let rowFour = [values[i + 9], values[i + 18], values[i + 27]];
        let rowFive = [values[i + 12], values[i + 21], values[i + 30]];
        let rowSix = [values[i + 15], values[i + 24], values[i + 33]];
        let rowSeven = [values[i + 18], values[i + 27], values[i + 36]];
        let rowEight = [values[i + 21], values[i + 30], values[i + 39]];
        let rowNine = [values[i + 24], values[i + 33], values[i + 42]];
    } 
    
    
    for (i = 0; i < 7; i = i + 3){
        //let columnOne = [...[values[i]], ...[values[i + 27]], ...[values[i + 54]]];
        let columnTwo = [values[i + 1], values[i + 28], values[i + 55]];
        let columnThree = [values[i + 2], values[i + 29], values[i + 56]];
        let columnFour = [values[i + 9], values[i + 36], values[i + 63]];
        let columnFive = [values[i + 10], values[i + 37], values[i + 64]];
        let columnSix = [values[i + 11], values[i + 38], values[i + 65]];
        let columnSeven = [values[i + 18], values[i + 45], values[i + 72]];
        let columnEight = [values[i + 19], values[i + 46], values[i + 73]];
        let columnNine = [values[i + 20], values[i + 47], values[i + 74]];
    }
    console.log(values);


    for (i = 0; i < 9; i++){
        let squareLargeOne = [values[i]];
        let squareLargeTwo = [values[i + 9]];
        let squareLargeThree = [values[i + 18]];
        let squareLargeFour = [values[i + 27]];
        let squareLargeFive = [values[i + 36]];
        let squareLargeSix = [values[i + 45]];
        let squareLargeSeven = [values[i + 54]];
        let squareLargeEight = [values[i + 63]];
        let squareLargeNine = [values[i + 72]];
    }
});


//test each square from 1-9 against each row



//test each square from 1-9 against each column





//test each square from 1-9 against each large square


//replace each empty value with a valid value

//display