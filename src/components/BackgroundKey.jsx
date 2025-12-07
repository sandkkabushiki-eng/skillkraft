
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function KeyModel() {
    const meshRef = useRef()

    useFrame((state) => {
        // Gentle floating rotation + Mouse Interaction
        const t = state.clock.getElapsedTime()
        const mouseX = state.mouse.x
        const mouseY = state.mouse.y

        // Scroll interaction calculation
        // Normalized scroll (0 to 1 based on viewport height approx)
        const scrollY = window.scrollY
        const scrollProgress = Math.min(scrollY / window.innerHeight, 2) // Cap at 2 screens

        // Key rotates to look at mouse + Scroll Turning (Unlocking action)
        // Original float + Mouse look + Scroll Turn (Z axis)
        meshRef.current.rotation.x = (Math.cos(t / 4) * Math.PI / 8) - (mouseY * 0.5)
        meshRef.current.rotation.y = (Math.sin(t / 4) * Math.PI / 8) + (mouseX * 0.5)
        // Turn the key as we scroll down (Unlock!)
        meshRef.current.rotation.z = (Math.PI / 4) - (scrollProgress * Math.PI / 2)

        // Key floats slightly up and down + Moves forward on scroll
        meshRef.current.position.y = (Math.sin(t / 1.5) / 10) - (scrollProgress * 0.5)
        meshRef.current.position.z = scrollProgress * 2 // Move closer as if entering

        // Gentle parallax movement
        meshRef.current.position.x = mouseX * 0.2
    })

    // Procedural Key Parts
    const color = "#d1d1d1" // Silver/White metal
    const materialProps = {
        color: color,
        roughness: 0.2,
        metalness: 0.8,
        flatShading: false,
    }

    return (
        <group ref={meshRef} scale={[2, 2, 2]} rotation={[0, 0, Math.PI / 4]}>
            {/* Key Bow (Ring part) */}
            <mesh position={[-1.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <torusGeometry args={[0.5, 0.1, 8, 16]} />
                <meshStandardMaterial {...materialProps} />
            </mesh>

            {/* Key Shaft */}
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
                <meshStandardMaterial {...materialProps} />
            </mesh>

            {/* Key Bitting (Teeth) */}
            <mesh position={[1.0, -0.25, 0]}>
                <boxGeometry args={[0.2, 0.4, 0.1]} />
                <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh position={[1.3, -0.35, 0]}>
                <boxGeometry args={[0.15, 0.6, 0.1]} />
                <meshStandardMaterial {...materialProps} />
            </mesh>
        </group>
    )
}

function SakuraParticles({ count = 30 }) {
    const mesh = useRef()
    const dummy = new THREE.Object3D()

    const particles = React.useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -10 + Math.random() * 20
            const yFactor = -10 + Math.random() * 20
            const zFactor = -5 + Math.random() * 10
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp
    }, [count])

    useFrame((state) => {
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle
            t = particle.t += speed / 2
            const s = Math.cos(t)

            dummy.position.set(
                (particle.mx / 10) * s + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * s + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * s + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )
            dummy.scale.set(s, s, s)
            dummy.rotation.set(s * 5, s * 5, s * 5)
            dummy.updateMatrix()

            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <planeGeometry args={[0.2, 0.2]} />
            <meshBasicMaterial color="#ffc0cb" side={THREE.DoubleSide} transparent opacity={0.6} depthWrite={false} />
        </instancedMesh>
    )
}

function InteractiveLight() {
    const light = useRef()
    useFrame((state) => {
        // Move light with mouse
        light.current.position.x = state.mouse.x * 10
        light.current.position.y = state.mouse.y * 10
    })
    return <spotLight ref={light} position={[0, 0, 10]} angle={0.3} penumbra={1} intensity={1} color="#ffcccc" />
}

export default function BackgroundKey() {
    return (
        <div className="canvas-container">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <KeyModel />
                </Float>

                <SakuraParticles count={20} />

                <InteractiveLight />

                <Environment preset="city" />
            </Canvas>
        </div>
    )
}
