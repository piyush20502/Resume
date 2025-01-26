"use client"

import { motion } from "framer-motion"

const responsibilities = [
  {
    title: "Senior Member (Design Wing)",
    organization: "The Technical Club (Gravity), IIITA",
    period: "July 2022 to May 2023",
    details: [
      "Orchestrated 3 large-scale hackathons and curated 5+ technical events, including Aparoksha, with participation exceeding 300 students.",
      "Spearheaded branding efforts, achieving a 40% increase in event visibility through creative designs.",
    ],
  },
  {
    title: "Member",
    organization: "The Prayaas (NGO), IIITA",
    period: "November 2022 to July 2023",
    details: [
      "Orchestrated 52 weekly educational sessions for 30+ children, fostering a collaborative learning environment that promoted teamwork and social skills development.",
      "Organized fundraising initiatives that garnered Rs 1,50,000, enabling expanded educational programs for underprivileged children.",
    ],
  },
]

export default function Responsibilities() {
  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Position of Responsibilities</h2>
      {responsibilities.map((resp, index) => (
        <motion.div
          key={index}
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <h3 className="text-xl font-medium">{resp.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {resp.organization} | {resp.period}
          </p>
          <ul className="list-disc list-inside mt-2">
            {resp.details.map((detail, idx) => (
              <li key={idx} className="mt-1">
                {detail}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  )
}

