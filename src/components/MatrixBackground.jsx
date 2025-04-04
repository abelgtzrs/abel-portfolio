import { useEffect } from 'react';
import '../styles/MatrixBackground.css';

function getAccentColor() {
  if (document.body.classList.contains('theme-blue')) return '#3399ff';
  if (document.body.classList.contains('theme-purple')) return '#cc66ff';
  if (document.body.classList.contains('theme-red')) return '#ff4d4d';
  return '#33ff33'; // default green
}


function MatrixBackground() {
  useEffect(() => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      const accentColor = getAccentColor();
      ctx.fillStyle = accentColor;
      ctx.font = '15px monospace';
    
      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 94);
        ctx.fillText(text, i * 20, drops[i] * 15);
    
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    

    const interval = setInterval(drawMatrix, 20);
    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrix"></canvas>;
}


export default MatrixBackground;
