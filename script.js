let clickBtn = document.querySelector('#clickme')
clickBtn.addEventListener('click',clickHandler)
function clickHandler(evt){
    console.log('You clicked it!')
}

let box = document.querySelector('.box img');
box.addEventListener('mouseover',(evt)=>{
    console.log('you looked at the photo!')
})

let positionX = 0;
let body = document.querySelector('body');
body.addEventListener('keypress',(evt)=>{
    console.log(evt.key)
    if(evt.key==='d'){
        console.log(evt);
        positionX+=20;
        console.log(positionX);
        box.style.left = `${positionX}px`;
        //box.style.border=
    }
    if(evt.key==='a'){
        console.log(evt);
        positionX-=20;
        console.log(positionX);
        box.style.left = `${positionX}px`;
        //box.style.border=
    }
})