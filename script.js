let container=document.querySelector('.container')
const squares=10000;

const color=["#056CF2","#05AFF2","#F2E205","#F28705","#A62103"]
let ok=false;
let c="#1d1d1d";


for(let i=0;i<squares;i++){
    let ele=document.createElement('span')
    ele.classList.add('sq')
    ele.addEventListener('mouseover',()=>{
        onHold()
        ele.style.background=c;
        ele.style.boxShadow=`0 0 2px ${c},0 0 10px ${c}`;
    });

    container.appendChild(ele)
}

function onHold(){
    if(ok==true){
        c=c=color[Math.floor(Math.random() * color.length)]
    }
    else{
        c="#1d1d1d"
    }
}

container.addEventListener('mousedown',()=>{
    ok=true
})

container.addEventListener('mouseup',()=>{
    ok=false
})





