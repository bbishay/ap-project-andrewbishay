function checkInput(input){
    const invalidChars = /[^1-9]/gi
            if(invalidChars.test(input.value)) {
                    input.value = input.value.replace(invalidChars,'');
          }
};
//restricts typeable characters in input to only numerical values

document.querySelector('.submit').addEventListener('click', function(){
    let values = [];
    let board = [];

    for (i = 1; i < 82; i++){
        values.push(Number(document.querySelector(`.square-small${i}`).value));
    }

    for (i = 0; i <= 8; i++) {
        let row = [];
        for (j = 9 * i; j <= 8 + 9 * i; j++) {
            row.push(values[j]);
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
    let boardSolved = [];
    
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

    function intersect(arr1, arr2, arr3){
        let intersection = [];
        arr1.forEach(value => {
            if (arr1.includes(value) && arr2.includes(value) && arr3.includes(value)){
                intersection.push(value);
            }
        });
        return intersection;
    }

    for (i = 0; i <= 8; i++){
        for (j = 0; j <= 8; j++){
            if (board[i][j] === 0){
                allPossibleValues.push(intersect(possibleValueRows[i], possibleValueColumns[j], possibleValueSquares[Math.floor(j / 3) + 3 * Math.floor(i / 3)]));
            } else {
                allPossibleValues.push([]);
            }
        }   
    }

    for (i = 0; i <= 80; i++){
        if(allPossibleValues[i].length === 1){
            confirmedValues.push(allPossibleValues[i][0])
        } else if(allPossibleValues[i].length === 0){
            confirmedValues.push(values[i]);
        } else {
            confirmedValues.push(0);
        }
    }

    for (i = 0; i <= 8; i++){
        let rowSolved = [];
        for (j = 9 * i; j <= 8 + 9 * i; j++){
            rowSolved.push(confirmedValues[j]);
        }        
        boardSolved.push(rowSolved);
    }

    let emptySpaces = [];
    for (i = 0; i <= 8; i++){
        for (j = 0; j <= 8; j++){
            if (boardSolved[i][j] === 0){
                emptySpaces.push(boardSolved[i][j]);
            }
        }
    }
    
    
    while(emptySpaces.length > 0){
        console.log('hi');
        emptySpaces.pop();
    }
    
    //rework when columns and big squares are figured out
    
    //replace each empty value with a valid value
});
//display