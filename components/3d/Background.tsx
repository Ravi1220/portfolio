'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, Float, PerspectiveCamera } from '@react-three/drei'
import { TechSphere } from './TechSphere'

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Floating tech spheres */}
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <TechSphere position={[-4, 2, -5]} technology="Python" />
        </Float>
        <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
          <TechSphere position={[4, -2, -5]} technology="React" />
        </Float>
        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
          <TechSphere position={[0, 3, -5]} technology="ML" />
        </Float>
      </Canvas>
    </div>
  )
}

