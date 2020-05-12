window.addEventListener("load", () => {
    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

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
                    const timezone = data.timezone;
                    const icon = data.current.weather[0].icon;
                    const main = data.current.weather[0].main;
                    var myString = JSON.stringify(data.current.weather[0]);
                    document.querySelector.innerText = myString;

                    console.log(myString);


                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = main;
                    locationTimezone.textContent = timezone;

                    setIcons(desc, document.querySelector('.desc'))
           });    
                    
        });

    }
    function setIcons(desc, iconID){
        const skycons = new Skycons({color: "white"});
        const currentDescription = desc.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, skycons[currentDescription]);
    }

});




