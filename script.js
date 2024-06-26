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
var spelStatus = GAMEOVER;

// startscherm
var gif7;
var gif8;
var startscherm = true;

//speler
var spelerY = 640;
var spelerX = 640;

//plaatjes 
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img10;
var img11;
var img12;
var img13;

var gif1;
var gif2;
var gif3;
var gif4;
var gif5;
var gif6;
var gif9;

var spelerImg;
var spelerFacing = 'rechts';

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
var springSnelheid = 8;
var gFactor = 0.4;

// de keys die je indrukt met keycode
const SHIFT = 16;
const SPACE = 32;
const A = 65;
const D = 68;
const I = 73;
const E = 69;

// of je de KeyBinds kan zien of niet
var tipsShown = 1;

// Canvas Update
var canvasStatus = 1;

var health = 5;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */


var beweegAlles = function() {
  // hier bewegen we de speler

  if (keyIsDown(A) ) {
    spelerImg = gif4;
    spelerX = spelerX - 3;
    spelerFacing = 'links';
    if (keyIsDown(SHIFT)) {
      spelerImg = gif3;
      spelerX = spelerX -6;
     }
  } else if (keyIsDown (D)) {
    spelerImg = gif1; 
    spelerX = spelerX + 3;
    spelerFacing = 'rechts';
    if (keyIsDown(SHIFT)) {
      spelerX = spelerX + 6;
      spelerImg = gif2;
    }
  } else {
    if (spelerFacing === 'rechts'){
      spelerImg = gif5;
    } else { spelerImg = gif6; }
  }
// SPRINGEN

  if (keyIsDown(SPACE) && !spaceCooldown) {
    spaceCooldown = true;
    springSnelheid = 10;
  }
  
  if (spaceCooldown = true) {
    spelerY = spelerY - springSnelheid;
    springSnelheid = springSnelheid - gFactor;
  }
  
  if (spelerY > grond) {
    spaceCooldown = false;
    spelerY = grond;
  }

  // hier maken we de achtergrond zodat we geen streep krijgen
 fill('blue');
 rect(0, 0, 3000, 2500);

}
     
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {

  if (spelerX > 1275) { 
    spelerX = 40;
    canvasStatus++;
   }
   
  if (spelerX <10 && canvasStatus !== 1) {
    spelerX = 1260;
    canvasStatus--;
  }
  if (spelerX < 10 && canvasStatus === 1) {
    spelerX = 10;
   }

   if (spelerX > 300 && spelerX < 530 && spelerY < 535) {
      grond = 530;
    } else if (spelerX > 610 && spelerX < 830 && spelerY < 451) {
       grond = 450; 
   }else { grond = 640; }
       
 };


var pickupSysteem = function() {

  // oppakken lightsaber
  if (spelerX > 750 && spelerX < 1200 && spelerY === grond) { 
    if (keyIsDown(E)) {
    lightsaberShown--;
  }
 }
}
 /**
 * Tekent spelscherm
 */
var tekenAlles = function() {

  // achtergrond bij canvas 1
  if (canvasStatus < 2) {
    image(img7,  houseX, houseY, 200, 150);
  }
  fill('black');
  rect(0, 670, 1280, 80);

  // achtergrond bij canvas 2

  if (canvasStatus === 2) {

    //lava
    image (gif9, 130,530,550,190);
    image (gif9, 500,530,550,190);
    image (gif9, 800,530,550,190);

    //platormen
    image(img12, 330, 480, 180, 100);
    image(img12, 630, 400, 180, 100);

    if (spelerX > 200 && spelerY === 640) {
      health = 0;
     }

  }

  // KeyBind tips
  if (tipsShown > 0) {
  text("press Q to hide this tab ", 50, 50);
  text("use A and D to move", 50, 80);
  text("press SPACE to jump", 50, 110);
  text("press E to pick items up and I to open inventory", 50, 140);
  text("hold SHIFT to sprint twice as fast!", 50, 170);
  textSize(20);
  }

  text(spelerX, 50, 50);
  text(spelerY, 50, 80);
  textSize(20);


  // speler

 image(spelerImg, spelerX-50, spelerY-50, 100, 100);

  // items om op te pakken
if (lightsaberShown > 0 && canvasStatus === 1) {
    image(img9, lightsaberX, 620, 75, 75);
}
  // inventaris

 if (inventoryOpened === 1) {
  image(inventoryImg, 10, 10, 1200, 600);

  if (lightsaberShown < 1) {
    image(img9, 100, 75, 150, 150);
  }
 }



 if (health > 4) {
  fill('red');
  rect(1200, 50, 40, 40);
 }
 if (health > 3) {
  fill('red');
  rect(1150, 50, 40, 40);
 }
 if (health > 2) {
  fill('red');
  rect(1100, 50, 40, 40);
 }
 if (health > 1) {
  fill('red');
  rect(1050, 50, 40, 40);
 } 
 if (health > 0) {
  fill('red');
  rect(1000, 50, 40, 40);
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
    
    if (key === 'Q' || key === 'q') {
      tipsShown = 1 -  tipsShown;
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
  img12 = loadImage('afbeeldingen/platform.png');
  img13 = loadImage('afbeeldingen/minigolem.png');

  gif1 = loadImage('gifs/walkrslow.gif');
  gif2 = loadImage('gifs/walkrfast.gif');
  gif3 = loadImage('gifs/walklfast.gif');
  gif4 = loadImage('gifs/walklslow.gif');
  gif5 = loadImage('gifs/newastro.gif');
  gif6 = loadImage('gifs/newastro2.gif');
  gif7 = loadImage('gifs/startscherm.gif');
  gif8 = loadImage('gifs/pressspace.gif');
  gif9 = loadImage('gifs/lava.gif');
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
    if (health <= 0) {
      spelStatus = GAMEOVER;
    }
   }
   if (spelStatus === GAMEOVER) {

    fill('red');
    rect(0, 0, 3000, 2500);
    text("GAME OVER", 640, 400);
    textSize(50);

  }
}
