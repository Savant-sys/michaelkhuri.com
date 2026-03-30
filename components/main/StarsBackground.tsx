"use client";

import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const STAR_COUNT = 5000;
const SPHERE_RADIUS = 1.2;

/** Uniform random points in a ball; avoids maath inSphere's mag===0 → NaN. */
function fillSphereBuffer(buffer: Float32Array, radius: number) {
  const TAU = Math.PI * 2;
  for (let i = 0; i < buffer.length; i += 3) {
    const u = Math.random();
    const v = Math.random();
    const theta = Math.acos(2 * v - 1);
    const phi = TAU * u;
    const sinT = Math.sin(theta);
    const dx = sinT * Math.cos(phi);
    const dy = sinT * Math.sin(phi);
    const dz = Math.cos(theta);
    const r = radius * Math.cbrt(Math.random());
    buffer[i] = dx * r;
    buffer[i + 1] = dy * r;
    buffer[i + 2] = dz * r;
  }
  return buffer;
}

const StarBackground = (props: Record<string, unknown>) =>
{
  const ref = useRef<React.ElementRef<typeof Points>>(null);
  const [sphere] = useState(() =>
    fillSphereBuffer(new Float32Array(STAR_COUNT * 3), SPHERE_RADIUS)
  );

  useFrame((_, delta) =>
  {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC<{}> = () => (
  <div className="w-full h-auto fixed inset-0 pointer-events-none z-0"
    style={{ zIndex: -1 }}
  >
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarBackground />
    </Canvas>
  </div>
);

export default StarsCanvas;
