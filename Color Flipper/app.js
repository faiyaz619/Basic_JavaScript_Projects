const colors = ["green", "red", "blue", "orange","yellow","crimson","pink","grey","black","lime","navy","lime","teal","silver"];
const btn= document.getElementById('btn');
const color=document.querySelector(".color");

btn.addEventListener('click', function(){
    //color range between 0-3

   const randonNumber=getRandonNumber();
   document.body.style.backgroundColor=colors[randonNumber];
   color.textContent= colors[randonNumber];

})
function getRandonNumber(){
    return Math.floor(Math.random() *colors.length);
}