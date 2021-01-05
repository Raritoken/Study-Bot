Timer(Help, 60000);
Timer(IntroSwitch, 7500);

function Timer(f, t){
    setTimeout(f, t);
};

var count = 0;
$(function buttonclick() {
    $(".aanmelden_button").click(function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username == "test" && password == "1234"){
        window.open("aanmelden.html", "_self");}
    });
});

$(function buttonclick() {
    $(".begrepen_button").click(function() {
        window.open("home.html", "_self");
    });
});

$(function buttonclick() {
    $(".homework").click(function() {
        window.open("home.html", "_self");
    });
});

$(function buttonclick() {
    $(".b1").click(function() {
        window.open("aardrijkskunde.html", "_self");
    });
});

$(function buttonclick() {
    $(".b2").click(function() {
        window.open("geschiedenis.html", "_self");
    });
});

$(function buttonclick() {
    $(".progress").click(function() {
        window.open("progressie.html", "_self");
    });
});

$(function buttonclick() {
    $(".settings").click(function() {
        window.open("instellingen.html", "_self");
    });
});

$(function buttonclick() {
    $(".header").click(function() {
        window.open("index.html", "_self");
    });
});

function IntroSwitch(){
    var txt = "";
    if (count == 0) {
        txt = "<br>Klik op \"begrepen\" om verder te gaan.";
        count++; }
    else {
        txt = "Even voorstellen, ik ben Studybod en ik ben je hulp<br><br>en toeverlaat bij het maken van je huiswerk.";
        count--; }
    document.getElementById("intro").innerHTML = txt;
    Timer(IntroSwitch, 5000);
};

function Help(){
    var txt;
    if (confirm("Het lijkt erop dat je er niet uit kunt komen, klik op OK voor assistentie.")){
        txt = "Op dit moment is Studybod erg druk bezig, probeer het later opnieuw."; }
    else { txt = "Veel succes!"; }
    window.alert(txt);
}

$(function buttonclick() {
    ($(".askHelp").add($(".giveHelp"))).click(function() {
        window.alert("Studybod is momenteel opzoek naar een match, een ogenblik geduld alstublieft.");
    });
});