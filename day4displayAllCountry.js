//Use the rest countrie's API URL-> https://restcountries.eu/rest/v2/all and display all the country flag in the console.
const allCountry=new XMLHttpRequest();
//https://restcountries.eu/rest/v2/all
//https://restcountries.com/v3.1/all
allCountry.open('GET','https://restcountries.com/v3.1/all');

allCountry.send();
allCountry.onload=function(){
    const countries=JSON.parse(allCountry.responseText);

    if(allCountry.status === 200){
        countries.forEach(element => {
            console.log(element.flag);
        });
    }


};