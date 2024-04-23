const Weather = [
    {
        name: "Praha",
        temperature: 15,
        description: "Slunečno"
    },
    {
        name: "Brno",
        temperature: 14,
        description: "Oblačno"
    },
    {
        name: "Louny",
        temperature: 18,
        description: "Jasno"
    },
    {
        name: "Žatec",
        temperature: 15,
        description: "Slunečno"
    },
    {
        name: "Bezdekov",
        temperature: 14,
        description: "Oblačno"
    },
    {
        name: "Jirkov",
        temperature: 18,
        description: "Jasno"
    },
    {
        name: "Františkovi Lázně",
        temperature: 8,
        description: "Zataženo"
    },
    {
        name: "Chomutov",
        temperature: 0,
        description: "Jasno"
    },
    {
        name: "Most",
        temperature: 18,
        description: "Slunečno"
    },
    {
        name: "Ústí",
        temperature: -20,
        description: "Oblačno"
    },
];

function displayWeather(Name) {
    const city = Weather.find(item => item.name === Name);
    if (city) {
        const weatherInfo = `Město: ${city.name}, Teplota: ${city.temperature}°C, Popis: ${city.description}`;
        document.getElementById("Info").innerText = weatherInfo;
    } 
}