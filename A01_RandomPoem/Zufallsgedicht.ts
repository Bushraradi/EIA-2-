namespace A01

let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];

let prädikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];

let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

for (let index: number = subjekte.length; index > 0; index--) {
       
    
    let resultat: string = getVerse(subjekte, prädikate, objekte);

    console.log(resultat);

}


function getVerse (_Subjekte: string[], _Prädikate: string[], _Objekte: string[]): string {

    let zeile: string = " ";

    let randomnumber1: number = Math.floor(Math.random() * _Subjekte.length);

    zeile = zeile + _Subjekte.splice(randomnumber1, 1)[0] + " ";

    let randomnumber2: number = Math.floor(Math.random() * _Prädikate.length);

    zeile = zeile + _Prädikate.splice(randomnumber2, 1)[0] + " ";

    let randomnumber3: number = Math.floor(Math.random() * _Objekte.length);

    zeile = zeile + _Objekte.splice(randomnumber3, 1)[0] + " ";

    return zeile;



}

