function checkInput(ob){
    const invalidChars = /[^1-9]/gi
            if(invalidChars.test(ob.value)) {
                    ob.value = ob.value.replace(invalidChars,"");
          }
};
//restricts typeable characters in input to only numerical values

document.querySelector('.submit').addEventListener('click', function(){
    //console.log('test1');

    console.log(document.querySelectorAll('.square-small').value);
    
});