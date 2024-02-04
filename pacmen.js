const pacMen = []; 


function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}


function makePac() {

  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);


  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  
  newimg.style.left = position.x + 'px';
  newimg.style.top = position.y + 'px';

 
  game.appendChild(newimg);

  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
 
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x + 'px';
    item.newimg.style.top = item.position.y + 'px';
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
 
  if (item.position.x <= 0 || item.position.x >= 200) {
    item.velocity.x = -item.velocity.x;
  }
  if (item.position.y <= 0 || item.position.y >= 200) {
    item.velocity.y = -item.velocity.y;
  }
}

function makeOne() {
  pacMen.push(makePac());
}


if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
