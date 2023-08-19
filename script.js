function calculatorLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

     if (name1===""|| name2==="") {
        alert("Please Enter Both Names");
     }
     const loverPercentage = Math.floor(Math.random()*100);

     const result = document.getElementById("result");

     
     result.innerHTML = `${name1} and ${name2} 's Love Percentage : ${loverPercentage}%`;


     if (loverPercentage<30) {
        result.innerHTML += "<br> Not a Great Match. Keeping Muh Maarte Raho!";
     }else if(loverPercentage>=30 && loverPercentage<70){
        result.innerHTML += "<br> There is Potential. Sath Raho aur Noon Roti Khao ji";
     } else{
        result.innerHTML+="<br>Oye Balle Balle Ji, MubaRakha.@Love is in the Air";
     }

}