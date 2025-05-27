const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")
let score = 0
let scoreBoard = document.getElementById("score")
// Collision Function
function isColliding(rect1, rect2) {
  return !(rect1.x > rect2.x + rect2.width ||
             rect1.x + rect1.width < rect2.x ||
             rect1.y > rect2.y + rect2.height ||
             rect1.y + rect1.height < rect2.y);
}

canvas.width = 500;
canvas.height = 500;

// player object
const playerSprite = new Image();
playerSprite.src = "sprites/player.png";
const player = {
    sprite: playerSprite,
    x: 0,
    y: canvas.height - 100,
    height: 45,
    width: 40,
    speed:3,
    vx:0
    
  }
player.x = canvas.width / 2 - player.width / 2
  // function to draw the player;
  const enemySprite = new Image();
enemySprite.src = "sprites/bomb.png";
  let enemy = {
      sprite : enemySprite,
      x : 0,
      y : 50,
      height : 45,
      width : 40,
      speed : 3,
      vy : 25
  }
  // collectable
  const collectableSprite = new Image();
collectableSprite.src = "sprites/collectableSprite.png";
  const collectable = {
    x:0,
    y:0,
    width:50,
    height:50,
    speed:2,
    sprite: collectableSprite,
    active: false
  }
  resetEnemy();
  function drawPlayer() {
    ctx.drawImage(player.sprite,player.x,player.y,player.width,player.height);
}
function drawEnemy(){
  ctx.drawImage(enemy.sprite,enemy.x,enemy.y,enemy.width,enemy.height);
}
function drawCollectable() {
  ctx.drawImage(collectable.sprite,collectable.x,collectable.y,collectable.width,collectable.height);
}
// function to draw the backround
function drawBackground() {
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
function resetEnemy() {
  let placeEnemy = Math.floor(Math.random()*canvas.width+1);
    enemy.x = placeEnemy;
    enemy.y = 50;
}
function resetCollectable() {
  let placeCollectable = Math.floor(Math.random()*canvas.width+1);
    collectable.x = placeCollectable;
    collectable.y = 50;
}
function moveEnemy(){
  enemy.vy = enemy.speed; 
  enemy.y += enemy.vy;
  if (enemy.y >= canvas.height){
    resetEnemy();
  }
  if (isColliding(player,enemy)){
    resetEnemy();
    score -= 10;
    scoreBoard.innerHTML = score;
  }
}
  function moveCollectable(){
    collectable.vy = enemy.speed; 
    collectable.y += enemy.vy;
    if (collectable.y >= canvas.height){
      resetCollectable();
    }
    if (isColliding(player,collectable)){
      resetCollectable();
      score += 10;
      scoreBoard.innerHTML = score;
    }

}
// uptate game function
function update() {
  drawBackground();  
  drawPlayer();
  drawEnemy();
  drawCollectable();
  movePlayer();
  moveEnemy();
  moveCollectable();
    requestAnimationFrame(update);
}
update()