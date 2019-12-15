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

    let userValueRows = [];
    let userValueColumns = [];
    let confirmedValues = [];
    let possibleValueRows = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ];
    let possibleValueColumns = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ];
    let possibleValuesGeneral = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ];
    
    for (i = 0; i <= 8; i++){
        let userRow = []
        for (x = 9 * i, y = 0; x <= 8 + 9 * i, y <= 8; x++, y++){
            if(board[i][y] > 0){
                userRow.push(board[i][y]);
            } else {
                userRow.push(0);
            }
        }
        userValueRows.push(userRow);
    }

    for (i = 0; i <= 8; i++){
        let userColumn = [];
        for (j = 0; j <= 8; j++){
            userColumn.push(userValueRows[j][i]);
        }
        userValueColumns.push(userColumn);
    }

    for (i = 0; i <= 8; i++){
        userValueRows[i].forEach(x => {
            if(x !== 0){
                possibleValueRows[i].splice(possibleValueRows[i].findIndex(a => a == x), 1);
            }
        });
    }

    for (i = 0; i <= 8; i++){
        userValueColumns[i].forEach(x => {
            if(x !== 0){
                possibleValueColumns[i].splice(possibleValueColumns[i].findIndex(a => a == x), 1);
            }
        });
    }
    
    let individualArray = []
    let possibleValueSquares = [];

    for(i = 0; i <= 8; i++){
        for(j = 0; j <= 8; j++){
            let square = possibleValuesGeneral.splice();
            individualArray.push(square);
        }   
    }
    
    //finish this -- maybe make possibleValuesGeneral only be an array of the values from 1-9 once; then splice all values found in possibleValueRows and possibleValueColumns, then check to see if the length of the array = 1 and replace it with the value if true

    individualArray.forEach(x => {
        if(x === 0){

        }
    });

    //console.log(possibleValueSquares);
    
    
    for (i = 0; i <= 8; i++){
        if(possibleValueRows[i].length === 1){
            confirmedValues.push(possibleValueRows[i])
        } else{
            confirmedValues.push(0);
        }
    }
    //rework when columns and big squares are figured out
});

//replace each empty value with a valid value
//display