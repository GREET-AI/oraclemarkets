"use client";

import { useEffect, useRef } from "react";
import { PulseIndicator } from "./PulseIndicator";

interface RadarScanProps {
  status?: "SCANNING" | "SYNCING" | "ACTIVE";
  nodeCount?: number;
  className?: string;
}

export function RadarScan({ status = "SCANNING", nodeCount = 8, className = "" }: RadarScanProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sweepAngleRef = useRef(0);
  const nodesRef = useRef<Array<{ x: number; y: number; angle: number; distance: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(canvas.width, canvas.height) / 2 - 20;

    // Initialize nodes
    if (nodesRef.current.length === 0) {
      for (let i = 0; i < nodeCount; i++) {
        const angle = (Math.PI * 2 * i) / nodeCount + Math.random() * 0.5;
        const distance = 30 + Math.random() * (maxRadius - 50);
        nodesRef.current.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          angle,
          distance,
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw concentric circles
      for (let i = 1; i <= 4; i++) {
        ctx.strokeStyle = "rgba(255, 0, 110, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, (maxRadius / 4) * i, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw cross lines
      ctx.strokeStyle = "rgba(255, 0, 110, 0.2)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - maxRadius);
      ctx.lineTo(centerX, centerY + maxRadius);
      ctx.moveTo(centerX - maxRadius, centerY);
      ctx.lineTo(centerX + maxRadius, centerY);
      ctx.stroke();

      // Draw radar sweep
      sweepAngleRef.current += 0.02;
      const sweepAngle = sweepAngleRef.current;
      
      const gradient = ctx.createLinearGradient(centerX, centerY, 
        centerX + Math.cos(sweepAngle) * maxRadius, 
        centerY + Math.sin(sweepAngle) * maxRadius);
      gradient.addColorStop(0, "rgba(255, 0, 110, 0.3)");
      gradient.addColorStop(1, "rgba(255, 107, 53, 0.1)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, maxRadius, sweepAngle - 0.3, sweepAngle + 0.3);
      ctx.closePath();
      ctx.fill();

      // Draw sweep line
      ctx.strokeStyle = "#FF006E";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(sweepAngle) * maxRadius,
        centerY + Math.sin(sweepAngle) * maxRadius
      );
      ctx.stroke();

      // Draw nodes
      nodesRef.current.forEach((node) => {
        const nodeAngle = Math.atan2(node.y - centerY, node.x - centerX);
        const angleDiff = Math.abs(nodeAngle - sweepAngle);
        const isDetected = angleDiff < 0.3 || angleDiff > Math.PI * 2 - 0.3;

        ctx.fillStyle = isDetected ? "#FF6B35" : "rgba(255, 0, 110, 0.5)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();

        if (isDetected) {
          ctx.strokeStyle = "#FF6B35";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [nodeCount]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <PulseIndicator status={status === "SCANNING" ? "SYNCING" : status === "ACTIVE" ? "ACTIVE" : "LIVE"} size="sm" />
        <span className="text-[#FF006E] text-xs font-mono font-semibold">{status}</span>
      </div>
    </div>
  );
}

