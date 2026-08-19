const fs = require('fs');
const { createCanvas } = require('canvas');

const canvas = createCanvas(1600, 1000);
const ctx = canvas.getContext('2d');

// Dark background gradient
const grad = ctx.createRadialGradient(800, 500, 0, 800, 500, 800);
grad.addColorStop(0, '#1a1a2e');
grad.addColorStop(1, '#0a0a0a');
ctx.fillStyle = grad;
ctx.fillRect(0, 0, 1600, 1000);

// Grid pattern
ctx.strokeStyle = '#00d4aa22';
ctx.lineWidth = 1;
for (let x = 0; x < 1600; x += 64) {
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, 1000);
  ctx.stroke();
}
for (let y = 0; y < 1000; y += 64) {
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(1600, y);
  ctx.stroke();
}

// "COMING SOON" text
ctx.fillStyle = '#00d4aa';
ctx.font = 'bold 80px monospace';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('COMING SOON', 800, 450);

ctx.font = '30px monospace';
ctx.fillStyle = '#00d4aa88';
ctx.fillText('Game Development Portfolio', 800, 550);

// Subtle shapes
ctx.strokeStyle = '#00d4aa33';
ctx.lineWidth = 2;
for (let i = 0; i < 8; i++) {
  const cx = Math.random() * 1600;
  const cy = Math.random() * 1000;
  const r = 50 + Math.random() * 150;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.stroke();
}

const buffer = canvas.toBuffer('image/jpeg', { quality: 0.85 });
fs.writeFileSync('public/projects/placeholder.jpg', buffer);
console.log('saved placeholder');