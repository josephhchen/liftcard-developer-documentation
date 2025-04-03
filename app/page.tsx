"use client"

import { Tabs } from "@/components/tabs"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="container px-4">
      <motion.header
        className="mb-10 max-w-3xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-3 tracking-tight">Lift Card Documentation</h1>
        <p className="text-muted-foreground text-lg">
          Developer onboarding and codebase documentation for the Lift Card mobile app
        </p>
      </motion.header>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Tabs />
      </motion.div>
    </div>
  )
}

