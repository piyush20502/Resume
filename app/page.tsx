"use client"

import { useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import { AnimatePresence } from "framer-motion"

export default function Page() {
  const [activeTab, setActiveTab] = useState("home")

  const tabs = [
    { id: "home", label: "Home", component: Home },
    { id: "about", label: "About", component: About },
    { id: "experience", label: "Experience", component: Experience },
    { id: "projects", label: "Projects", component: Projects },
    { id: "skills", label: "Skills", component: Skills },
  ]

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {tabs.map((tab) => activeTab === tab.id && <tab.component key={tab.id} />)}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

