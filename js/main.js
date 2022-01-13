var founs = [
    {name:"redmi",count:0},
    {name:"samsung",count:1},
    {name:"iphone",count:7},
    {name:"vivo",count:5},

]
var isbutton = document.getElementById('button')

var isinput= document.createElement('input')

isinput.setAttribute('type',"text")
isinput.setAttribute('placeholder',"qidiring...")
console.log(isinput)

var classfouns=document.getElementById('founs')

classfouns.appendChild(isinput)



isbutton.addEventListener('click',()=>{

var ulelement=document.createElement('ul')


for(let i = 0;i<founs.length;i++){
    let lielement =document.createElement('li')
    lielement.textContent=`${founs[i].name} | count: ${founs[i].count}`
    ulelement.appendChild(lielement)
}
classfouns.appendChild(ulelement)
})



var isdelet=document.getElementById('delet')





isdelet.addEventListener('click',()=>{
    
   ulelement.removeEventListener(lielement)
})
