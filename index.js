var apiKey="7d815886aa4d5aab754e5f941caa4666";
//var apiUrl="https://api.openweathermap.org/data/2.5/weather&appid=7d815886aa4d5aab754e5f941caa4666&units=metric";

async function checkWeather(city){
    const response=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=7d815886aa4d5aab754e5f941caa4666&units=metric");
    var data=await response.json();
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
        document.querySelector(".humi").innerHTML=data.main.humidity+" %";
        document.querySelector(".wind p").innerHTML=data.wind.speed+" Km/h";
        if(data.weather[0].main.toLowerCase()=="clouds"){
            document.querySelector(".weather_img").setAttribute("src","../images/clouds.png");
        }
        else if(data.weather[0].main.toLowerCase()=="clear"){
            document.querySelector(".weather_img").setAttribute("src","../images/clear.png");
        }
        else if(data.weather[0].toLowerCase()=="drizzle"){
            document.querySelector(".weather_img").setAttribute("src","../images/drizzle.png");
        }
        else if(data.weather[0].toLowerCase()=="humidity"){
            document.querySelector(".weather_img").setAttribute("src","../images/humidity.png");
        }
        else if(data.weather[0].toLowerCase()=="mist"){
            document.querySelector(".weather_img").setAttribute("src","../images/mist.png");
        }
        else if(data.weather[0].toLowerCase()=="rain"){
            document.querySelector(".weather_img").setAttribute("src","../images/rain.png");
        }
        else if(data.weather[0].toLowerCase()=="snow"){
            document.querySelector(".weather_img").setAttribute("src","../images/snow.png");
        }
    }
    
    
    

}
var searchBox=document.querySelector(".search input");
var searchBtn=document.querySelector(".search button");
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});



