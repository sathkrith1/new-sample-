const fs = require('fs');
const { createCanvas } = require('canvas');

const projects = [
  { name: 'survival-horror', bg: '#781414', fg: '#ff5050' },
  { name: 'kart-racer', bg: '#0a3c46', fg: '#5ae6e6' },
  { name: 'jodu-the-fighter', bg: '#3c145a', fg: '#c878ff' },
  { name: 'unity-project', bg: '#5a3c0a', fg: '#ffbe5a' },
];

projects.forEach(p => {
  const canvas = createCanvas(1600, 1000);
  const ctx = canvas.getContext('2d');
  
  // Radial gradient
  const grad = ctx.createRadialGradient(800, 400, 0, 800, 400, 1000);
  grad.addColorStop(0, p.bg);
  grad.addColorStop(1, '#0a0a0a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1600, 1000);
  
  // Grid
  ctx.strokeStyle = p.fg + '1C';
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
  
  // Shapes
  ctx.strokeStyle = p.fg + '33';
  ctx.lineWidth = 2;
  for (let i = 0; i < 20; i++) {
    const cx = Math.random() * 1600;
    const cy = Math.random() * 1000;
    const r = 30 + Math.random() * 130;
    if (Math.random() > 0.5) {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      const sides = 3 + Math.floor(Math.random() * 4);
      ctx.beginPath();
      for (let s = 0; s < sides; s++) {
        const ang = (s / sides) * Math.PI * 2;
        const x = cx + Math.cos(ang) * r;
        const y = cy + Math.sin(ang) * r;
        if (s === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }
  }
  
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.88 });
  fs.writeFileSync(`public/projects/${p.name}.jpg`, buffer);
  console.log('saved', p.name);
});