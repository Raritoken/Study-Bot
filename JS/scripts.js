function Timer(f, t){
    setTimeout(f, t);
};

Timer(Help, 20000);
Timer(IntroSwitch, 5000);

var count = 0;
$(function buttonclick() {
    $(".aanmelden_button").click(function() {
        count++;
        window.open("aanmelden.html", "_self");
        if (count >= 2){
            window.alert("STOP TOUCHING ME!");
            count = 0;
        }
    });
});

$(function buttonclick() {
    $(".begrepen_button").click(function() {
        count++;
        window.open("home.html", "_self");
        if (count >= 2){
            window.alert("STOP TOUCHING ME!");
            count = 0;
        }
    });
});
function IntroSwitch(){
    var txt = "";
    if (count == 0) {
        txt = "<br>Klik op \"begrepen\" om verder te gaan.";
        count++;
    }
    else {
        txt = "Even voorstellen, ik ben Studybod en ik ben je hulp<br><br>en toeverlaat bij het maken van je huiswerk.";
        count--;
    }
    document.getElementById("intro").innerHTML = txt;
    Timer(IntroSwitch, 5000);
};
function Help(){
    var txt;
    if (confirm("Het lijkt erop dat je er niet uit kunt komen, klik op OK voor assistentie.")){
        txt = "Op dit moment is Study-Bot erg druk bezig, probeer het later opnieuw."; }
    else{ txt = "Veel succes!"; }
    window.alert(txt);
}