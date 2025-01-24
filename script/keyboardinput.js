export function keyboardinput(key)
{
    var input = document.querySelector('input');
    
    if(key === 'Backspace'){
        input.value = input.value.slice(0,-1);
    }
    else if(key === 'Delete'){
        input.value = '';
        document.getElementById('result').innerHTML="";
    }
    else if(['Shift','Ctrl','Control','CapsLock','Alt','ArrowDown','ArrowUp','ArrowLeft','ArrowRight'].includes(key)){
        input.value ;
    }
    else{
        input.value += key;
    }
}
