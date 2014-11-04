///////////////////////////////////////////////////////////////////////////////////////////////////
//                                    Variables, Classes, Functions                              //
///////////////////////////////////////////////////////////////////////////////////////////////////

var allTypes = ["Fighter", "Spearman", "Archer", "Knight", "Assassin"];
var allSkills = ["StrUp", "DefUp", "SpdUp", "HpUp", "Allergy", "Cloak", "Rock", "Look", "Snack"];
var allPlayers = [];

function Player(hp, str, def, spd, type, skill) {
    this.hp = hp;
    this.str = str;
    this.def = def;
    this.spd = spd;
    this.type = type;
    this.skill = skill;
}

function genPlayers(numPlayers) {
    for (var i = 0; i < numPlayers; ++i) {
        var hp = Math.floor((Math.random() * 10) + 1);
        var str = Math.floor((Math.random() * 10) + 1);
        var def = Math.floor((Math.random() * 10) + 1);
        var spd = Math.floor((Math.random() * 10) + 1);
        var typeHelper = Math.floor((Math.random() * 5));
        var skillHelper = Math.floor((Math.random() * 9));
        var type = allTypes[typeHelper];
        var skill = allSkills[skillHelper];

        var p = new Player(hp, str, def, spd, type, skill);
        allPlayers.push(p);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
//                                           Running                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////

genPlayers(9);
var out = "<ul>";

for (var i = 0; i < 9; ++i) {
    out += "<li>";
    out += "hp: " + allPlayers[i].hp + " str: " + allPlayers[i].str;
    out += " def: " + allPlayers[i].def + " spd: " + allPlayers[i].spd;
    out += " type: " + allPlayers[i].type + " skill: " + allPlayers[i].skill;
    out += "</li>";
}

window.onload = function () {
    $('#displayBox').html(out);
}

function displayModal() {
    element = document.getElementById("modal");
    element.style.visibility = (element.style.visibility == "visible") ? "hidden" : "visible";
}