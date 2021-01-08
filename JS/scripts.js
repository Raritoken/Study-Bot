Timer(Help, 15000);
Timer(IntroSwitch, 0);

function Timer(f, t){
    setTimeout(f, t);
};

function Help(){
    var txt;
    if (confirm("Het lijkt erop dat je er niet uit kunt komen, klik op OK voor assistentie.")){
        txt = "Op dit moment is Studybod erg druk bezig, probeer het later opnieuw."; }
    else { txt = "Veel succes!"; }
    window.alert(txt);
    Timer(Help, 60000);
};

var count = 0;
function IntroSwitch(){
    switch(count)
    {
        case (0):
            var txt = "<br>Even voorstellen, ik ben Studybod en ik ben je hulp<br><br>en toeverlaat bij het maken van je huiswerk.";
            count++;
            break;
        case (1):
            txt = "Wist je dat wanneer je moeite hebt met een vak er<br><br>altijd andere leerlingen voor je klaarstaan om je<br><br>te helpen?";
            count++;
            break;
        case (2):
            txt = "Binnen Studybod worden jij en je jaargenoten aan<br><br>elkaar gekoppeld om elkaar verder op weg te<br><br>helpen met het maken van huiswerk.";
            count++;
            break;
        case (3):
            txt = "Kom je er even niet uit?<br><br>Of heb je tijd over om een ander te helpen?<br><br>Schakel Studybod in!";
            count++;
            break;
        default:
            txt = "<br><br>Klik op \"begrepen\" om verder te gaan.";
            count = 1;
            break;
    }
    document.getElementById("intro").innerHTML = txt;
    Timer(IntroSwitch, 5000);
};

//JQuery
$(function Click(){
    $(".aanmelden_button").click(function(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username.toUpperCase() == "TEST" && password == "1234" || username == "" && password == ""){
            window.open("aanmelden.html", "_self");
        }
        // Easter Egg
        else if (username.toUpperCase() == "RONDE TAFEL" && password == "2019"){
            window.alert("BOIIS, WE AT IT AGAIN!");
            window.open("aanmelden.html", "_self");
        }
        else {
            window.alert("username and/or password not correct!");
        }
    });
    $(".begrepen_button").click(function(){
        window.open("home.html", "_self");
    });
    $(".homework").click(function(){
        window.open("home.html", "_self");
    });
    $(".b1").click(function(){
        window.open("aardrijkskunde.html", "_self");
    });
    $(".b2").click(function(){
        window.open("geschiedenis.html", "_self");
    });
    $(".progress").click(function(){
        window.open("progressie.html", "_self");
    });
    $(".settings").click(function(){
        window.open("instellingen.html", "_self");
    });
    $(".header").click(function(){
        window.open("index.html", "_self");
    });
    ($(".askHelp").click(function(){
        var x = document.getElementById("reply");
        var u = document.getElementById("userMatch");
        window.alert("Studybod is momenteel opzoek naar een match, een ogenblik geduld alstublieft.");
        x.style.display = "block";
        u.style.display = "block";

        var data = [
            "Naam:\tFleur Tomsen<br>Goed in:\tAardrijkskunde, geschiedenis & wiskunde A<br>Zoekt hulp voor:\tBiologie & scheikunde",
            "Naam:\tRanicha Khoenkhoen<br>Goed in:\tGeschiedenis & aardrijkskunde<br>Zoekt hulp voor:\tNatuurkunde & wiskunde B",
            "Naam:\tNhorvin Bentulan<br>Goed in:\tWiskunde B, aardrijkskunde & geschiedenis<br>Zoekt hulp voor:\tNatuurkunde & Nederlands"
        ];
        var num = Math.floor(Math.random() * data.length); 
        u.innerHTML = "<span style = \"color:green\">Match gevonden!</span><br><br>" + data[num];
    }));
    ($(".giveHelp").click(function(){
        var x = document.getElementById("reply");
        var u = document.getElementById("userMatch");
        window.alert("Studybod is momenteel opzoek naar een match, een ogenblik geduld alstublieft.");
        x.style.display = "block";
        u.style.display = "block";

        var data = [
            "Naam:\tArtiga Kanthansamy<br>Goed in:\tBiologie & scheikunde<br>Zoekt hulp voor:\tAardrijkskunde & geschiedenis",
            "Naam:\tIsha Moharir<br>Goed in:\tEngels, natuurkunde & biologie<br>Zoekt hulp voor:\tAardrijkskunde & geschiedenis",
        ];
        var num = Math.floor(Math.random() * data.length); 
        u.innerHTML = "<span style = \"color:green\">Match gevonden!</span><br><br>" + data[num];
    }));
});
    
$(function Disabled(){
    $(document).on('keydown',function(event)
    {
    if (event.keyCode == 123 || (event.ctrlKey && event.shiftKey && event.keyCode == 73))
    {
        return false;
    }   
    });
});