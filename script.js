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

var spelerX = 640; // x-positie van speler
var spelerY = 640; // y-positie van speler

//plaatjes voor de speler
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;

var spelerImg;

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
var kristalX = 900;
var kristalShown = 1;
var kristal = 0;

//de grond
var grond = 640;

// hoe lang je mag jumpen
var jumping = false;

// de keys die je indrukt met keycode
const ARROW_LEFT = 39;
const ARROW_RIGHT = 37;
const ARROW_UP = 38;
const ARROW_DOWN = 40;
const SHIFT = 16;
const SPACE = 32;
const A = 65;
const D = 68;
const I = 73;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */

// Define variables


var beweegAlles = function() {
 
  // hier bewegen we de speler

  let img2;
  let img4;
  

  
    
    if (keyIsDown(D)) { 
    
      spelerX = spelerX +5;
      animateWalking(); 
    }
  
  
  function animateWalking() {
    
    setInterval(function() {
      spelerImg = (spelerImg === img2) ? img4 : img2;
    }, 500);
  }
  
 

  if (keyIsDown(A)) {
    spelerX = spelerX -5;
    spelerImg = img3;
  }

  if (keyIsDown(SHIFT)) {
    if (keyIsDown (D)) {
      spelerX = spelerX +6;
    }
    
    if (keyIsDown(A)) {
      spelerX = spelerX -6;
    }
  }

  if (keyIsDown(SPACE) && !jumping) {
    jumping = true;
    spelerY = spelerY - 60;
    setTimeout(() => { spelerY = grond; jumping = false; }, 500);
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

  if (spelerX - houseX < 200) {
    fill('green');
    rect(0, 0, 1280, 720);
  }
 };
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

 image(spelerImg, spelerX-50, spelerY-50, 100, 100);

  // punten en health

  // items om op te pakken

    image(img9, kristalX, 620, 75, 75);
 
  // inventaris

 if (inventoryOpened === 1) {
  image(inventoryImg, 10, 10, 1200, 600);

 /* if (kristalPickedUp > 0) {
    image(img9, 15, 15, 75, 75);
  }*/
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
  img5 = loadImage('afbeeldingen/astro-5.png');
  img6 = loadImage('afbeeldingen/astro-6.png');
  img7 = loadImage('afbeeldingen/huis.png');
  img8 = loadImage('afbeeldingen/inventory.png');
  img9 = loadImage('afbeeldingen/kristal.png');
  spelerImg = img1;
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
