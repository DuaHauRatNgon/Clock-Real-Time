function showTime() {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    var clock = document.querySelector("#MyClockDisplay");
    var h = document.querySelector("#hour");
    var m = document.querySelector("#min");
    var s = document.querySelector("#sec");

    h.innerHTML = hour;
    m.innerHTML = min;
    s.innerHTML = sec;

    var amPm = document.getElementById("amPm");
    var buoi;
    if(hour < 12) buoi = "AM";
    else buoi = "PM";
    amPm.innerHTML = buoi;

    

    setTimeout(showTime, 1000);
}

showTime();

function playMusic(){
        var music = document.getElementById("myAudio");
        music.play();
    }

playMusic();
