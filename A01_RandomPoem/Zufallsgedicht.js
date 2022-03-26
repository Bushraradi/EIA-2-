var subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
var prädikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
var objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
for (var index = subjekte.length; index > 0; index--) {
    var resultat = getVerse(subjekte, prädikate, objekte);
    console.log(resultat);
}
function getVerse(_Subjekte, _Prädikate, _Objekte) {
    var zeile = " ";
    var randomnumber1 = Math.floor(Math.random() * _Subjekte.length);
    zeile = zeile + _Subjekte.splice(randomnumber1, 1)[0] + " ";
    var randomnumber2 = Math.floor(Math.random() * _Prädikate.length);
    zeile = zeile + _Prädikate.splice(randomnumber2, 1)[0] + " ";
    var randomnumber3 = Math.floor(Math.random() * _Objekte.length);
    zeile = zeile + _Objekte.splice(randomnumber3, 1)[0] + " ";
    return zeile;
}
//# sourceMappingURL=Zufallsgedicht.js.map