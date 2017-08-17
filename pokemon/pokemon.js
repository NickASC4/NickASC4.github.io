var img, img2, img3, img4;
var darkraigif;
var dragonitegif;
var lucariogif;
var garchompgif;
var blazikengif;
var venusaurgif;
var charizardgif;
var garchomp;
var dragonite;
var blaziken;
var darkrai;
var lucario;
var venusaur;
var charizard;
var dragonitemovesdmg;
var userParty;
var enemyParty;
var userPokemon;
var enemyIndex;
var userIndex;
var enemyPokemon;
var enemymovesdmg;
var enemyMoves;
var battleText;

function preload() {
    img = loadImage("garchomp.png");
    img2 = loadImage("garchompback.png");
    img3 = loadImage("dragonite.png");
    img4 = loadImage("background.jpg");
    darkraigif = loadGif("darkrai.gif");
    dragonitegif = loadGif("dragonite.gif");
    lucariogif = loadGif("lucario.gif");
    garchompgif = loadGif("garchompback.gif");
    blazikengif = loadGif("blazikenback.gif");
    venusaurgif = loadGif("venusaurback.gif");
    charizardgif = loadGif("charizard.gif");
}

function setup() {
    createCanvas(500, 500);

    garchomp = new pokemon("Garchomp", 373, 373, "Dragon Claw", 80, "Earthquake", 30, "Stone Edge", 40, "Fire Blast", 60, garchompgif);
    dragonite = new pokemon("Dragonite", 339, 339, "Thunder Punch", 50, "Fire Punch", 50, "Dragon Claw", 60, "Draco Meteor", 70, dragonitegif);
    blaziken = new pokemon("Blaziken", 317, 317, "Sky Uppercut", 20, "Flamethrower", 30, "Blaze Kick", 50, "Flare Blitz", 80, blazikengif);
    darkrai = new pokemon("Darkrai", 297, 297, "Dark Void", 30, "Dream Eater", 70, "Dark Pulse", 60, "Shadow Ball", 60, darkraigif);
    lucario = new pokemon("Lucario", 302, 302, "Force Palm", 20, "Mach Punch", 30, "Bone Rush", 50, "Aura Sphere", 50, lucariogif);
    venusaur = new pokemon("Venusaur", 367, 367, "Solarbeam", 20, "Sludge Bomb", 30, "Vine Whip", 50, "Frenzy Plant", 80, venusaurgif);
    charizard = new pokemon("Charizard", 330, 330, "Dragon Pulse", 40, "Flamethrower", 50, "Fire Blast", 70, "Fly", 20, charizardgif);

    dragonitemovesdmg = [dragonite.move1dmg, dragonite.move2dmg, dragonite.move3dmg, dragonite.move4dmg];
    userParty = [garchomp, blaziken, venusaur];
    enemyParty = [dragonite, darkrai, lucario];
    enemyIndex = Math.floor(Math.random() * enemyParty.length);
    userIndex = Math.floor(Math.random() * userParty.length);
    enemyPokemon = enemyParty[enemyIndex];
    userPokemon = userParty[userIndex];
    enemyMoves = [enemyPokemon.move1, enemyPokemon.move2, enemyPokemon.move3, enemyPokemon.move4];
    enemymovesdmg = [enemyPokemon.move1dmg, enemyPokemon.move2dmg, enemyPokemon.move3dmg, enemyPokemon.move4dmg];
    battleText = "What move would you like to use?";


}

function pokemon(name, HP, maxHP, move1, move1dmg, move2, move2dmg, move3, move3dmg, move4, move4dmg, figure) {
    this.name = name;
    this.HP = HP;
    this.maxHP = maxHP;
    this.move1 = move1;
    this.move1dmg = move1dmg;
    this.move2 = move2;
    this.move2dmg = move2dmg;
    this.move3 = move3;
    this.move3dmg = move3dmg;
    this.move4 = move4;
    this.move4dmg = move4dmg;
    this.figure = figure;
}



function draw() {
    battleScreen();
    if (enemyPokemon.HP <= 0) {
        enemyPokemon.HP = 0;
        enemyParty.splice(enemyIndex, 1);
        if (enemyParty.length > 0) {
            enemyIndex = Math.floor(Math.random() * enemyParty.length);
            enemyPokemon = enemyParty[enemyIndex];
            enemyPokemon.HP = enemyPokemon.maxHP;
            enemyMoves = [enemyPokemon.move1, enemyPokemon.move2, enemyPokemon.move3, enemyPokemon.move4];
        } else {
            endMusic();
            fill("black");
            rect(0, 0, 600, 600);
            textSize(64);
            fill("white");
            text("The enemy team", 0, 125);
            text("was defeated!", 15, 200)
            text("You win!", 125, 375);
        }
    }
    if (userPokemon.HP <= 0) {
        userPokemon.HP = 0;
        userParty.splice(userIndex, 1);
        if (userParty.length > 0) {
            userIndex = Math.floor(Math.random() * userParty.length);
            userPokemon = userParty[userIndex];
            userPokemon.HP = userPokemon.maxHP;
        } else {
            lossScreen();
        }
    }
}

