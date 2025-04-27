import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar el tamaño del canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Caracteres para el efecto Matrix
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/?[]{}|=+-*';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Inicializar las gotas
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Función de animación
    const draw = () => {
      // Fondo semi-transparente para el efecto de desvanecimiento
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Color del texto
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      // Dibujar los caracteres
      for (let i = 0; i < drops.length; i++) {
        // Caracter aleatorio
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Posición x e y
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Dibujar el caracter
        ctx.fillText(char, x, y);

        // Reiniciar la gota cuando llega al fondo
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Mover la gota
        drops[i]++;
      }
    };

    // Iniciar la animación
    const interval = setInterval(draw, 33);

    // Limpieza
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MatrixBackground; 