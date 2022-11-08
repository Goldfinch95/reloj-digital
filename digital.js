const slider = document.getElementById('slider');
const buenosAires = document.getElementById('buenosAires');
const newYork = document.getElementById('newYork');
const london = document.getElementById('london');
const moscu = document.getElementById('moscu');
const tokio = document.getElementById('tokio');
const hongKong = document.getElementById('hongKong');
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
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

const cities =[
    {city:'Buenos Aires',
    img:"buenos_aires.jpg",
    },
    {
        city:'New York',
        img:"new_york.jpg",
    },
    {
        city:'London',
        img:"london.jpg",
    },
    {
        city:'Moscú',
        img:"moscu.jpg",
    },
    {
        city:'Tokio',
        img:"tokio.jpg",
    },
    {
        city:'Hong Kong',
        img:"hong_kong.jpg",
    }];


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
        pcity.textContent = cities[0].city;

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
        updateTime();

        let time = new Date(),
        hours = time.getHours();

        if(sliderSection[0]){
        pcity.textContent = cities[0].city;
        pHours.textContent = hours;
        };
        if(sliderSection[1]){
        pcity.textContent = cities[1].city;
        pHours.textContent = hours + 2;
        }
        if(sliderSection[2]){
            pcity.textContent = cities[2].city;
            pHours.textContent = hours + 3;
        }
        if(sliderSection[3]){
                pcity.textContent = cities[3].city;
                pHours.textContent = hours + 6;
        }
        if(sliderSection[4]){
                    pcity.textContent = cities[4].city;
                    pHours.textContent = hours + 12;
        }
        if(sliderSection[5]){
            pcity.textContent = cities[5].city;
            pHours.textContent = hours + 11;
}
});
    btnLeft.addEventListener('click', ()=>{
        prev();
        updateTime();
        let time = new Date(),
        hours = time.getHours();

        if(sliderSection[0]){
        pcity.textContent = cities[0].city;
        pHours.textContent = hours;
        };
        if(sliderSection[1]){
        pcity.textContent = cities[1].city;
        pHours.textContent = hours + 2;
        }
        if(sliderSection[2]){
            pcity.textContent = cities[2].city;
            pHours.textContent = hours + 3;
        }
        if(sliderSection[3]){
                pcity.textContent = cities[3].city;
                pHours.textContent = hours + 6;
        }
        if(sliderSection[4]){
                    pcity.textContent = cities[4].city;
                    pHours.textContent = hours + 12;
        }
        if(sliderSection[5]){
            pcity.textContent = cities[5].city;
            pHours.textContent = hours + 11;
}
    })
    updateTime();
    const interval = setInterval(updateTime, 1000);


//buscar la forma en que al cambiar de imagen, cambie la hora segun el pais//
//averiguar el GTM hora local//
