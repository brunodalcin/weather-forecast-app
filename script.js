
function insertData(data){
    console.log(data);
    document.querySelector(".city").innerHTML = "Weather in "+data.name;
    document.querySelector(".temp").innerHTML = +Math.floor(data.main.temp)+"°C";
    document.querySelector(".txt-forecast").innerHTML = data.weather[0].description;
    document.querySelector(".humidity").innerHTML = "Humidity: "+data.main.humidity+"%";
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png` 
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + data.name + "')"
}

async function findCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4caf7126751c2fd49fd44ebf01296ddc&lang-en-us&units=metric`).then(response => response.json());
    insertData(data);
}

function search(){
    let input = document.querySelector(".input-city").value;
    findCity(input);
}


