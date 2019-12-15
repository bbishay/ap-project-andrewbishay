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
    let userValueSquares = [];
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
    let possibleValueSquares = [
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
    let allPossibleValues = [];
    let confirmedValues = [];
    
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

    for (i = 0; i <= 6; i = i + 3){
        for (j = 0; j <= 6; j = j + 3){
            let square = [];
            for (k = 0; k <= 2; k++){
                for (l = 0; l <= 2; l++){
                    square.push(board[k + i][l + j]); 
                }
            }
            userValueSquares.push(square);
        }
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

    for (i = 0; i <= 8; i++){
        userValueSquares[i].forEach(x => {
            if(x !== 0){
                possibleValueSquares[i].splice(possibleValueSquares[i].findIndex(a => a == x), 1);
            }
        });
    }

    function intersect(arr1, arr2){
        let intersection = [...arr1, ...arr2];
        let value;
        if (arr1.includes(value) && arr2.includes(value)){
            intersection.push(value)
        }
        return intersection;
    }

    let asdf = [1, 2, 3, 4];
    let sdfg = [2, 3, 4, 5];
    let dfgh = [3, 4, 5, 6];
    

    for (i = 0; i <= 8; i++){
        for (j = 0; j <= 8; j++){
            if (board[i][j] === 0){
                allPossibleValues.push(intersect(possibleValueRows[i], possibleValueSquares[i], possibleValueColumns[j]));
            } else {
                allPossibleValues.push([]);
            }
        }   
    }
    
    //console.log(allPossibleValues);
    
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