var today  = new Date();
var pday = "";
var day = today.getDay();  
switch (day) {
    case 0:
        pday =  "SUN";
        break;

    case 1:
        pday =  "MON";
        break;

    case 2:
        pday =  "TUE";
        break;

    case 3:
        pday =  "WED";
        break;

    case 4:
        pday =  "THU";
        break;

    case 5:
        pday =  "FRI";
        break;

    case 6:
        pday =  "SAT";
        break;

    default:
        break;
}
document.getElementById('day').innerHTML = pday;
setInterval(function () {
    var hours = moment().format('h');     
    var minute = moment().format('mm');     
    var seconds = moment().format('ss'); 
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = seconds;
},0)