function mouseClicked() {
    if (mouseX >= 328 && mouseX <= 478 && mouseY >= 350 && mouseY <= 370) {
        setTimeout(function () {
            battleText = userPokemon.name + " used " + userPokemon.move1 + "!";
        }, 250)
        setTimeout(function () {
            enemyPokemon.HP = enemyPokemon.HP - userPokemon.move1dmg;
        }, 750);
        setTimeout(function () {
            battleText = "Enemy " + enemyPokemon.name + " used " + random(enemyMoves) + "!";
        }, 1250)
        setTimeout(function () {
            battleText = "What move would you like to use?"
        }, 2250)
    }
    else if (mouseX >= 328 && mouseX <= 478 && mouseY >= 385 && mouseY <= 405) {
        setTimeout(function () {
            battleText = userPokemon.name + " used " + userPokemon.move2 + "!";
        }, 250)
        setTimeout(function () {
            enemyPokemon.HP = enemyPokemon.HP - userPokemon.move2dmg;
        }, 750);
        setTimeout(function () {
            battleText = "Enemy " + enemyPokemon.name + " used " + random(enemyMoves) + "!";
        }, 1250)
        setTimeout(function () {
            battleText = "What move would you like to use?"
        }, 2250)
    }
    else if (mouseX >= 328 && mouseX <= 478 && mouseY >= 420 && mouseY <= 440) {
        setTimeout(function () {
            battleText = userPokemon.name + " used " + userPokemon.move3 + "!";
        }, 250)
        setTimeout(function () {
            enemyPokemon.HP = enemyPokemon.HP - userPokemon.move3dmg;
        }, 750);
        setTimeout(function () {
            battleText = "Enemy " + enemyPokemon.name + " used " + random(enemyMoves) + "!";
        }, 1250)
        setTimeout(function () {
            battleText = "What move would you like to use?"
        }, 2250)
    }
    else if (mouseX >= 328 && mouseX <= 478 && mouseY >= 455 && mouseY <= 475) {
        setTimeout(function () {
            battleText = userPokemon.name + " used " + userPokemon.move4 + "!";
        }, 250)
        setTimeout(function () {
            enemyPokemon.HP = enemyPokemon.HP - userPokemon.move4dmg;
        }, 750);
        setTimeout(function () {
            battleText = "Enemy " + enemyPokemon.name + " used " + random(enemyMoves) + "!";
        }, 1250)
        setTimeout(function () {
            battleText = "What move would you like to use?"
        }, 2250)
    }
    setTimeout(function () {
        userPokemon.HP = userPokemon.HP - random(enemymovesdmg);
    }, 1750);
}

function endMusic() {
    var music = document.getElementById("music");
    music.pause();
}
function lossScreen() {
    endMusic();
    fill("black");
    rect(0, 0, 600, 600);
    textSize(40);
    fill("white");
    text("Your whole team fainted!", 50, 125);
    text("You blacked out!", 100, 375);
}
function battleScreen() {
    background(img4, 100);
    stroke("black");
    fill("black");
    stroke("white");//UI RECTANGLES
    rect(0, 450, 500, 80);
    rect(310, 300, 200, 200);
    fill("white");//MOVES UNDERLINE AND BOXES
    rect(310, 330, 190, 2);
    rect(328, 350, 150, 20, 20);
    rect(328, 385, 150, 20, 20);
    rect(328, 420, 150, 20, 20);
    rect(328, 455, 150, 20, 20);
    noStroke();
    textSize(20);//ALLY TEXT
    text(battleText, 5, 480);
    textSize(24);
    text("Moves", 370, 322);
    fill("black");
    text(userPokemon.name, 150, 330);
    fill("white");
    rect(153, 340, 100, 15);
    fill("green");
    rect(153, 340, userPokemon.HP / userPokemon.maxHP * 100, 15);
    textSize(16);
    fill("black");
    text(userPokemon.move1, 350, 365);
    text(userPokemon.move2, 350, 400);
    text(userPokemon.move3, 350, 435);
    text(userPokemon.move4, 350, 470);
    textSize(24);
    text(enemyPokemon.name, 250, 50);
    fill("white");
    rect(250, 60, 100, 15);
    fill("green");
    rect(250, 60, enemyPokemon.HP / enemyPokemon.maxHP * 100, 15);
    image(userPokemon.figure, 45, 335);
    image(enemyPokemon.figure, 355, 65);
}