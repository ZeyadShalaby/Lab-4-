var AM_PM = "";
var hour = Number(prompt("Please Enter an Hour"));

if (hour < 12){
    AM_PM="AM";
}
else{
    AM_PM ="PM";
}

if (hour == 0){
    AM_PM ="12 AM";
}

if (hour > 12){
    hour = hour-12
}

alert (`The time is ${hour} ${AM_PM}`)