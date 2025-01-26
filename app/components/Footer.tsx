"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="bg-white dark:bg-gray-800 p-4 text-center text-gray-600 dark:text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p className="mb-2">© {new Date().getFullYear()} Piyush Priyadarshi. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.codechef.com/users/tidy_willow_99"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
        >
          CodeChef
        </a>
        <a
          href="https://leetcode.com/blackbeltcoder"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
        >
          LeetCode
        </a>
        <a
          href="https://github.com/piyush20502"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
        >
          GitHub
        </a>
      </div>
    </motion.footer>
  )
}

