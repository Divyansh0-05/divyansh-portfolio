"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
// @ts-expect-error maath types are missing
import * as random from "maath/random/dist/maath-random.esm"
import { motion } from "framer-motion"

function ParticleCloud(props: any) {
  const ref = useRef<any>(null)
  
  // Create 5000 particles -> 15000 vertices
  const sphere = useMemo<Float32Array>(() => {
    return random.inSphere(new Float32Array(15000), { radius: 1.5 }) as Float32Array
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15
      ref.current.rotation.y -= delta / 20
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  )
}

export default function BackgroundAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 z-[0] pointer-events-none bg-[#000000]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,rgba(0,0,0,1)_100%)] opacity-80" />
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleCloud />
      </Canvas>
    </motion.div>
  )
}

