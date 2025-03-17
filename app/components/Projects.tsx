"use client"

import { motion } from "framer-motion"
import ImageGallery from "./ImageGallery"

const projects = [
  {
    title: "Malware Detection Automation System Development",
    period: "Jan 2025 - March 2025",
    technologies: "Technology: Python, Flask, PyTorch, Scikit-Learn, VMware, REMnux, Random Forest",
    link: "https://github.com/piyush20502/MalBullying",
    details: [
      "Designed and implemented an AI-powered malware detection system with 3-layer security: static analysis, dynamic behavior analysis, and network threat intelligence.",
      "Enhanced threat detection by 30 % using machine learning (PyTorch, Scikit-Learn) for adaptive anomaly detection.",
      "• Developed a sandboxed environment for safe malware execution, preventing system compromise during dynamic analysis.",
    ],
    images: [
      // "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pic%204.jpg-tz4WuaE25P4XPCe4ZMInAubb9rFgvo.jpeg",
      // "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pic%203.jpg-HwCXHDm7eYQWFp2VBXNnqq0GLnOg23.jpeg",
    ],
  },
  {
    title: "Hostel Management System",
    period: "May 2023 - October 2023",
    technologies: "Figma, ReactJS, Node.js, ExpressJS",
    link: "https://github.com/yourusername/hostel-management",
    details: [
      "Engineered an intuitive user interface with Figma, enhancing usability for 500+ users.",
      "Ensuring efficient data handling and a 20% reduction in response time.",
      "Implemented a robust authentication system, enhancing user data security.",
    ],
    images: [
      // "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pic%201.jpg-IOeUrX9vIwCqQt2Z320jSEtRAvZsCy.jpeg",
      // "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pic%202.jpg-Oh8w8p1PZsz5oPSRsr5OSXl1hGJWnv.jpeg",
    ],
  },
]

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-gray-200 px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-6">Project Experience</h2>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="mb-12 bg-gray-800 rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-indigo-400">{project.title}</h3>
          <p className="text-lg mb-2 text-gray-400">{project.period}</p>
          <p className="text-base mb-4 text-gray-400">Technologies: {project.technologies}</p>

          {/* Image Gallery */}
          <div className="mb-6">
            <ImageGallery title={project.title} images={project.images} />
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline mb-4 inline-block"
          >
            GitHub Repository
          </a>
          <ul className="list-disc list-inside space-y-2">
            {project.details.map((detail, idx) => (
              <li key={idx} className="text-base text-gray-300">
                {detail}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )
}

