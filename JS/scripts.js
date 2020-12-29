function Timer(f, t){
    setTimeout(f, t);
};

Timer(Help, 5000);

var count = 0;
$(function buttonclick() {
    $(".aanmelden_button").click(function() {
        count++;
        if (count >= 2){
            window.alert("STOP TOUCHING ME!");
            count = 0;
        }
    });
});

function Help(){
    var txt;
    if (confirm("Het lijkt erop dat je er niet uit kunt komen, klik op OK voor assistentie.")){
        txt = "Op dit moment is Study-Bot erg druk bezig, probeer het later opnieuw."; }
    else{ txt = "Veel succes!"; }
    window.alert(txt);
}