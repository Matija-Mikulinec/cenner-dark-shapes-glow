import React, { useEffect, useRef } from 'react';
import { Leaf, Cpu, Database, Globe, Code, Zap } from 'lucide-react';

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight * 2;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight * 2;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();

    class Node {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      opacity: number;
      pulseSpeed: number;
      pulseSize: number;
      maxRadius: number;
      connections: number[];

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 1.5 + 1.5;
        this.maxRadius = this.radius * 1.6;
        this.color = '#4CAF50';
        this.velocity = {
          x: (Math.random() - 0.5) * 0.23,
          y: (Math.random() - 0.5) * 0.23
        };
        this.opacity = Math.random() * 0.5 + 0.35;
        this.pulseSpeed = Math.random() * 0.009 + 0.003;
        this.pulseSize = 0;
        this.connections = [];
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + this.pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(76, 175, 80, ${this.opacity})`;
        ctx.fill();

        // Glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, this.radius,
          this.x, this.y, this.radius * 4
        );
        gradient.addColorStop(0, `rgba(76, 175, 80, ${this.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(76, 175, 80, 0)');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      pulse() {
        this.pulseSize = Math.sin(Date.now() * this.pulseSpeed) * (this.maxRadius - this.radius);
      }

      update() {
        this.pulse();
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Bounce + randomness (even slower and smoother)
        if (this.x + this.radius > width || this.x - this.radius < 0) {
          this.velocity.x = -this.velocity.x * 0.8;
          this.velocity.y += (Math.random() - 0.5) * 0.08;
        }
        if (this.y + this.radius > height || this.y - this.radius < 0) {
          this.velocity.y = -this.velocity.y * 0.8;
          this.velocity.x += (Math.random() - 0.5) * 0.08;
        }

        // Clamp velocity for smoothness
        const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
        const maxSpeed = 0.32;
        if (speed > maxSpeed) {
          this.velocity.x = (this.velocity.x / speed) * maxSpeed;
          this.velocity.y = (this.velocity.y / speed) * maxSpeed;
        }

        this.draw();
      }
    }

    // More nodes for denser network, still performant
    const numNodes = Math.min(width, height) * 0.09;
    const nodes: Node[] = [];

    for (let i = 0; i < numNodes; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push(new Node(x, y));
    }

    function generateConnections() {
      nodes.forEach((node, index) => {
        const possibleConnections = nodes
          .map((otherNode, otherIndex) => {
            if (index === otherIndex) return { index: otherIndex, distance: Infinity };
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            return { index: otherIndex, distance };
          })
          .filter(conn => conn.distance < 240)
          .sort((a, b) => a.distance - b.distance);
        node.connections = possibleConnections
          .slice(0, Math.floor(Math.random() * 3) + 2)
          .map(conn => conn.index);
      });
    }
    generateConnections();

    const connUpdateInterval = setInterval(() => {
      // Partial connection refresh
      const nodesToUpdate = Math.floor(nodes.length * 0.25);
      for (let i = 0; i < nodesToUpdate; i++) {
        const randomNodeIndex = Math.floor(Math.random() * nodes.length);
        const randomNode = nodes[randomNodeIndex];
        const possibleConnections = nodes
          .map((otherNode, otherIndex) => {
            if (randomNodeIndex === otherIndex) return { index: otherIndex, distance: Infinity };
            const dx = randomNode.x - otherNode.x;
            const dy = randomNode.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            return { index: otherIndex, distance };
          })
          .filter(conn => conn.distance < 240)
          .sort((a, b) => a.distance - b.distance);
        randomNode.connections = possibleConnections
          .slice(0, Math.floor(Math.random() * 3) + 2)
          .map(conn => conn.index);
      }
    }, 6000);

    function drawConnections() {
      nodes.forEach((node, index) => {
        node.connections.forEach(connIndex => {
          const connectedNode = nodes[connIndex];
          const dx = node.x - connectedNode.x;
          const dy = node.y - connectedNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 240) {
            if (!ctx) return;
            // Thicker, more visible: lineWidth ~2.6, stronger color
            const opacity = 0.38 * (1 - distance / 240);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.strokeStyle = `rgba(120, 220, 120, ${opacity * 1.2})`;
            ctx.lineWidth = 2.6;
            ctx.shadowBlur = 2;
            ctx.shadowColor = 'rgba(76, 175, 80, 0.3)';
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Animated signal (smoother)
            const time = Date.now() / 1400;
            const speed = 1.05;
            const flowPosition = (time * speed) % 1;
            const flowX = node.x + (connectedNode.x - node.x) * flowPosition;
            const flowY = node.y + (connectedNode.y - node.y) * flowPosition;

            ctx.beginPath();
            ctx.arc(flowX, flowY, 2.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(120, 255, 120, ${opacity * 2.2})`;
            ctx.fill();
          }
        });
      });
    }

    let animationId: number;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      nodes.forEach(node => {
        node.update();
      });
      drawConnections();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(connUpdateInterval);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  const FloatingIcons = () => {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] text-cenner/20 animate-float opacity-50">
          <Leaf size={28} />
        </div>
        <div className="absolute top-[35%] right-[15%] text-cenner/15 animate-float opacity-50" style={{ animationDelay: '1s' }}>
          <Cpu size={32} />
        </div>
        <div className="absolute bottom-[25%] left-[20%] text-cenner/15 animate-float opacity-50" style={{ animationDelay: '2s' }}>
          <Database size={26} />
        </div>
        <div className="absolute top-[70%] right-[25%] text-cenner/15 animate-float opacity-50" style={{ animationDelay: '3s' }}>
          <Globe size={30} />
        </div>
        <div className="absolute top-[50%] left-[40%] text-cenner/15 animate-float opacity-50" style={{ animationDelay: '2.5s' }}>
          <Code size={28} />
        </div>
        <div className="absolute bottom-[40%] right-[40%] text-cenner/15 animate-float opacity-50" style={{ animationDelay: '1.7s' }}>
          <Zap size={24} />
        </div>
      </div>
    );
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-70 z-0"
      />
      <FloatingIcons />
    </>
  );
};

export default NetworkBackground;
