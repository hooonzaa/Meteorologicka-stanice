const Weather = [
    {
        name: "Praha",
        temperature: 15,
        climate: "Slunečno"
    },
    {
        name: "Brno",
        temperature: 14,
        climate: "Oblačno"
    },
    {
        name: "Louny",
        temperature: 18,
        climate: "Jasno"
    },
    {
        name: "Žatec",
        temperature: 15,
        climate: "Slunečno"
    },
    {
        name: "Bezdekov",
        temperature: 14,
        climate: "Oblačno"
    },
    {
        name: "Jirkov",
        temperature: 18,
        climate: "Jasno"
    },
    {
        name: "Františkovi Lázně",
        temperature: 8,
        climate: "Zataženo"
    },
    {
        name: "Chomutov",
        temperature: 0,
        climate: "Jasno"
    },
    {
        name: "Most",
        temperature: 18,
        climate: "Slunečno"
    },
    {
        name: "Ústí",
        temperature: -20,
        climate: "Oblačno"
    },
];

function displayWeather(Name) {
    const city = Weather.find(item => item.name === Name);
    if (city) {
        const weatherInfo = `Město: ${city.name}, Teplota: ${city.temperature}°C, Popis: ${city.climate}`;
        document.getElementById("Info").innerText = weatherInfo;
    } 
}