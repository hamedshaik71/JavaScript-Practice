document.getElementById('submitButton').addEventListener("click",function(){
    const temperatureDiv = parseInt(document.getElementById('temperatureDiv').value);
    const conversionType = document.getElementById('conversionType').value;
    const result = document.getElementById('result');

    result.innerHTML = "";
    if(isNaN(temperatureDiv)){
        result.innerHTML = "Please Enter a Number!";
        return;
    }

    let conversionTemp;
    if (conversionType === 'toCelsius'){
        conversionTemp=(temperatureDiv-32)*(5/9);
        result.innerHTML = `${temperatureDiv}F is equal to ${conversionTemp.toFixed(2)}C`
    }
    else if(conversionType === 'isFahrenhite'){
        conversionTemp=temperatureDiv*(9/5)+32;
        result.innerHTML = `${temperatureDiv}C is equal to ${conversionTemp.toFixed(2)}F`
    }
});