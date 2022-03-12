let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let session = document.getElementById('session');

let days = document.getElementById('day');
let months = document.getElementById('month');
let year = document.getElementById('year');
 
// console.log(hour,minute,second);

let displayTime = () =>{
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let sesn = "";
        // console.log(hrs , min , sec);
    if(hrs <10){
        hrs = "0"+hrs;
    };
    if(min <10){
        min = "0"+min;
    } ;
    if(sec <10){
        sec = "0"+sec;
    } ;
    if(hrs >=12){
        sesn = "PM";
    }else{
        sesn = "AM";
    }
    
   
    hour.innerHTML = hrs;
    minute.innerHTML = min;
    second.innerHTML = sec;
    session.innerHTML = sesn;
    console.log(session)
    // return hour , minute,second ;
}
setInterval(displayTime,1000);
let displayDay = () => {
    let date = new Date();
    let day = date.getUTCDate();
    let month = date.getUTCMonth() + 1;
    let yr = date.getUTCFullYear();
    console.log(day,month,yr);
    // if(day <10 ){
    //     day = "0"+ day;
    // }
    day < 10 ? day = "0"+day : day ;

    switch (month) {
        case 1: month = "January" ; break;
        case 2: month = "February"; break;
        case 3: month = "March" ;   break;
        case 4: month = "April" ;   break;
        case 5: month = "May" ;     break;
        case 6: month = "June" ;    break;
        case 7: month = "July" ;    break;
        case 8: month = "August" ;  break;
        case 9: month = "September"; break;
        case 10: month = "October" ; break;
        case 11: month = "November" ;break;
        case 12: month = "December" ;break;
    }
    days.innerHTML = day ;
    months.innerHTML = month ;
    year.innerHTML = yr ;
}
displayDay();
setInterval(displayDay,6000);