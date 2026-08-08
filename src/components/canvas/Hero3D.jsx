import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Torus, TorusKnot, Icosahedron, MeshDistortMaterial } from '@react-three/drei'

function SpinningCentralOrb() {
  const meshRef = useRef()
  const ringRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.4
      meshRef.current.rotation.x = t * 0.25
      meshRef.current.position.y = Math.sin(t * 1.5) * 0.25
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.5
      ringRef.current.rotation.x = Math.PI / 3 + t * 0.2
    }
  })

  return (
    <group>
      {/* Central Spinning Distorted 3D Wireframe Orb */}
      <Sphere ref={meshRef} args={[1.7, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#0ea5e9"
          attach="material"
          distort={0.45}
          speed={2.5}
          roughness={0.1}
          metalness={0.9}
          wireframe={true}
        />
      </Sphere>

      {/* Orbiting Spinning 3D Ring around Central Orb */}
      <Torus ref={ringRef} args={[2.5, 0.05, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8b5cf6" roughness={0.2} metalness={0.8} wireframe />
      </Torus>
    </group>
  )
}

function FloatingShapes() {
  const torusKnotRef = useRef()
  const icoRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x = t * 0.5
      torusKnotRef.current.rotation.y = t * 0.4
      torusKnotRef.current.position.x = Math.sin(t * 0.8) * 2.8 + 3.4
      torusKnotRef.current.position.y = Math.cos(t * 1.1) * 1.5
    }
    if (icoRef.current) {
      icoRef.current.rotation.x = -t * 0.4
      icoRef.current.rotation.z = t * 0.6
      icoRef.current.position.x = -Math.sin(t * 0.7) * 2.8 - 3.4
      icoRef.current.position.y = Math.sin(t * 0.9) * 1.5
    }
  })

  return (
    <group>
      <TorusKnot ref={torusKnotRef} args={[0.75, 0.24, 128, 32]} position={[3.6, 0, -1]}>
        <meshStandardMaterial color="#8b5cf6" roughness={0.2} metalness={0.8} wireframe />
      </TorusKnot>

      <Icosahedron ref={icoRef} args={[0.95, 0]} position={[-3.6, 0, -1]}>
        <meshStandardMaterial color="#10b981" roughness={0.2} metalness={0.8} wireframe />
      </Icosahedron>
    </group>
  )
}

function FloatingParticles() {
  const particlesRef = useRef()

  const positions = useMemo(() => {
    const particleCount = 180
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.12
      particlesRef.current.rotation.x = t * 0.06
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={180}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.065} color="#38bdf8" transparent opacity={0.75} sizeAttenuation />
    </points>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full opacity-70">
      <Canvas camera={{ position: [0, 0, 6.2], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={1.4} />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color="#8b5cf6" />
        <pointLight position={[10, -10, 10]} intensity={1.0} color="#0ea5e9" />
        
        <SpinningCentralOrb />
        <FloatingShapes />
        <FloatingParticles />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  )
}
