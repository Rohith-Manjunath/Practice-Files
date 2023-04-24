let span=document.getElementById("span")
let body=document.querySelector("body")
body.addEventListener("mousemove",(e)=>{
 


    span.style.top=`${e.clientX}px`
    span.style.bottom=`${e.clientY}px`
    span.style.left=`${e.clientX}px`
    span.style.right=`${e.clientY}px`
   
    
})