let spriteSheet;
let frameWidth = 227 / 8; // 每張圖片的寬度
let frameHeight = 36;     // 每張圖片的高度
let currentFrame = 0;

function preload() {
  spriteSheet = loadImage('all.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#6a994e');
  
  // 計算動畫幀
  currentFrame = floor(frameCount / 10) % 8;
  
  // 計算要繪製的精靈位置
  let sx = currentFrame * frameWidth;  // 精靈表中的x位置
  let sy = 0;                         // 精靈表中的y位置
  
  // 在畫布正中間繪製動畫
  let centerX = width / 2 - frameWidth / 2;
  let centerY = height / 2 - frameHeight / 2;
  
  image(spriteSheet, centerX, centerY, frameWidth, frameHeight, sx, sy, frameWidth, frameHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
