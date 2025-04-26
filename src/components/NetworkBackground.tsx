import React, { useEffect, useRef } from 'react';
import { Leaf, Cpu, Database, Globe, Code, Zap } from 'lucide-react';

const NODE_COLORS = [
  '#221F26', // Dark Charcoal
  '#1A1F2C', // Dark Purple
  '#333333', // Dark Gray
  '#222222' // Another shade of dark gray
];

const LINE_COLOR = '#221F26'; // Charcoal
const LINE_GLOW = '#4b3b7b'; // Slight purple for soft glow

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

    // Helper to get random color from palette
    const getRandColor = () => NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)];

    // Node class with more "chase"/dynamic motion
    class Node {
      x: number;
      y: number;
      radius: number;
      baseRadius: number;
      color: string;
      velocity: { x: number; y: number };
      opacity: number;
      pulseSpeed: number;
      pulseSize: number;
      maxRadius: number;
      connections: number[];
      followTarget?: Node | null;
      followStrength: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 1.5 + 1.6;
        this.baseRadius = this.radius;
        this.maxRadius = this.radius * 1.65;
        this.color = getRandColor();
        this.velocity = {
          x: (Math.random() - 0.5) * 0.14,
          y: (Math.random() - 0.5) * 0.14
        };
        this.opacity = Math.random() * 0.45 + 0.27;
        this.pulseSpeed = Math.random() * 0.008 + 0.002;
        this.pulseSize = 0;
        this.connections = [];
        // 30% of nodes will follow another node for a neural look
        this.followTarget = null;
        this.followStrength = Math.random() * 0.08 + 0.045;
      }

      startFollowing(nodes: Node[]) {
        if (Math.random() < 0.3) {
          let attempts = 0;
          // Pick a follow target that is not itself
          while (!this.followTarget && attempts < 5) {
            const t = nodes[Math.floor(Math.random() * nodes.length)];
            if (t !== this) {
              this.followTarget = t;
            }
            attempts++;
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + this.pulseSize, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = LINE_GLOW;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
        ctx.restore();

        // Halo Glow
        ctx.save();
        const gradient = ctx.createRadialGradient(
          this.x, this.y, this.radius,
          this.x, this.y, this.radius * 4.2
        );
        gradient.addColorStop(0, `${this.color}30`);
        gradient.addColorStop(1, 'rgba(30, 15, 40, 0)');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 4.2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.68;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.restore();
      }

      pulse() {
        this.pulseSize = Math.sin(Date.now() * this.pulseSpeed) * (this.maxRadius - this.baseRadius);
      }

      update(nodes: Node[], idx: number) {
        this.pulse();

        // 30% have a followTarget (neural effect)
        if (this.followTarget) {
          // Move toward target but keep random jank for organic effect
          const dx = this.followTarget.x - this.x;
          const dy = this.followTarget.y - this.y;
          this.velocity.x += dx * this.followStrength * 0.016 + (Math.random() - 0.5) * 0.035;
          this.velocity.y += dy * this.followStrength * 0.016 + (Math.random() - 0.5) * 0.035;
        } else {
          // Drift randomly for more loose effect
          this.velocity.x += (Math.random() - 0.5) * 0.024;
          this.velocity.y += (Math.random() - 0.5) * 0.024;
        }

        // Soft boundary (keep inside with springy rebound)
        if (this.x + this.radius > width) this.velocity.x -= Math.abs(this.velocity.x) * 0.13 + 0.07;
        if (this.x - this.radius < 0) this.velocity.x += Math.abs(this.velocity.x) * 0.13 + 0.07;
        if (this.y + this.radius > height) this.velocity.y -= Math.abs(this.velocity.y) * 0.13 + 0.07;
        if (this.y - this.radius < 0) this.velocity.y += Math.abs(this.velocity.y) * 0.13 + 0.07;

        // Friction for smooth movement
        this.velocity.x *= 0.98;
        this.velocity.y *= 0.98;

        // Clamp
        const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
        const maxSpeed = 0.2;
        if (speed > maxSpeed) {
          this.velocity.x = (this.velocity.x / speed) * maxSpeed;
          this.velocity.y = (this.velocity.y / speed) * maxSpeed;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;
      }
    }

    // Node count related to area, but a bit denser for pronounced neural net
    const numNodes = Math.max(35, Math.floor(Math.sqrt(width * height) * 0.07));
    const nodes: Node[] = [];
    for (let i = 0; i < numNodes; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push(new Node(x, y));
    }
    // Assign follow targets for chase/neural effect
    nodes.forEach(node => node.startFollowing(nodes));

    // Generate connections ensuring some clustering, some random
    function generateConnections() {
      nodes.forEach((node, idx) => {
        // Cluster: more likely to connect to close nodes + 1 "distant" connection for variety
        const possible = nodes.map((o, i) => ({
          index: i,
          distance: Math.sqrt((node.x - o.x) ** 2 + (node.y - o.y) ** 2)
        }))
        .filter(n => n.index !== idx)
        .sort((a, b) => a.distance - b.distance);

        // Closest 2-4 plus one distant one for variety
        node.connections = [
          ...possible.slice(0, Math.floor(Math.random() * 2) + 2).map(n => n.index),
          possible[Math.floor(Math.random() * Math.min(8, possible.length - 1)) + 7]?.index ?? possible[0].index // distant-ish
        ].filter((idx, i, arr) => idx !== undefined && arr.indexOf(idx) === i);
      });
    }
    generateConnections();

    // Partial shuffle of connections every 8s for variety
    const connUpdateInterval = setInterval(generateConnections, 8000);

    function drawConnections() {
      nodes.forEach((node, idx) => {
        node.connections.forEach(connIdx => {
          const other = nodes[connIdx];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 300) {
            // Main thick, dark line
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            // Fade for length
            const opacity = 0.36 * (1 - dist / 340);
            ctx.strokeStyle = `${LINE_COLOR}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.globalAlpha = opacity + 0.14;
            ctx.lineWidth = 3.1 + (1.1 * Math.sin(Date.now() * 0.0008 + idx));
            ctx.shadowColor = `${LINE_GLOW}bb`;
            ctx.shadowBlur = opacity > 0.27 ? 6 : 0;
            ctx.stroke();
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;
            ctx.restore();

            // Animated pulse ball over line
            ctx.save();
            const t = ((Date.now() / 2800) + idx * 0.3) % 1;
            const fx = node.x + (other.x - node.x) * t;
            const fy = node.y + (other.y - node.y) * t;
            ctx.beginPath();
            ctx.arc(fx, fy, 2.5 + Math.abs(Math.sin(Date.now() * 0.001 + idx)), 0, Math.PI * 2);
            ctx.fillStyle = `${LINE_GLOW}80`;
            ctx.globalAlpha = 0.58;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.restore();
          }
        });
      });
    }

    let animationId: number;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      nodes.forEach((node, idx) => {
        node.update(nodes, idx);
        node.draw(ctx);
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

  const FloatingIcons = () => (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Icons keep their styling for background flavor */}
      <div className="absolute top-[15%] left-[10%] text-cenner/20 animate-float opacity-40">
        <Leaf size={28} />
      </div>
      <div className="absolute top-[35%] right-[15%] text-cenner/15 animate-float opacity-40" style={{ animationDelay: '1s' }}>
        <Cpu size={32} />
      </div>
      <div className="absolute bottom-[25%] left-[20%] text-cenner/15 animate-float opacity-40" style={{ animationDelay: '2s' }}>
        <Database size={26} />
      </div>
      <div className="absolute top-[70%] right-[25%] text-cenner/15 animate-float opacity-40" style={{ animationDelay: '3s' }}>
        <Globe size={30} />
      </div>
      <div className="absolute top-[50%] left-[40%] text-cenner/15 animate-float opacity-40" style={{ animationDelay: '2.5s' }}>
        <Code size={28} />
      </div>
      <div className="absolute bottom-[40%] right-[40%] text-cenner/15 animate-float opacity-40" style={{ animationDelay: '1.7s' }}>
        <Zap size={24} />
      </div>
    </div>
  );

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-80 z-0"
      />
      <FloatingIcons />
    </>
  );
};

export default NetworkBackground;
