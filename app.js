document.getElementById("generate-btn").addEventListener('click',()=>{
   const randomPin= parseInt(Math.random()*10000);
   let pinNumber=randomPin+'';
   let lengthPin=pinNumber.length;
   for(let i=0;i<4-lengthPin;i++)
   {
       pinNumber='0'+pinNumber;
   }
   document.getElementById("generate-pin").value=pinNumber;
});
