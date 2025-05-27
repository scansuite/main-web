import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: Particle[] = [];
    const particleCount = 80; // Number of particles
    
    // Set canvas to full width/height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };
    
    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Set color based on theme
        if (isDark) {
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        } else {
          ctx.fillStyle = `rgba(50, 50, 50, ${particle.opacity * 0.5})`;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
      });
      
      // Connect particles with lines if they're close enough
      const connectionDistance = 100;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15;
            
            if (isDark) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            } else {
              ctx.strokeStyle = `rgba(50, 50, 50, ${opacity * 0.5})`;
            }
            
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(drawParticles);
    };
    
    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    
    resizeCanvas();
    initParticles();
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme, isDark]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" 
    />
  );
};

export default ParticleBackground;
