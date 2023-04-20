let input =document.getElementById("input")
let button=document.getElementById("btn")
let h1=document.getElementById("h1")


async function api(){
   await fetch(`http://api.weatherapi.com/v1/current.json?key=d42666fcd103424dabe112253232004&q=${input.value}&aqi=no`)
   .then(response=>response.json())
   .then(data=>h1.textContent=`${input.value} : ${data.current.temp_c}`)
   .catch(error=>console.log(error))
   


}



button.addEventListener("click",()=>{

    api()
})
