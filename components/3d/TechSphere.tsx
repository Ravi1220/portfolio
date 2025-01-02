'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { Mesh } from 'three'

interface TechSphereProps {
  position: [number, number, number]
  technology: string
}

export function TechSphere({ position, technology }: TechSphereProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#007BFF"
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
      <Text
        position={[0, 0, 1.2]}
        fontSize={0.4}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Geist-Bold.ttf"
      >
        {technology}
      </Text>
    </group>
  )
}

