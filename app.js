function checkInput(input){
    const invalidChars = /[^1-9]/gi
            if(invalidChars.test(input.value)) {
                    input.value = input.value.replace(invalidChars,'');
          }
};
//restricts typeable characters in input to only numerical values



//obtain input values and create 2D array of the board
document.querySelector('.submit').addEventListener('click', function(){
    let values = [];
    let board = [];

    for (i = 1; i < 82; i++){
        values.push(Number(document.querySelector(`.square-small${i}`).value));
    }

    for (i = 0; i <= 8; i++) {
        let row = [];
        for (x = 9 * i; x <= 8 + 9 * i; x++) {
            row.push(values[x]);
        }
        board.push(row);
    }

    let userValues = [];
    let confirmedValues = [];
    let possibleValues = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]];
    

    for(i = 0; i <= 8; i++){
        let userRow = []
        for (x = 9 * i, y = 0; x <= 8 + 9 * i, y <= 8; x++, y++){
            if(board[i][y] > 0){
                userRow.push(board[i][y]);
            } else {
                userRow.push(0);
            }
        }
        userValues.push(userRow);
    }
    
    

    
    for (let i = 0; i <= possibleValues.length - 1; i++) {
        console.log(possibleValues[i])
    }
    
    for (i = 0; i <= 8; i++){
        for (x = 0; x <= 8; i++){
            userValues.forEach(y => {
                possibleValues.splice(possibleValues[i].findIndex(z => z == y), 1);
            });
        }
    }

    //fix this


    userValues.forEach(i => {
        possibleValues.splice(possibleValues.findIndex(x => x == i), 1);
    });
    

    if(possibleValues.length === 1){
        confirmedValues.push(possibleValues);
    }
    //console.log(possibleValues);
    //console.log(userValues);
    //console.log(confirmedValues);
});



//replace each empty value with a valid value

//display