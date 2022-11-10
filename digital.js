const cityImg = document.getElementById('city_img');
const nextImg = document.getElementById('btnNext');
const prevImg = document.getElementById('btnPrev');
const cityName = document.getElementById('city');
const currentDay = document.getElementById('day');
const numberDay = document.getElementById('number');
const monthYear = document.getElementById('month');
const years = document.getElementById('year');
const currentHours = document.getElementById('hours');
const currentMinutes = document.getElementById('minutes');
const currentSeconds = document.getElementById('seconds');
const currentAmpm = document.getElementById('ampm');


const cities = [
{name:'Buenos Aires',
 img:"./images/buenos_aires.jpg",
 hour: 0},
{name:'New York',
 img:"./images/new_york.jpg",
 hour: 2},
{name:'London',
 img:"./images/london.jpg",
 hour: 3},
{name:'Moscú',
 img:"./images/moscu.jpg",
 hour: 6},
{name:'Tokio',
 img:"./images/tokio.jpg",
 hour: 12},
{name:'Hong Kong',
 img:"./images/hong_kong.jpg",
 hour: 11}]

const week = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre' , 'Octubre', 'Noviembre', 'Diciembre'];

const firstCityImg = 0;

const lastCityImg = cities.length -1;

let currentCityImg = 0;

cityName.innerHTML = cities[currentCityImg].name;


const cityUpdate = ()=>{
    if(currentCityImg){ 
        currentHours.innerHTML = cities[currentCityImg].hour + hours;
        if(currentHours.innerHTML > 12){
            currentHours.innerHTML = cities[currentCityImg].hour + hours - 12;
            currentAmpm.innerHTML = 'AM';
            numberDay.innerHTML = day + 1;
            currentDay.innerHTML = week[weekDay + 1];
        }
    }
}


const updateTime = ()=>{
    let time = new Date();
    weekDay = time.getDay();
    day = time.getDate();
    month = time.getMonth();
    year = time.getFullYear();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    let ampm;

    if(hours > 12){
        hours = hours - 12;
        ampm = 'PM'
    }
    else{
        hours = hours;
        ampm = 'AM';
    }

    if(minutes < 10){
        minutes = '0' + minutes;
    };

    if(seconds < 10){
        seconds = '0' + seconds;
    }

    currentDay.innerHTML = week[weekDay];
    numberDay.innerHTML = day;
    monthYear.innerHTML = months[month];
    years.innerHTML = year;
    currentHours.innerHTML = hours;
    currentMinutes.innerHTML = minutes;
    currentSeconds.innerHTML = seconds;
    currentAmpm.innerHTML = ampm;

    cityUpdate();
}



nextImg.addEventListener('click', ()=>{
    updateTime();
    currentCityImg++;
    if(currentCityImg > lastCityImg){
        currentCityImg = firstCityImg;
    }
    cityImg.src = cities[currentCityImg].img;
    cityName.innerHTML = cities[currentCityImg].name;
})

prevImg.addEventListener('click',()=>{
    currentCityImg--;
    if(currentCityImg < firstCityImg){
        currentCityImg = lastCityImg;
    }
    cityImg.src = cities[currentCityImg].img;
    cityName.innerHTML = cities[currentCityImg].name;
})

updateTime();
const interval = setInterval(updateTime, 1000);