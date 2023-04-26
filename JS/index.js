let display =document.querySelector('.screen');
let wipe = ()=>{
    display.value=''
}

let show = (n)=>{
display.value +=n;
}

let calc = ()=>{
    display.value =eval(display.value);
}

