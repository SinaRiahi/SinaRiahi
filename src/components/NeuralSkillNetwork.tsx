import React, { useEffect, useRef, useState, useMemo } from 'react';
import { SKILLS_DATA } from '../data/skills';
import { SkillProficiency } from '../types';
import { Activity } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Node3D {
  id: string;
  name: string;
  level: SkillProficiency;
  category: string;
  context: string;
  lobe: string;
  // Normalized 3D position (-100 to 100 space)
  x: number;
  y: number;
  z: number;
}

interface SynapsePulse {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
  color: string;
}

export const NeuralSkillNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // 3D rotation state (Pitch & Yaw)
  const rotation = useRef<{ x: number; y: number }>({ x: 0.25, y: -0.6 });
  const angularVelocity = useRef<{ x: number; y: number }>({ x: 0, y: 0.003 });
  const isDragging = useRef<boolean>(false);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [hoveredNode, setHoveredNode] = useState<Node3D | null>(null);
  const [selectedNode, setSelectedNode] = useState<Node3D | null>(null);
  const hoveredNodeRef = useRef<Node3D | null>(null);

  // Synaptic pulses traveling between nodes
  const pulses = useRef<SynapsePulse[]>([]);

  // Flatten all skills and map to anatomical 3D brain positions
  const nodes = useMemo<Node3D[]>(() => {
    // Spatial mapping tailored to simulate brain hemispheres:
    // Left hemisphere: x < -15, Right hemisphere: x > 15
    // Frontal: z > 25, Occipital: z < -35, Parietal/Temporal: -35 <= z <= 25
    const brainMap: Record<string, { x: number; y: number; z: number; lobe: string }> = {
      // Core Languages
      Python: { x: -55, y: -25, z: 60, lobe: 'Left Frontal (Automation / Logic)' },
      TypeScript: { x: 55, y: -25, z: 60, lobe: 'Right Frontal (Systems / UI)' },
      Rust: { x: -45, y: -55, z: 15, lobe: 'Left Parietal (Memory / Safety)' },
      SQL: { x: -30, y: 15, z: 20, lobe: 'Left Temporal (Data Structuring)' },
      R: { x: -65, y: 20, z: -10, lobe: 'Left Temporal (Statistical Math)' },
      JavaScript: { x: 65, y: -15, z: -40, lobe: 'Right Occipital (Async Event Loop)' },

      // Frameworks & Libraries
      'PySide6 (Qt)': { x: -75, y: -30, z: 30, lobe: 'Left Frontal (Desktop GUIs)' },
      FastAPI: { x: 35, y: -30, z: 45, lobe: 'Right Frontal (Async Services)' },
      'Pandas & NumPy': { x: -70, y: 25, z: 20, lobe: 'Left Temporal (Numerical Arrays)' },
      SciPy: { x: -60, y: 40, z: -15, lobe: 'Left Temporal (Scientific Computing)' },
      'React 19': { x: 60, y: -25, z: -60, lobe: 'Right Occipital (Visual Hierarchy)' },
      'Tauri v2': { x: 50, y: -50, z: -15, lobe: 'Right Parietal (Desktop Core)' },
      Pydantic: { x: -25, y: -40, z: 45, lobe: 'Left Frontal (Data Validation)' },

      // Automation & Scraping
      Selenium: { x: -45, y: -10, z: 80, lobe: 'Left Frontal Pole (Browser Drivers)' },
      nodriver: { x: 45, y: -10, z: 80, lobe: 'Right Frontal Pole (Stealth Automation)' },
      'BeautifulSoup & Requests': { x: 65, y: 30, z: 0, lobe: 'Right Temporal (HTML Parsing)' },
      'REST APIs': { x: 75, y: 10, z: 30, lobe: 'Right Temporal (Network Ingestion)' },
      PostgreSQL: { x: 30, y: 20, z: 15, lobe: 'Right Deep Cortex (ACID Transactions)' },

      // Engineering Tools & Ecosystem
      Docker: { x: -40, y: 55, z: -45, lobe: 'Left Cerebellum (Containerization)' },
      'Git & GitHub': { x: 40, y: 55, z: -45, lobe: 'Right Cerebellum (Version Control)' },
      Wireshark: { x: 0, y: 70, z: -10, lobe: 'Brainstem (Packet Diagnostics)' },
      'Web Audio API & Canvas': { x: 35, y: 0, z: -75, lobe: 'Right Visual Cortex (Interactive Graphics)' },
      'Photoshop & Illustrator': { x: -45, y: -15, z: -70, lobe: 'Left Visual Cortex (Design Systems)' },
      WordPress: { x: 70, y: 40, z: -25, lobe: 'Right Temporal (CMS & Architecture)' },
    };

    const result: Node3D[] = [];
    SKILLS_DATA.forEach((category) => {
      category.skills.forEach((skill) => {
        const coords = brainMap[skill.name] || {
          x: (Math.random() - 0.5) * 120,
          y: (Math.random() - 0.5) * 80,
          z: (Math.random() - 0.5) * 120,
          lobe: 'Cerebral Cortex',
        };

        result.push({
          id: skill.name,
          name: skill.name,
          level: skill.level,
          category: category.title,
          context: skill.context || '',
          lobe: coords.lobe,
          x: coords.x,
          y: coords.y,
          z: coords.z,
        });
      });
    });

    return result;
  }, []);

  // Compute synaptic connections (connected based on domain relation & spatial distance)
  const edges = useMemo<[number, number][]>(() => {
    const list: [number, number][] = [];
    const maxDist = 78;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        const dist = Math.hypot(dx, dy, dz);

        // Same category gets higher connection priority
        const sameCat = nodes[i].category === nodes[j].category;
        const threshold = sameCat ? maxDist * 1.3 : maxDist;

        if (dist < threshold) {
          list.push([i, j]);
        }
      }
    }
    return list;
  }, [nodes]);

  // Handle pointer rotation
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    angularVelocity.current = { x: 0, y: 0 };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (isDragging.current) {
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;

      const sensitivity = 0.006;
      rotation.current.y += dx * sensitivity;
      rotation.current.x += dy * sensitivity;

      // Clamp vertical pitch to avoid flipping over
      rotation.current.x = Math.max(-1.3, Math.min(1.3, rotation.current.x));

      angularVelocity.current = {
        x: dy * sensitivity * 0.4,
        y: dx * sensitivity * 0.4,
      };

      lastMousePos.current = { x: e.clientX, y: e.clientY };
    }

    // Raycast/Hover detection
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Check hit against projected nodes
    let closestNode: Node3D | null = null;
    let minDistance = 26; // Hit radius

    const cx = canvas.width / (2 * (window.devicePixelRatio || 1));
    const cy = canvas.height / (2 * (window.devicePixelRatio || 1));
    // Doubled zoom scale: (Math.min(...) / 2.6) * 2 = Math.min(...) / 1.3
    const scale = (Math.min(canvas.width, canvas.height) / (2.6 * (window.devicePixelRatio || 1))) * 2;

    const cosY = Math.cos(rotation.current.y);
    const sinY = Math.sin(rotation.current.y);
    const cosX = Math.cos(rotation.current.x);
    const sinX = Math.sin(rotation.current.x);

    nodes.forEach((node) => {
      // 3D rotation projection
      const rx = node.x * cosY - node.z * sinY;
      const rz = node.x * sinY + node.z * cosY;
      const ry = node.y * cosX - rz * sinX;
      const rz2 = node.y * sinX + rz * cosX;

      const fov = 340;
      const pScale = fov / (fov + rz2 + 110);
      const projX = cx + rx * pScale * (scale / 100);
      const projY = cy + ry * pScale * (scale / 100);

      const d = Math.hypot(mouseX - projX, mouseY - projY);
      if (d < minDistance) {
        minDistance = d;
        closestNode = node;
      }
    });

    hoveredNodeRef.current = closestNode;
    setHoveredNode(closestNode);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture was already released
    }

    if (hoveredNodeRef.current) {
      setSelectedNode(hoveredNodeRef.current);
    }
  };

  // Main 3D Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId = 0;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Inertia & Auto-Rotation
      if (!isDragging.current) {
        if (isAutoRotate) {
          rotation.current.y += 0.0035;
        } else {
          rotation.current.x += angularVelocity.current.x;
          rotation.current.y += angularVelocity.current.y;
          angularVelocity.current.x *= 0.94;
          angularVelocity.current.y *= 0.94;
        }
      }

      const cx = width / 2;
      const cy = height / 2;
      // Doubled zoom scale: (Math.min(...) / 2.6) * 2 = Math.min(...) / 1.3
      const scale = (Math.min(width, height) / 2.6) * 2;

      const cosY = Math.cos(rotation.current.y);
      const sinY = Math.sin(rotation.current.y);
      const cosX = Math.cos(rotation.current.x);
      const sinX = Math.sin(rotation.current.x);

      // Project all nodes to 2D
      const projected = nodes.map((node, idx) => {
        const rx = node.x * cosY - node.z * sinY;
        const rz = node.x * sinY + node.z * cosY;
        const ry = node.y * cosX - rz * sinX;
        const rz2 = node.y * sinX + rz * cosX;

        const fov = 340;
        const pScale = fov / (fov + rz2 + 110);
        const projX = cx + rx * pScale * (scale / 100);
        const projY = cy + ry * pScale * (scale / 100);

        return {
          node,
          idx,
          x: projX,
          y: projY,
          zDepth: rz2,
          pScale,
        };
      });

      // Spawn random synaptic action potentials (pulses)
      if (Math.random() < 0.35 && edges.length > 0 && pulses.current.length < 18) {
        const randomEdge = edges[Math.floor(Math.random() * edges.length)];
        pulses.current.push({
          fromIdx: randomEdge[0],
          toIdx: randomEdge[1],
          progress: 0,
          speed: 0.015 + Math.random() * 0.025,
          color: Math.random() > 0.4 ? '#38bdf8' : '#34d399',
        });
      }

      // Update pulses
      pulses.current.forEach((p) => {
        p.progress += p.speed;
      });
      pulses.current = pulses.current.filter((p) => p.progress < 1);

      // Colors based on theme
      const isDark = theme === 'dark' || document.documentElement.classList.contains('dark');
      const baseLineColor = isDark ? 'rgba(56, 189, 248, ' : 'rgba(2, 132, 199, ';
      const activeLineColor = isDark ? 'rgba(52, 211, 153, ' : 'rgba(16, 185, 129, ';

      // 1. Draw Synaptic Edges
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        if (!p1 || !p2) return;

        const isHoverConnected =
          hoveredNodeRef.current &&
          (hoveredNodeRef.current.id === p1.node.id || hoveredNodeRef.current.id === p2.node.id);

        const avgDepth = (p1.zDepth + p2.zDepth) / 2;
        // Depth-based transparency: foreground is brighter
        const depthAlpha = Math.max(0.12, Math.min(0.85, (avgDepth + 120) / 240));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        if (isHoverConnected) {
          ctx.strokeStyle = `${activeLineColor}${Math.min(1, depthAlpha * 1.8)})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          ctx.strokeStyle = `${baseLineColor}${depthAlpha * (isDark ? 0.35 : 0.45)})`;
          ctx.lineWidth = Math.max(0.8, (p1.pScale + p2.pScale) * 0.8);
          ctx.stroke();
        }
      });

      // 2. Draw Traveling Synaptic Pulses
      pulses.current.forEach((p) => {
        const p1 = projected[p.fromIdx];
        const p2 = projected[p.toIdx];
        if (!p1 || !p2) return;

        const pulseX = p1.x + (p2.x - p1.x) * p.progress;
        const pulseY = p1.y + (p2.y - p1.y) * p.progress;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Sort nodes by Z-depth for correct rendering order
      const sortedProjected = [...projected].sort((a, b) => b.zDepth - a.zDepth);

      // 4. Draw Brain Nodes & Labels
      sortedProjected.forEach((p) => {
        const isHovered = hoveredNodeRef.current?.id === p.node.id;
        const isSelected = selectedNode?.id === p.node.id;

        // Base node color by proficiency
        let nodeColor = '#3b82f6';
        if (p.node.level === 'Actively Using') nodeColor = '#10b981';
        else if (p.node.level === 'Familiar With') nodeColor = '#3b82f6';
        else if (p.node.level === 'Learning') nodeColor = '#f59e0b';
        else if (p.node.level === 'Exploring') nodeColor = '#06b6d4';

        const nodeRadius = (isHovered ? 9 : isSelected ? 8 : 6) * p.pScale;

        // Outer glow on hover or active
        if (isHovered || isSelected) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, nodeRadius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${nodeColor}33`;
          ctx.fill();
        }

        // Main Node Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        ctx.strokeStyle = isDark ? '#ffffff' : '#0f172a';
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.stroke();

        // Node Label (Visible for foreground nodes or when hovered)
        const textAlpha = Math.max(0.2, Math.min(1, (p.zDepth + 80) / 160));
        if (isHovered || p.zDepth > -35 || isSelected) {
          ctx.font = `${isHovered ? 'bold 12px' : '10px'} Inter, ui-sans-serif, system-ui`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          const textColor = isDark
            ? isHovered
              ? '#ffffff'
              : `rgba(226, 232, 240, ${textAlpha})`
            : isHovered
            ? '#0f172a'
            : `rgba(30, 41, 59, ${textAlpha})`;

          ctx.fillStyle = textColor;
          ctx.fillText(p.node.name, p.x, p.y - nodeRadius - 8);
        }
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [nodes, edges, isAutoRotate, selectedNode, theme]);

  const activeNodeInfo = hoveredNode || selectedNode;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[480px] sm:h-[540px] rounded-2xl bg-white dark:bg-[#07090e] border border-slate-300 dark:border-white/10 shadow-lg overflow-hidden flex flex-col transition-all select-none"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Auto-Orbit Toggle Button */}
      <button
        onClick={() => setIsAutoRotate(!isAutoRotate)}
        className={`absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors backdrop-blur-md shadow-sm ${
          isAutoRotate
            ? 'bg-blue-50/90 dark:bg-blue-500/10 border-blue-300 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 font-semibold'
            : 'bg-white/80 dark:bg-white/5 border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-400'
        }`}
        title="Toggle automatic rotation"
      >
        <Activity className="w-3.5 h-3.5" />
        <span>{isAutoRotate ? 'Auto-Orbit: ON' : 'Auto-Orbit: PAUSED'}</span>
      </button>

      {/* Main Interactive 3D Canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none select-none"
      />

      {/* Live Node Telemetry / Inspector Card (shown only on hover/select) */}
      {activeNodeInfo && (
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-4 rounded-xl bg-white/95 dark:bg-[#0c101a]/95 backdrop-blur-md border border-blue-500/40 shadow-xl transition-all z-20 space-y-2 pointer-events-auto">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                {activeNodeInfo.name}
              </h4>
            </div>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                activeNodeInfo.level === 'Actively Using'
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300'
                  : activeNodeInfo.level === 'Familiar With'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300'
                  : activeNodeInfo.level === 'Learning'
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300'
                  : 'bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-300'
              }`}
            >
              {activeNodeInfo.level}
            </span>
          </div>

          <div className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-semibold">
            Region: {activeNodeInfo.lobe}
          </div>

          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {activeNodeInfo.context || 'Specialized systems implementation.'}
          </p>

          <div className="text-[10px] font-mono text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
            <span>Category: {activeNodeInfo.category}</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">Synaptic Node Active</span>
          </div>
        </div>
      )}
    </div>
  );
};
