"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  tabs: { id: string; label: string }[]
}

export default function Header({ activeTab, setActiveTab, tabs }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-gray-900 p-4 sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="md:hidden absolute left-4">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <ul
          className={`md:flex ${isMenuOpen ? "flex" : "hidden"} flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-gray-900 md:bg-transparent md:justify-center w-full`}
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="mx-2 my-2 md:my-0">
              <button
                onClick={() => {
                  setActiveTab(tab.id)
                  setIsMenuOpen(false)
                }}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  activeTab === tab.id ? "bg-indigo-600 text-white" : "text-white hover:bg-gray-800"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

