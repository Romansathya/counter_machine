
let elemnet=document.getElementById("para");
let button1=document.getElementById("button1").style.backgroundColor="green";
let button2=document.getElementById("button2").style.backgroundColor="black";
let button3=document.getElementById("button3").style.backgroundColor="blue";


function move(){
  let el=elemnet.textContent;
  let updateElment=parseInt(el)+1;
  if(updateElment>0){
  
   elemnet.style.color="green";
  
  }
  else if(updateElment<0){
  
    elemnet.style.color="blue";
   
  }
  else{
     elemnet.style.color="black";
    
  }
  elemnet.textContent=updateElment;
}

function back(){
  let el=elemnet.textContent;
  let updateElment=parseInt(el)-1;
  if(updateElment>0){
   
   elemnet.style.color="green";
   
  }
  else if(updateElment<0){
  
    elemnet.style.color="blue";
    
  }
  else{
     elemnet.style.color="black";
   
  }
  elemnet.textContent=updateElment;

}

function reset(){
  let s=0;
  elemnet.textContent=s;
  elemnet.style.color="black";


}

