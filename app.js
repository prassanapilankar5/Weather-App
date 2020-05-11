window.addEventListener("load", () => {
    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let Icon = document.querySelector('.icon');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=12645100472ede5faccb4a0a65102126`;

                fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const temp = data.current.temp;
                    const desc = data.current.weather[0].description;
                    const timezone = data.timezone;
                    const icon = data.current.weather[0].icon;
                    console.log(icon);


                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = desc;
                    locationTimezone.textContent = timezone;
           });    
                    
        });

    }
    function setIcons(icon, iconID){
        const skycons = new skycons({color: "white"});
    }

});




