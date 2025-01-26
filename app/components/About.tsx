"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react"

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-gray-200 px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg mb-8">
        I'm a passionate B.Tech student at the Indian Institute of Information Technology, Allahabad, specializing in
        Information Technology. With a strong foundation in web development and a keen interest in IoT, I'm constantly
        exploring new technologies and pushing the boundaries of what's possible in the digital realm.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <Mail size={24} className="mr-4 text-indigo-400" />
          <a href="mailto:piyushpriyadarshi1020@gmail.com" className="hover:underline">
            piyushpriyadarshi1020@gmail.com
          </a>
        </motion.div>
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <Phone size={24} className="mr-4 text-indigo-400" />
          <a href="tel:+916200606360" className="hover:underline">
            +91-6200606360
          </a>
        </motion.div>
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <MapPin size={24} className="mr-4 text-indigo-400" />
          <span>Ranchi, Jharkhand</span>
        </motion.div>
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <Linkedin size={24} className="mr-4 text-indigo-400" />
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
        >
          <Download size={20} />
          Download Resume
        </a>
      </motion.div>
    </motion.div>
  )
}

