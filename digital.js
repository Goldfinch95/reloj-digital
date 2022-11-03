const slider = document.getElementById('slider');
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
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

const next = ()=>{
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500);
}

const prev = ()=>{
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 500);
}

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

        if(hours >= 12){
            hours = hours - 12;
            ampm = 'PM';
        }
        else{
            ampm = 'AM';
        }
        if(hours == 0){
            hours = 12;
        };

        pHours.textContent = hours;
        pAMPM.textContent = ampm;

        if(minutes < 10){
            minutes = '0' + minutes
        };
        if(seconds < 10){
            seconds = '0' + seconds
        };

        pMinutes.textContent = minutes;
        pSeconds.textContent = seconds;

    };


    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    btnRight.addEventListener('click',()=>{
        next();
    });
    btnLeft.addEventListener('click', ()=>{
        prev();
    })
    updateTime();
    const interval = setInterval(updateTime, 1000);

