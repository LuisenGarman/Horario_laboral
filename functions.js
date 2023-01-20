var hh = 0
var mm = 0
var ss = 0

var hb = 0
var mb = 0
var sb = 0

var hl = 0
var ml = 0
var sl = 0

var tempo = 1000
var cron;

function Start() {
    cron = setInterval(() => { timer() }, tempo)
}

function Pause() {
    clearInterval(cron)
}

function Stop() {
    clearInterval(cron)
    hh = 0
    mm = 0
    ss = 0

    document.getElementById("counter").innerText = '00:00:00'
}

function timer() {
    ss++
    if (ss == 60) {
        ss = 0
        mm++
        if (mm == 60) {
            mm = 0
            hh++
            if (hh == 24) {
                hh = 0
            }
        }
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    document.getElementById("counter").innerText = format

}

while(ss>2){
    sb = ss;
    sb = sb - ss;


    var formatBrake = (hb < 10 ? '0' + hb : hb) + ':' + (mb < 10 ? '0' + mb : mb) + ':' + (sb < 10 ? '0' + sb : sb)
    document.getElementById("Brake").innerText = formatBrake
}