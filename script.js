/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

// startscherm
var gif7;
var gif8;
var startscherm = true;

//speler

/*var spelerX = 640; // x-positie van speler
var spelerY = 640; // y-positie van speler*/

var spelerY = 640;
var spelerX = 640;

//plaatjes voor de speler
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img10;
var img11;

var gif1;
var gif2;
var gif3;
var gif4;
var gif5;
var gif6;

var spelerImg;
var lastKeyPressed;

//het huis met plaatjes en posities
var img7;
const houseX = 50;
const houseY = 540;

// plaatjes voor inventory en items in inventory
var inventoryOpened = 0;
var inventoryImg;
var img8;

// kristal
var img9;
var lightsaberX = 900;
var lightsaberShown = 1;

//variabelen voor het springen
var grond = 640;
var spaceCooldown = false;
var springSnelheid = 0;

// de keys die je indrukt met keycode
const SHIFT = 16;
const SPACE = 32;
const A = 65;
const D = 68;
const I = 73;
const E = 69;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */


var beweegAlles = function() {
  // hier bewegen we de speler

  if (keyIsDown(A) && spelerY === grond) {
    spelerX = spelerX + 3;
    spelerImg = gif4;
  }

  if (keyIsDown(D) && spelerY === grond) {
    spelerX = spelerX - 3;
    spelerImg = gif1;
  }

  if (keyIsDown (SHIFT)) {
    if (keyIsDown (A)) {
      spelerX = spelerX - 6;
      spelerImg = gif3;
    }

    if (keyIsDown (D)) {
      spelerX += 6;
      spelerImg = gif2;
    }
  }

  if (keyIsDown(SPACE) && !spaceCooldown) {
    spaceCooldown = true;
    springSnelheid = 4;
  }
  if (spaceCooldown = true) {
    spelerY -= springSnelheid;
    springSnelheid -= 0.2;
  }
  if (spelerY )

  if (!keyIsPressed) {
   spelerImg = gif5;
  }

  // hier maken we de achtergrond zodat we geen streep krijgen
 fill('blue');
 rect(0, 0, 1280, 720);

  // vijand
}
  // kogel
     
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand of speler

  // update punten en health

  // speler tegen item

  // collision met het huis

  if (Speler.x - houseX < 200) {
    fill('green');
    rect(0, 0, 1280, 720);
  }
 };

var pickupSysteem = function() {

  // oppakken lightsaber
  if (Speler.x - lightsaberX < 5 && Speler.x > 850) { 
    if (keyIsDown(E)) {
    lightsaberShown = 0;
  }
 }
}
 /**
 * Tekent spelscherm
 */
var tekenAlles = function() {

  // achtergrond

  image(img7,  houseX, houseY, 200, 150);
  
  fill('black');
  rect(0, 670, 1280, 50);
  
  // vijand

  // kogel

  // speler

 image(spelerImg, Speler.x-50, Speler.y-50, 100, 100);

  // punten en health

  // items om op te pakken
if (lightsaberShown > 0) {
    image(img9, lightsaberX, 620, 75, 75);
}
  // inventaris

 if (inventoryOpened === 1) {
  image(inventoryImg, 10, 10, 1200, 600);

  if (lightsaberShown < 1) {
    image(img9, 100, 75, 150, 150);
  }

 }

}

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

// Deze functie is nodig voor het laden van plaatjes wanneer je een bepaalde knop indrukt

function keyPressed () {
  if (key === 'I' || key === 'i') {

    inventoryOpened = 1 - inventoryOpened;
  }
  if (startscherm === true) {
    if (keyCode === SPACE) {
      setTimeout(() => { startscherm = false; }, 500);
      }
    }
  }

var start = function() {
  if (startscherm === true) {
    fill('black');
    rect(0, 0, 1280, 720);
    image(gif7, 130, 80, 1000, 600);
    image(gif8, 300, 400, 600, 400);
  }
}
  

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/* Preload gebeurt voordat alle andere commands runnen,
en voordat het visuele gedeelte van de game het doet.
*/

function preload() {
  img1 = loadImage('afbeeldingen/newastro.png');
  img2 = loadImage('afbeeldingen/loop1r.png');
  img3 = loadImage('afbeeldingen/newastro2.png');
  img4 = loadImage('afbeeldingen/loop2r.png');
  img5 = loadImage('afbeeldingen/loop1l.png');
  img6 = loadImage('afbeeldingen/loop2l.png');
  img7 = loadImage('afbeeldingen/huis.png');
  img8 = loadImage('afbeeldingen/inventory.png');
  img9 = loadImage('afbeeldingen/lightsaber.png');
  img10 = loadImage('afbeeldingen/jump.png');
  img11 = loadImage('afbeeldingen/jumpleft.png');

  gif1 = loadImage('gifs/walkrslow.gif');
  gif2 = loadImage('gifs/walkrfast.gif');
  gif3 = loadImage('gifs/walklfast.gif');
  gif4 = loadImage('gifs/walklslow.gif');
  gif5 = loadImage('gifs/newastro.gif');
  gif6 = loadImage('gifs/newastro2.gif');
  gif7 = loadImage('gifs/startscherm.gif');
  gif8 = loadImage('gifs/pressspace.gif');
  spelerImg = gif5;
  inventoryImg = img8;
}


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
 // background('blue');
}
/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {

  if (spelStatus === SPELEN) {
    if (startscherm === false) {
    beweegAlles();
    pickupSysteem();
    verwerkBotsing();
    tekenAlles();
    }
    start();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}