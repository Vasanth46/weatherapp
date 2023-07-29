// 2b37e15d83dce92ca6c0d884c81b3b8d--->open

const apikey="2b37e15d83dce92ca6c0d884c81b3b8d"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function getWeather(city){
    const response= await fetch(apiUrl+city+`&appid=${apikey}`)
    if(response.status===404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    else{
        const data= await response.json()
        const temp=document.querySelector(".temp")
        const card=document.querySelector(".card")
        const datatemp=data.main.temp
             document.querySelector(".city").textContent=data.name
             temp.textContent=Math.round(datatemp)+"°C"
             document.querySelector(".humidity").textContent=data.main.humidity+"%"
             document.querySelector(".wind").textContent=data.wind.speed+" km/hr"
     if(datatemp>=35){
        card.style.background="linear-gradient(90deg,#fa4b4b,#ede419)"
        card.style.color="black"
    }
    else if(datatemp>=30 && datatemp<=35){
        card.style.background="linear-gradient(90deg, rgba(249,157,141,1) 0%, rgba(254,212,71,0.9920343137254902) 42%)"
        card.style.color="black"
    }
    else if(datatemp<=18){
        card.style.background="linear-gradient(90deg,#f6fffd,#a9f6fc)"
        card.style.color="black"
    }
    else{
        card.style.background="linear-gradient(135deg,#00feba,#5b548a)"
        card.style.color="#fff"
       
    }
    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
    

}

const value=document.querySelector(".search input")
searchBtn.addEventListener('click',()=>{
    getWeather(searchBox.value);
})
value.addEventListener('keydown',(e)=>{
if(e.key==="Enter"){
    getWeather(searchBox.value);
}
})



