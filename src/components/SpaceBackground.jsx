
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

function ShootingStar() {
    const mesh = useRef()
    const speed = useRef(Math.random() * 2 + 1)
    const offset = useRef(Math.random() * 100)

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed.current + offset.current
        // Move diagonally across the screen
        const x = (t % 20) - 10
        const y = -((t % 20) - 10)
        
        mesh.current.position.set(x, y, -5)
        mesh.current.rotation.z = Math.PI / 4
        
        // Reset scale based on position to simulate appearing/disappearing
        const scale = (x > -8 && x < 8) ? 1 : 0
        mesh.current.scale.set(scale, scale * 20, scale)
    })

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[0.02, 0.5, 0.02]} />
            <meshBasicMaterial color="#00ffff" transparent opacity={0.8} />
        </mesh>
    )
}

function WarpTunnel() {
    const count = 1000
    const mesh = useRef()
    const dummy = useMemo(() => new THREE.Object3D(), [])
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -50 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp
    }, [count])

    useFrame((state) => {
        // Warp effect: particles moving fast towards camera
        const t = state.clock.getElapsedTime()
        
        particles.forEach((particle, i) => {
            // Move particles towards camera (positive Z)
            let z = (particle.zFactor + t * 20) % 100
            // Reset to back if too close
            if (z > 20) z -= 100
            
            dummy.position.set(
                particle.xFactor,
                particle.yFactor,
                z
            )
            
            // Scale up as they get closer
            const s = Math.max(0.1, (z + 80) / 100)
            dummy.scale.set(s, s, s)
            dummy.updateMatrix()
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
        </instancedMesh>
    )
}

export default function SpaceBackground() {
    return (
        <div className="canvas-container">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }} dpr={[1, 1.5]}>
                <color attach="background" args={['#050510']} />
                
                {/* Distant Stars */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                
                {/* Warp Effect */}
                <WarpTunnel />
                
                {/* Shooting Stars */}
                <ShootingStar />
                <ShootingStar />
                
                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    )
}
