function showTime(){
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    var session = "AM";
    if(hours>=12){
        session = "PM";
    }
    if(hours>12){
        hours = hours-12;
    }
    hours=hours<10?"0"+hours:hours;
    mins = mins<10?"0"+mins:mins;
    secs = secs<10?"0"+secs:secs;

    var time = hours + " : " + mins + " : " + secs + " "+ session;
    document.getElementsByTagName('h1')[0].innerText = time; 
    setTimeout(showTime,1000);
};