// API KEY
const API_KEY = '890e01591ad1a3323218f16ef79af821';
const loadWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => displayLoadWeather(data))
}


const setInnerText = (id, value) => {
    document.getElementById(id).innerText = value;
}

const displayLoadWeather = (data) => {
    console.log(data.name);
    setInnerText('temparature', data.main.temp)
    setInnerText('clouds', data.weather[0].main)

}


document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    setInnerText('city', searchFieldValue)
    loadWeather(searchFieldValue);
})

loadWeather('Dhaka')