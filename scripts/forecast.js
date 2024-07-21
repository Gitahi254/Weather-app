// THIS IS RESPONSIBLE FOR INTERACTING WITH THE WEATHER API

const key = 'xnbTlZ11GVNl5CxtdxOWDY1yGSi5SA34';

// Get weather information
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// Get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query); // Returns a promise and resolves it to that response
    const data = await response.json();

    return data[0];
};



// Testing
// getCity('ireland').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));
