"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let animationFrameId: number
    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let renderer: THREE.WebGLRenderer
    let torus: THREE.Mesh
    let particlesMesh: THREE.Points

    const init = () => {
      if (!canvasRef.current) return

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })

      renderer.setSize(window.innerWidth, window.innerHeight)

      // Create a torus for UI/UX design representation
      const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100)
      const torusMaterial = new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true })
      torus = new THREE.Mesh(torusGeometry, torusMaterial)
      scene.add(torus)

      // Create particles for a dynamic background
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 5000
      const posArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
      const particlesMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0xffffff })
      particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particlesMesh)

      camera.position.z = 5
    }

    const animate = () => {
      if (!torus || !particlesMesh || !renderer || !scene || !camera) return

      torus.rotation.x += 0.01
      torus.rotation.y += 0.01
      particlesMesh.rotation.y += 0.001
      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!camera || !renderer) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    init()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      if (renderer) {
        renderer.dispose()
      }
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-screen overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-24%20at%2010.18.32%20PM-KWzh7jfrK8JA1bc7U58p2SFV3lRYA0.jpeg"
            alt="Piyush Priyadarshi"
            className="w-48 h-48 rounded-full border-4 border-indigo-400 shadow-lg mb-8 object-cover"
          />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-100"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Piyush Priyadarshi
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          B.Tech Student | Web Developer | IoT Enthusiast
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors duration-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </motion.div>
  )
}

