document.getElementById('checkButton').addEventListener("click",function () {
    const ageValue = parseFloat(document.getElementById("ageInput").value);
    const resultShow = document.getElementById("result");
    resultShow.innerHTML = "";
    if(isNaN(ageValue) || ageValue<0){
        resultShow.innerHTML = "Please Enter a valid age";
        return;
    }

    if(ageValue>=18){
        resultShow.innerHTML+="You are Eligible to vote <br/>";
    }
    else{
        resultShow.innerHTML+="You are not Eligible to Vote <br/>";
    }

    if (ageValue>=18){
        resultShow.innerHTML +="You are Eligible to Drink<br/>";
    }
    else{
        resultShow.innerHTML += "You are not Eligible to Drink <br/>";
    }

    if (ageValue>=16){
        resultShow.innerHTML +="You are Eligible to Drive<br/>";
    }
    else{
        resultShow.innerHTML += "You are not Eligible to Drive<br/>";
    }
});