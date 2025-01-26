"use client"

import { motion } from "framer-motion"

const skills = {
  Languages: ["Node.js", "C", "C++", "Python", "JavaScript"],
  Frameworks: ["ExpressJS", "ReactJS", "Numpy", "Pandas"],
  "Utilities and DB": ["SQL", "MongoDB"],
  Designing: ["UI/UX", "Figma"],
  "Developer Tools": ["Git", "Linux"],
}

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={category}
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

