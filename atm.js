let balance= localStorage.getItem('balance')? parseFloat(localStorage.getItem('balance')):0;
let paracekme=document.getElementById("wButton")

  function updateBalanceDisplay(){
 document.getElementById("balanceDisplay").textContent="Bakiyeniz " + balance + " TL";
 localStorage.setItem('balance', balance.toString());

}



updateBalanceDisplay()

paracekme.addEventListener("click", function(event){
   let amount = parseInt(document.getElementById("wAmount").value)
   if(!isNaN(amount)&& amount > 0 && amount<=balance){
      balance -= amount;
      updateBalanceDisplay();
   }else{
      alert("Geçersiz miktar! Lütfen bakiyeyi aşmayan ve pozitif bir miktar giriniz!")
   }
});

document.getElementById("dButton").onclick=function(){
   let amount= parseInt(document.getElementById("dAmount").value)
   if(!isNaN(amount)&&amount>0)
   {
      balance+=amount;
      updateBalanceDisplay();
      
   }else{
     alert("Lütfen pozitif bir sayı girin!")
   }

}
;
