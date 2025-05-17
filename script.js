const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")
let score = 0

canvas.width = 500;
canvas.height = 500;
// player object
const playerSprite = new Image();
playerSprite.src = "sprites/player.webp";
const player = {
    sprite: playerSprite,
    x: 0,
    y: canvas.height - 100,
    height: 45,
    width: 40,
    speed:3,
    vx:0
    
  };
player.x = canvas.width / 2 - player.width / 2
  // function to draw the player;
  function drawPlayer() {
    ctx.drawImage(player.sprite,player.x,player.y,player.width,player.height);
}
// function to draw the backround
function drawBackground() {
    // needs to be fixed.
    const Background = new Image();
    Background.src = "sprites/backdrop.avif"
    ctx.drawImage(Background,0,0,canvas.width,canvas.height);
}
function keyDown(e){ 
  if(e.key == "ArrowRight") {
    player.vx = player.speed
  }
  if(e.key == "ArrowLeft") {
    player.vx = player.speed * -1
  }
}
function keyUp(e) {
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    player.vx = 0;
  }
}
document.addEventListener("keydown", keyDown)
document.addEventListener("keyup", keyUp)
function movePlayer() {
  player.x += player.vx;
  if (player.x > canvas.width - player.width){
    player.x = canvas.width - player.width
  }
   if (player.x < 0){
    player.x = 0
  }
}
// uptate game function
function update() {
  drawBackground();  
  drawPlayer();
  movePlayer()
    requestAnimationFrame(update);
}
update()