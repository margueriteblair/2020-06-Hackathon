document.addEventListener('DOMContentLoaded', function(){


    let mainDiv = document.createElement('div');
    mainDiv.id = 'primaryDiv';
    document.body.appendChild(mainDiv);
    
    let cityInput = document.createElement('input');
    cityInput.id = 'cityInputBar';
    cityInput.placeholder = 'Enter City Name';
    mainDiv.appendChild(cityInput);

    let cityInputBtn = document.createElement('button');
    cityInputBtn.id = 'cityInputButton';
    cityInputBtn.innerText = 'Click Here To Submit';
    mainDiv.appendChild(cityInputBtn);
    
    document.getElementById('cityInputButton').addEventListener('click', displayCity);


    function displayCity () {
    
        
    }





})