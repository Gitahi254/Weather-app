// THIS IS RESPONSIBLE FOR INTERACTING WITH THE WEATHER API

class Forecast{
    constructor(){
        this.key = 'xnbTlZ11GVNl5CxtdxOWDY1yGSi5SA34';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return{cityDets,weather};
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query); // Returns a promise and resolves it to that response
        const data = await response.json();

        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        return data[0];
    }
}



// Testing
// getCity('ireland').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));
