"use client"

import { motion } from "framer-motion"

const educationData = [
  {
    institution: "Indian Institute of Information Technology, Allahabad",
    degree: "B.Tech in Information Technology",
    period: "November 2022 - July 2026",
    details: "GPA: 7.22/10",
  },
  {
    institution: "JVM Shyamali",
    degree: "XII (CBSE)",
    period: "July 2021",
    details: "Percentage: 87",
  },
  {
    institution: "DAV Kapildev",
    degree: "X (CBSE)",
    period: "May 2019",
    details: "Percentage: 94",
  },
]

export default function Education() {
  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <h3 className="text-xl font-medium">{edu.institution}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{edu.degree}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</p>
          <p className="mt-1">{edu.details}</p>
        </motion.div>
      ))}
    </motion.section>
  )
}

