const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")

canvas.width = 500;
canvas.height = 500;
// player object
const playerSprite = new Image();
playerSprite.src = "sprites/player.webp";
const player = {
    sprite: playerSprite,
    x: 0,
    y: canvas.height - 100,
    width: 40,
    speed:3,
    vx:0
    
  };
player.x = canvas.width / 2 - player.width / 2
  // function to draw the player;
  function drawPlayer() {
    ctx.drawImage(player.sprite,player.x,player.y,player.width,player.height);
};
// function to draw the backround
function drawBackground() {
    // needs to be fixed.
    ctx.drawImage("sprites/backdrop.avif",0,0,canvas.width,canvas.height);
}

// uptate game function
function update() {
    drawPlayer();
    drawBackground();
    requestAnimationFrame(update);
}
update()