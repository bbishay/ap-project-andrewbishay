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
            row.push(values[x])
        }
        board.push(row)
    }

    let possibleValues = []
    let userValue = board[0].find(function(x){
        return x > 0;
    })
    for(i = 1; i <= 9; i++){
        if (userValue !== i){
            possibleValues.push(i);
        }
    }
    
    console.log(possibleValues);
    
    
});


//test each square from 1-9 against each row



//test each square from 1-9 against each column





//test each square from 1-9 against each large square


//replace each empty value with a valid value

//display