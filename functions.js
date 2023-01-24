var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

var hb = 0;
var mb = 0;
var sb = 10;

var hl = 0;
var ml = 0;
var sl = 15;

var he = 0;
var me = 0;
var se = 40;

var temp;

function Start() {
    cron = setInterval(() => { timer() }, tempo);
    temp = setInterval(() => { Brake() }, tempo);
    temp = setInterval(() => { Lunch() }, tempo);
    temp = setInterval(() => { EndShift() }, tempo);


}

function Pause() {
    clearInterval(cron);
    clearInterval(temp);
}

function Stop() {
    clearInterval(cron);
    clearInterval(temp);

    hh = 0;
    mm = 0;
    ss = 0;

    hb = 0;
    mb = 0;
    sb = 10;

    hl = 0;
    ml = 0;
    sl = 15;

    he = 0;
    me = 0;
    se = 40;

    document.getElementById("counter").innerText = '00:00:00';
    document.getElementById("Brake").innerText = '00:00:10';
    document.getElementById("Lunch").innerText = '00:00:15';
    document.getElementById("EndShift").innerText = '00:00:40';



}

function timer() {
    ss++;
    if (ss == 60) {
        ss = 0;
        mm++;
        if (mm == 60) {
            mm = 0;
            hh++;
            if (hh == 24) {
                hh = 0;
            }
        }
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById("counter").innerText = format;

}

function Brake(){
    if(ss >= 5){
        sb--;
        clearInterval(cron);
        if(sb <= 00){
            sb = 0;
            e = 1;
            if(e == 1){
                timer()
            }
        }
    }

    var BrFormat = ('0' + hb) + ':' + (mb < 10 ? '0' + mb : mb) + ':' + (sb < 10 ? '0' + sb : sb);
    document.getElementById("Brake").innerText = BrFormat;
}

function Lunch(){
    e = 2;
    if(ss >= 10){
        sl--;
        clearInterval(cron);
        if(sl <= 00){
            sl = 0;
            if(e == 2){
                timer();
            }
        }
    }

    var LuFormat = ('0' + hl) + ':' + (ml < 10 ? '0' + ml : ml) + ':' + (sl < 10 ? '0' + sl : sl);
    document.getElementById("Lunch").innerText = LuFormat;
}

function EndShift(){
    se--;
    if(se <= 00){
        se = 0;
        if(e == 2){
        clearInterval(cron);
        }
    }

    var EnFormat = ('0' + he) + ':' + (me < 10 ? '0' + me : me) + ':' + (se < 10 ? '0' + se : se);
    document.getElementById("EndShift").innerText = EnFormat;
}