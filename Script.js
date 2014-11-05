///////////////////////////////////////////////////////////////////////////////////////////////////
//                                    Variables, Classes, Functions                              //
///////////////////////////////////////////////////////////////////////////////////////////////////

var allTypes = ["Fighter", "Spearman", "Archer", "Knight", "Assassin"];
var allSkills = ["StrUp", "DefUp", "SpdUp", "HpUp", "Allergy", "Cloak", "Rock", "Look", "Snack"];
var allPlayers = [];
var user;
var challenger = 0;
var message = "";
var distance;

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



function drownDownFill() {
    var select = document.getElementById('usrType');
    for (var i = 0; i < allTypes.length; i++) {
        var opt = allTypes[i];
        var element = document.createElement("option");
        element.textContent = opt;
        element.value = opt;
        select.appendChild(element);
    }

    var select2 = document.getElementById('usrSkill');
    for (var i = 0; i < allSkills.length; i++) {
        var opt2 = allSkills[i];
        var element2 = document.createElement("option");
        element2.textContent = opt2;
        element2.value = opt2;
        select2.appendChild(element2);
    }
}

window.onload = function () {
    drownDownFill();
}

function displayModal() {
    element = document.getElementById("modal");
    element.style.visibility = (element.style.visibility == "visible") ? "hidden" : "visible";
}

function createGame() {
    displayModal();

    genPlayers(9);

    var hp  = document.getElementById("usrHp").value;
    var str = document.getElementById("usrStr").value;
    var def = document.getElementById("usrDef").value;
    var spd = document.getElementById("usrSpd").value;
    var type = document.getElementById("usrType").value;
    var skill = document.getElementById("usrSkill").value;
    user = new Player(hp, str, def, spd, type, skill);

    message = "<ul>";
    message += "<li>Welcome to the Pillow Arena of DOOOOOOOM! Challenger are you ready to rumble?</li>";
    $('#displayBox').html(message);

    var inp = "<a href='#' onclick='gameTurn()'>ready?</a>";
    $('#inputBox').html(inp);
}

function printStatus() {
    var status = "<table><tr>"
    status += "<td><b>You:</b><br />";
    status += "health: " + user.hp + "<br />";
    status += "strength: " + user.str + "<br />";
    status += "defense: " + user.def + "<br />"
    status += "speed: " + user.spd + "<br />";
    status += "Class: " + user.type + "<br />";
    status += "Skill: " + user.skill + "<br /></td>";

    status += "<td><b>Opponent:</b><br />";
    status += "health: " + allPlayers[challenger].hp + "<br />";
    status += "strength: " + allPlayers[challenger].str + "<br />";
    status += "defense: " + allPlayers[challenger].def + "<br />"
    status += "speed: " + allPlayers[challenger].spd + "<br />";
    status += "Class: " + allPlayers[challenger].type + "<br />";
    status += "Skill: " + allPlayers[challenger].skill + "<br /></td></tr>";

    status += "<tr><td>Distance between you two: " + distance + "<br /></td></tr>";

    status += "<tr><td>insert move things here</td></tr>";

    status += "</table>";
    $('#inputBox').html(status);
}

function gameTurn() {
    distance = 5;

    message += "<li>You are currently facing Opponent #" + challenger + "!</li>";
    message += "<li>3...</li>";
    message += "<li>2...</li>";
    message += "<li>1...</li>";
    message += "<li>GO!</li>";

    $('#displayBox').html(message);
    printStatus();
}