
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

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var img1;
var img2;
var img3;
var img4;
var img5;
var img6;

var spelerImg;

const ARROW_LEFT = 39;
const ARROW_RIGHT = 37;
const ARROW_UP = 38;
const ARROW_DOWN = 40;
const CTRL = 17;

const SPACE = 32;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
  if(keyIsDown(ARROW_LEFT)) {
    spelerX = spelerX +1;
    spelerImg = img1;
  }

  if (keyIsDown(ARROW_RIGHT)) {
    spelerX = spelerX -1;
    spelerImg = img3;
  }

  if (keyIsDown(SPACE)) {
    if (keyIsDown(ARROW_RIGHT)) {
    spelerY = spelerY -10;
    setTimeout(() => spelerY = spelerY +10, 500); 
  }
    else {
    spelerY = spelerY -10;
    setTimeout(() => spelerY = spelerY +10, 500); 
    }
  }

  if (keyIsDown(CTRL)) {
    if (keyIsDown (ARROW_LEFT)) {
      spelerX = spelerX +2;
    }
    else if (keyIsDown(ARROW_RIGHT)) {
      spelerX = spelerX -2;
    }
  }

  fill('blue');
  rect(0, 0, 1280, 720);

  // vijand

  // kogel
}

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {

  // achtergrond

  // vijand

  // kogel

  // speler

image(spelerImg, spelerX-50, spelerY-50, 100, 100);

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/* Preload gebeurt voordat alle andere commands runnen,
en voordat het visuele gedeelte van de game het doet.
*/

function preload() {
  img1 = loadImage('afbeeldingen/astro-1.png');
  img2 = loadImage('afbeeldingen/astro-2.png');
  img3 = loadImage('afbeeldingen/astro-3.png');
  img4 = loadImage('afbeeldingen/astro-4.png');
  img5 = loadImage('afbeeldingen/astro-5.png');
  img6 = loadImage('afbeeldingen/astro-6.png');
  spelerImg = img1;
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
  background('blue');
}
/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
