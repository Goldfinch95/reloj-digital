const slides = document.querySelectorAll('.slide');
const nextSlide = document.getElementById('btnNext');
const prevSlide = document.getElementById('btnPrev');
const buenosAires = document.getElementById('buenosAires');
const newYork = document.getElementById('newYork');
const london = document.getElementById('london');
const moscu = document.getElementById('moscu');
const tokio = document.getElementById('tokio');
const hongKong = document.getElementById('hongKong');
const pcity = document.getElementById('city');
const pWeekDay = document.getElementById('weekDay');
const pDay = document.getElementById('day');
const pMonth = document.getElementById('month');
const pYear = document.getElementById('year');
const pHours = document.getElementById('hours');
const pMinutes = document.getElementById('minutes');
const pSeconds = document.getElementById('seconds');
const pAMPM = document.getElementById('ampm');


const week = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre' , 'Octubre', 'Noviembre', 'Diciembre'];

const cities = ['Buenos Aires', 'New York', 'London', 'Moscu', 'Tokio', 'Hong Kong'];

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

let firstCity = 0;
let lastCity = slides.length -1;



const updateTime = ()=>{
    let time = new Date(),
        weekDay = time.getDay(),
        day = time.getDate(),
        month = time.getMonth(),
        year = time.getFullYear(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds(),
        ampm;
        
        pWeekDay.textContent = week[weekDay];
        pDay.textContent = day;
        pMonth.textContent = months[month];
        pYear.textContent = year;

        pAMPM.textContent = ampm;

        if(minutes < 10){
            minutes = '0' + minutes
        };
        if(seconds < 10){
            seconds = '0' + seconds
        };

        pMinutes.textContent = minutes;
        pSeconds.textContent = seconds;

        if(firstCity == 0){
            pcity.textContent = cities[0];
            pHours.textContent = hours;
            
        };
        if(firstCity == 1){
            pcity.textContent = cities[1];
            pHours.textContent = hours + 2;
        }
        if(firstCity == 2){
            pcity.textContent = cities[2];
            pHours.textContent = hours + 3;
        }
        if(firstCity == 3){
            pcity.textContent = cities[3];
            pHours.textContent = hours + 6;
        }
        if(firstCity == 4){
            pcity.textContent = cities[4];
            pHours.textContent = hours + 12;
        }
        if(firstCity == 5){
            pcity.textContent = cities[5];
            pHours.textContent = hours + 11;
    }
};

    nextSlide.addEventListener('click',()=>{
        if(firstCity === lastCity){
            firstCity = 0;
        }else{
            firstCity++;
        }
        slides.forEach((slide,indx)=>{
            slide.style.transform = `translateX(${100 * (indx - firstCity)}%)`;
        });
    });

    prevSlide.addEventListener('click', ()=>{
        if(firstCity === 0){
            firstCity = lastCity;
        }else{
            firstCity--;
        }
        slides.forEach((slide,indx)=>{
            slide.style.transform = `translateX(${100 * (indx - firstCity)}%)`;
        });
    })
    updateTime();
    const interval = setInterval(updateTime, 1000);


//ubicar la posicion de las imagenes

//prueba en el slider meter un ciclo for

