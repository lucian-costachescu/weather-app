// API keys NU!!! ar trebui sa fie stocate in forma de text, deoarece nu este sigur
// Fara server propriu, nu putem fi 100% safe. Dar avand in vedere ca OpenWeather este gratit, cel mai rau caz ramanem cu cheia blocata
const API_KEY = "02af79c812b06f74199e287583d73e2c";

// URL de baza pentru call-urile pe OpenWeather API
const API_URL = "https://api.openweathermap.org/data/2.5";

// Query Parameters care vor fi trimisi la fiecare request
// lang=ro => Rezultatele vor veni in limba romana
// units=metric => Unitatea de masura sa fie in grade celsius
// appid => API KEY-ul pentru identificare
const DEFAULT_QUERY_PARAMETERS = `lang=ro&units=metric&appid=${API_KEY}`;


function getCurrentWeather(city) {
    // Construim linkul (endpointul) catre cererea de current weather, folosind informatiile predefinite 
    return fetchAndParse(`${API_URL}/weather?q=${city}&${DEFAULT_QUERY_PARAMETERS}`);
}

function getForecast(city) {
    return fetchAndParse(`${API_URL}/forecast?q=${city}&${DEFAULT_QUERY_PARAMETERS}`);
}