"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

interface CellGap {
  col?: number;
  row?: number;
}

interface Duration {
  enter: number;
  leave: number;
}

interface CubesProps {
  gridSize?: number;
  cubeSize?: number;
  maxAngle?: number;
  radius?: number;
  easing?: string;
  duration?: Duration;
  cellGap?: number | CellGap;
  borderStyle?: string;
  faceColor?: string;
  shadow?: boolean | string;
  autoAnimate?: boolean;
  rippleOnClick?: boolean;
  rippleColor?: string;
  rippleSpeed?: number;
  className?: string;
}

const Cubes = ({
  gridSize = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = "power3.out",
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = "1px solid #5B6B7A",
  faceColor = "#2F3E4E",
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = "#9AA7B2",
  rippleSpeed = 2,
  className = "",
}: CubesProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef({ x: 0, y: 0 });
  const simTargetRef = useRef({ x: 0, y: 0 });
  const simRAFRef = useRef<number | null>(null);

  const colGap =
    typeof cellGap === "number"
      ? `${cellGap}px`
      : (cellGap as CellGap)?.col !== undefined
        ? `${(cellGap as CellGap).col}px`
        : "5%";
  const rowGap =
    typeof cellGap === "number"
      ? `${cellGap}px`
      : (cellGap as CellGap)?.row !== undefined
        ? `${(cellGap as CellGap).row}px`
        : "5%";

  const enterDur = duration.enter;
  const leaveDur = duration.leave;

  const tiltAt = useCallback(
    (rowCenter: number, colCenter: number) => {
      if (!sceneRef.current) return;
      sceneRef.current
        .querySelectorAll(".cube")
        .forEach((cube) => {
          const el = cube as HTMLElement;
          const r = +el.dataset.row!;
          const c = +el.dataset.col!;
          const dist = Math.hypot(r - rowCenter, c - colCenter);
          if (dist <= radius) {
            const pct = 1 - dist / radius;
            const angle = pct * maxAngle;
            gsap.to(cube, {
              duration: enterDur,
              ease: easing,
              overwrite: true,
              rotateX: -angle,
              rotateY: angle,
            });
          } else {
            gsap.to(cube, {
              duration: leaveDur,
              ease: "power3.out",
              overwrite: true,
              rotateX: 0,
              rotateY: 0,
            });
          }
        });
    },
    [radius, maxAngle, enterDur, leaveDur, easing]
  );

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current!.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colCenter = (e.clientX - rect.left) / cellW;
      const rowCenter = (e.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        tiltAt(rowCenter, colCenter)
      );

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    sceneRef.current.querySelectorAll(".cube").forEach((cube) =>
      gsap.to(cube, {
        duration: leaveDur,
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
      })
    );
  }, [leaveDur]);

  const onClick = useCallback(
    (e: MouseEvent) => {
      if (!rippleOnClick || !sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colHit = Math.floor((e.clientX - rect.left) / cellW);
      const rowHit = Math.floor((e.clientY - rect.top) / cellH);

      const baseRingDelay = 0.15;
      const baseAnimDur = 0.3;
      const baseHold = 0.6;

      const spreadDelay = baseRingDelay / rippleSpeed;
      const animDuration = baseAnimDur / rippleSpeed;
      const holdTime = baseHold / rippleSpeed;

      const rings: Record<number, HTMLElement[]> = {};
      sceneRef.current
        .querySelectorAll(".cube")
        .forEach((cube) => {
          const el = cube as HTMLElement;
          const r = +el.dataset.row!;
          const c = +el.dataset.col!;
          const dist = Math.hypot(r - rowHit, c - colHit);
          const ring = Math.round(dist);
          if (!rings[ring]) rings[ring] = [];
          rings[ring].push(el);
        });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach((ring) => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap((cube) =>
            Array.from(cube.querySelectorAll(".cube-face"))
          );

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: "power3.out",
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: "power3.out",
          });
        });
    },
    [rippleOnClick, gridSize, faceColor, rippleColor, rippleSpeed]
  );

  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) return;
    simPosRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };
    simTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };
    const speed = 0.02;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const tgt = simTargetRef.current;
        pos.x += (tgt.x - pos.x) * speed;
        pos.y += (tgt.y - pos.y) * speed;
        tiltAt(pos.y, pos.x);
        if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize,
          };
        }
      }
      simRAFRef.current = requestAnimationFrame(loop);
    };
    simRAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (simRAFRef.current != null) {
        cancelAnimationFrame(simRAFRef.current);
      }
    };
  }, [autoAnimate, gridSize, tiltAt]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", resetAll);
    el.addEventListener("click", onClick);
    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", resetAll);
      el.removeEventListener("click", onClick);
      rafRef.current != null && cancelAnimationFrame(rafRef.current);
      idleTimerRef.current && clearTimeout(idleTimerRef.current);
    };
  }, [onPointerMove, resetAll, onClick]);

  const cells = Array.from({ length: gridSize });
  const sceneStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: cubeSize
      ? `repeat(${gridSize}, ${cubeSize}px)`
      : `repeat(${gridSize}, 1fr)`,
    gridTemplateRows: cubeSize
      ? `repeat(${gridSize}, ${cubeSize}px)`
      : `repeat(${gridSize}, 1fr)`,
    columnGap: colGap,
    rowGap: rowGap,
    width: '100%',
    height: '100%',
    perspective: '1000px',
  };
  
  const wrapperStyle: React.CSSProperties = {
    width: cubeSize ? `${gridSize * cubeSize}px` : '100%',
    height: cubeSize ? `${gridSize * cubeSize}px` : '100%',
  };

  const cubeFaceStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: borderStyle,
    backgroundColor: faceColor,
    boxShadow: shadow === true ? "0 0 6px rgba(0,0,0,.5)" : (shadow as string) || "none",
  };

  return (
    <div className={`hidden lg:block ${className}`} style={wrapperStyle}>
      <div
        ref={sceneRef}
        style={sceneStyle}
      >
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div 
              key={`${r}-${c}`} 
              className="cube" 
              data-row={r} 
              data-col={c}
              style={{
                position: 'relative',
                transformStyle: 'preserve-3d',
                transform: 'rotateX(0) rotateY(0)',
              }}
            >
              <div className="cube-face" style={{ ...cubeFaceStyle, transform: 'translateZ(50%)' }} />
              <div className="cube-face" style={{ ...cubeFaceStyle, transform: 'rotateX(180deg) translateZ(50%)' }} />
              <div className="cube-face" style={{ ...cubeFaceStyle, transform: 'rotateY(-90deg) translateZ(50%)' }} />
              <div className="cube-face" style={{ ...cubeFaceStyle, transform: 'rotateY(90deg) translateZ(50%)' }} />
              <div className="cube-face" style={{ ...cubeFaceStyle, transform: 'rotateX(90deg) translateZ(50%)' }} />
              <div className="cube-face" style={{ ...cubeFaceStyle, transform: 'rotateX(-90deg) translateZ(50%)' }} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cubes;

