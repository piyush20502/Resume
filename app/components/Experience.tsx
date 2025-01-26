"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "IOT Security Researcher Intern",
    company: "C3i Hub, IIT Kanpur",
    period: "April 2024 - April 2025",
    responsibilities: [
      "Analyzed real-time sensor activity across 15+ Android devices using ADB, identifying unauthorized access events, which led to the development of enhanced privacy protocols and reduced potential breaches by over 50%.",
      "Engineered machine learning models with 92% accuracy, identifying device types from network traffic, significantly advancing the reliability of network traffic classification.",
      "Conducted over 20 ethical security assessments, exposing vulnerabilities in video stream transmission and improving security frameworks by 30%.",
    ],
  },
]

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{exp.title}</h3>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
            {exp.company} | {exp.period}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-base">
                {resp}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )
}

