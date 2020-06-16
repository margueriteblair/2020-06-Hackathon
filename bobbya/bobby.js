

document.addEventListener('DOMContentLoaded', function () {


    navigator.geolocation.getCurrentPosition(onGeolocateSuccess,onGeolocateError);


        function onGeolocateSuccess (coordinates){
              
            const {latitude, longitude} = coordinates.coords;
            console.log(`Found coordinates: ${latitude}, ${longitude}`)
            const url = "http://api.openweathermap.org/data/2.5/weather?";
            const lateq = "lat=";
            let latitudeURL = latitude;
            const longeq = "&lon="
            let longitudeURL = longitude;
            const appid ='&appid=';
            const apiKey = '303ec9718ea692dafe80b2c057c74bf9';

            let combinedURL = url+lateq+latitudeURL+longeq+longitudeURL+appid+apiKey;

            let xhr = new XMLHttpRequest();
            xhr.open('GET', combinedURL, true);
            xhr.onload = function () {
                if (this.readyState === 4 && this.status === 200){
                    console.log(this.responseText);
                    let jsonText = JSON.parse(this.responseText);
                    console.log(jsonText);
                    let degreesF = (((jsonText.main.temp)-273.15)*(9/5)+32).toFixed(2)
                  //  document.getElementById("weatherInformation").innerHTML = `${jsonText.name}`
                }else if (this.status === 404) {
                    console.log('404 ERROR')
                };
        
                
            }
            xhr.send();
        }
        
        function onGeolocateError (error) {
            console.warn(error.code, error.message);
            
            if (error.code === 1 ){
                // no available location
            } else if (error.code === 2){
                
            } else if (error.code === 3 );
        
        }
      
    })





