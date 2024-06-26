import React, { useRef, useEffect } from 'react';
import '../App.css'
const Canvas = () => {
  const canvasRef = useRef(null);
  let balls = [];
  const rgb = [
    "rgb(26, 188, 156)",
    "rgb(46, 204, 113)",
    "rgb(52, 152, 219)",
    "rgb(155, 89, 182)",
    "rgb(241, 196, 15)",
    "rgb(230, 126, 34)",
    "rgb(231, 76, 60)"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeReset = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const getRandomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;

    const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

    class Ball {
      constructor() {
        this.start = {
          x: mouse.x + getRandomInt(-20, 20),
          y: mouse.y + getRandomInt(-20, 20),
          size: getRandomInt(30, 40)
        };
        this.end = {
          x: this.start.x + getRandomInt(-300, 300),
          y: this.start.y + getRandomInt(-300, 300)
        };

        this.x = this.start.x;
        this.y = this.start.y;
        this.size = this.start.size;

        this.style = rgb[getRandomInt(0, rgb.length - 1)];

        this.time = 0;
        this.ttl = 120;
      }
      draw() {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      update() {
        if (this.time <= this.ttl) {
          let progress = 1 - (this.ttl - this.time) / this.ttl;

          this.size = this.start.size * (1 - easeOutQuart(progress));
          this.x = this.x + (this.end.x - this.x) * 0.01;
          this.y = this.y + (this.end.y - this.y) * 0.01;
        }
        this.time++;
      }
    }

    const mouse = {
      x: undefined,
      y: undefined
    };

    const mousemove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;

      for (let i = 0; i < 3; i++) {
        balls.push(new Ball());
      }
    };

    const mouseout = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    const animationLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      drawBalls();

      let temp = [];
      for (let i = 0; i < balls.length; i++) {
        if (balls[i].time <= balls[i].ttl) {
          temp.push(balls[i]);
        }
      }
      balls = temp;

      requestAnimationFrame(animationLoop);
    };

    const drawBalls = () => {
      for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw();
      }
    };

    const init = () => {
      resizeReset();
      animationLoop();
    };

    init();
    window.addEventListener("resize", resizeReset);
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseout", mouseout);

    return () => {
      window.removeEventListener("resize", resizeReset);
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseout", mouseout);
    };
  }, []);

  return <canvas ref={canvasRef} id="canvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default Canvas;
