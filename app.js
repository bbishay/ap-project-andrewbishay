function checkInput(input){
    const invalidChars = /[^1-9]/gi
            if(invalidChars.test(input.value)) {
                    input.value = input.value.replace(invalidChars,'');
          }
};
//restricts typeable characters in input to only numerical values


//obtain input values and create two-dimensional array
document.querySelector('.submit').addEventListener('click', function(){
    //console.log('test1');
    let values = [];
    for (i = 1; i < 82; i++){
        values.push(Number(document.querySelector(`.square-small${i}`).value));
    }
    //console.log(values);
});




//test each square from 1-9 against each row





//test each square from 1-9 against each column





//test each square from 1-9 against each large square


//replace each empty value with a valid value

//display