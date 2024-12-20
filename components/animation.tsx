"use client";
import React, { useEffect, useRef } from 'react';

interface PointSettings {
  pointCount: number;
  startSpeed: number;
  availableColors: string[];
}

interface Velocity {
  x: number;
  y: number;
  z: number;
}

class Point {
  canvas: HTMLCanvasElement;
  color: string;
  x: number;
  y: number;
  z: number;
  v: Velocity;
  radius: number;

  constructor(canvas: HTMLCanvasElement, color: string, x: number, y: number, z: number, v: Velocity) {
    this.canvas = canvas;
    this.color = color;
    this.x = x;
    this.y = y;
    this.z = z;
    this.v = v;
    this.radius = this.calculateRadius();
  }

  calculateRadius(): number {
    return Math.abs(this.z / 120);
  }

  calculatePosition(): void {
    const diameter = 2 * this.radius;

    if (
      this.x > this.canvas.width ||
      this.y > this.canvas.height ||
      this.x + diameter < 0 ||
      this.y + diameter < 0
    ) {
      this.x = this.canvas.width / 2;
      this.y = this.canvas.height / 2;
      this.z = -40;
    }

    this.radius = this.calculateRadius();

    this.x += this.v.x;
    this.y += this.v.y;
    this.z += this.v.z;
  }

  adjustTowardsMouse(distToMouse: number, mouseX: number, mouseY: number): void {
    if (mouseX > this.x) {
      this.v.x += 10 / distToMouse;
    }
    if (mouseY > this.y) {
      this.v.y += 10 / distToMouse;
    }

    if (mouseX <= this.x) {
      this.v.x -= 10 / distToMouse;
    }
    if (mouseY <= this.y) {
      this.v.y -= 10 / distToMouse;
    }
  }

  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = this.color;
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
  }
}

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const settings: PointSettings = {
      pointCount: 50,
      startSpeed: 1.3,
      availableColors: ["#E8009A", "#D70276", "#B219B0", "#8F0A96", "#ED10BC"],
    };

    let objects: Point[] = [];
    let mousePos: { x?: number; y?: number } = {};

    const init = (canvas: HTMLCanvasElement) => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      objects = [];

      const context = canvas.getContext("2d");

      if (!context) {
        return;
      }

      for (let i = 0; i <= settings.pointCount; i++) {
        let plusOrMinusX = Math.random() < 0.5 ? -1 : 1;
        let plusOrMinusY = Math.random() < 0.5 ? -1 : 1;

        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const z = Math.random() * -150;

        const v = {
          x: plusOrMinusX * Math.random() * settings.startSpeed,
          y: plusOrMinusY * Math.random() * settings.startSpeed,
          z: Math.random() * settings.startSpeed * 4,
        };

        const colorIndex = Math.floor(Math.random() * settings.availableColors.length);

        objects.push(new Point(canvas, settings.availableColors[colorIndex], x, y, z, v));
      }

      bindMouseMove();
      requestAnimationFrame(() => draw(context));
    };

    const draw = (context: CanvasRenderingContext2D) => {
      context.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);

      objects.forEach(object => {
        object.calculatePosition();

        if (mousePos.x && mousePos.y) {
          const xDiff = object.x - mousePos.x;
          const yDiff = object.y - mousePos.y;

          const pointDist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

          if (pointDist < 150 + object.radius) {
            object.adjustTowardsMouse(pointDist, mousePos.x, mousePos.y);
          }
        }

        object.draw(context);
      });

      requestAnimationFrame(() => draw(context));
    };

    const bindMouseMove = () => {
      document.addEventListener('mousemove', e => {
        if (canvasRef.current) {
          const rect = canvasRef.current.getBoundingClientRect();
          mousePos.x = e.clientX - rect.left;
          mousePos.y = e.clientY - rect.top;
        }
      });
    };

    if (canvasRef.current) {
      init(canvasRef.current);
    }

    // Handle window resize
    const handleResize = () => {
      if (canvasRef.current) {
        init(canvasRef.current);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div style={{ height: '100%', width: '100%' }}>
            <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', background: 'transparent', position: 'absolute' }}></canvas>
         </div>;
};

export default CanvasAnimation;
