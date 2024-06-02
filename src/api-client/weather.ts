const apiEndpoint = 'https://api.weatherapi.com/v1/current.json';
const apiKey = '1b797a9764314473a1a83500242205';

export type Weather = {
   current : {
    temp_c : string
    condition : {
        text : string
        icon : string
    }
   } 
}

 export default async function getWeather(city: string): Promise<Weather>  {
    const removeAccents = city =>
  city.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const url = `${apiEndpoint}?q=${removeAccents(city)}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

