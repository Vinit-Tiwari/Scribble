let container=document.querySelector('.container')
const squares=3000;
const color=["#056CF2","#05AFF2","#F2E205","#F28705","#A62103"]

for(let i=0;i<squares;i++){
    let ele=document.createElement('span')
    ele.classList.add('sq')

    ele.addEventListener('mouseover',()=>{
        const c=color[Math.floor(Math.random() * color.length)]
        ele.style.background=c;
        ele.style.boxShadow=`0 0 2px ${c},0 0 10px ${c}`;
    });

    ele.addEventListener('mouseout',()=>{
        ele.style.background="#1d1d1d";
        ele.style.boxShadow="0 0 2px #000"
    });0
    container.appendChild(ele)
}