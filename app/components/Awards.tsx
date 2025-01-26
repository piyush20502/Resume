"use client"

import { motion } from "framer-motion"

const awards = [
  "National Talent Search Examination Scholar (NTSE Scholar)",
  "National Cadet Corps (B Certificate)",
  "SOF National Science Olympiad (Certificate of Distinction & Medal of Distinction)",
  "SOF International Mathematics Olympiad (Certificate of School Excellence & Gold Medal of Excellence)",
]

export default function Awards() {
  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Awards</h2>
      <ul className="list-disc list-inside">
        {awards.map((award, index) => (
          <motion.li
            key={index}
            className="mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            {award}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}

