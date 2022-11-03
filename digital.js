const pWeekDay = document.getElementById('weekDay');
const pDay = document.getElementById('day');
const pMonth = document.getElementById('month');
const pYear = document.getElementById('year');
const pHours = document.getElementById('hours');
const pMinutes = document.getElementById('minutes');
const pSeconds = document.getElementById('seconds');
const pAMPM = document.getElementById('ampm');

const week = ['Domingo', 'Lunes', 'Martes','Miércoles', 'Jueves','Viernes', 'Sábado'];

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre' , 'Octubre', 'Noviembre', 'Diciembre'];

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

    updateTime();
    const interval = setInterval(updateTime, 1000);

