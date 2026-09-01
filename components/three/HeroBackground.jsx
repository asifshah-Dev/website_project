'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShapes = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  const shapes = useMemo(() => {
    return [
      { position: [-3, 1, 0], size: 1.5, color: '#F59E0B', type: 'torus' },
      { position: [3, -1, -1], size: 1, color: '#6366F1', type: 'sphere' },
      { position: [2, 2, -2], size: 0.8, color: '#F59E0B', type: 'octahedron' },
      { position: [-2, -2, 1], size: 1.2, color: '#6366F1', type: 'box' },
      { position: [0, 2, -1], size: 0.6, color: '#F59E0B', type: 'sphere' },
    ];
  }, []);

  return (
    <group ref={groupRef}>
      {shapes.map((shape, index) => (
        <Float key={index} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={shape.position}>
            {shape.type === 'torus' && (
              <torusGeometry args={[shape.size, shape.size * 0.3, 16, 32]} />
            )}
            {shape.type === 'sphere' && (
              <sphereGeometry args={[shape.size, 32, 32]} />
            )}
            {shape.type === 'octahedron' && (
              <octahedronGeometry args={[shape.size, 0]} />
            )}
            {shape.type === 'box' && (
              <boxGeometry args={[shape.size, shape.size, shape.size]} />
            )}
            <meshStandardMaterial
              color={shape.color}
              roughness={0.1}
              metalness={0.1}
              transparent
              opacity={0.3}
              wireframe
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const ParticleField = () => {
  const particlesRef = useRef();
  const particlesCount = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#F59E0B"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const HeroBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <FloatingShapes />
      <ParticleField />
    </Canvas>
  );
};

export default HeroBackground;