// Use the same rest countries and print all countries names, regions, sub-region and populations.
const ctryRequest = new XMLHttpRequest();
//https://restcountries.eu/rest/v2/all
//https://restcountries.com/v3.1/all
ctryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
ctryRequest.send();
ctryRequest.onload = function () {

    console.log("HTTP status code ::"+ctryRequest.status);
    if(ctryRequest.status === 200){
        const countries = JSON.parse(ctryRequest.responseText);

        for (var index in countries) {
            console.log('Country Name:' + countries[index].name.common,' Region:'+countries[index].region, ' Sub-Region:'+countries[index].subregion, ' Population: '+ countries[index].population);
        }
    }
}
ctryRequest.onerror=function(){
        console.log("HTTP status code ::"+ctryRequest.status);
}


