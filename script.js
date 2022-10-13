let container=document.querySelector('.container')
const squares=6900;

const color=["#056CF2","#05AFF2","#F2E205","#F28705","#A62103"]
let ok=false;
let notOk=false;
let c;
let turn;


for(let i=0;i<squares;i++){
    let ele=document.createElement('span')
    ele.classList.add('sq')
    ele.addEventListener('mouseover',()=>{
        onHold(ele)
    });

    container.appendChild(ele)
}

function onHold(ele){
    if(ok==true){
        c=document.querySelector('#colorpicker').value
        ele.style.background=c;
        ele.style.boxShadow=`0 0 2px ${c},0 0 10px ${c}`;
    }
    if(notOk==true && ok==false){
        ele.style.background="#1d1d1d";
        ele.style.boxShadow= "none";

    }

}


document.querySelector('.erase').addEventListener('click',()=>{
    document.querySelector('.erase').classList.toggle('erase-selected')
    turn="eraser"
    if(!document.querySelector('.erase').classList.contains('erase-selected')){
        turn="draw"
    }
})

container.addEventListener('mousedown',()=>{
    ok=true
    if(turn=="eraser"){
        ok=false
        notOk=true
    }
})

container.addEventListener('mouseup',()=>{
    ok=false
    if(turn=="eraser"){
        notOk=false
    }
})

document.querySelector('.reset').addEventListener('click',()=>location.reload())