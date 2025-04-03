"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs as TabsComponent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GettingStarted } from "@/components/tabs/getting-started"
import { TechStack } from "@/components/tabs/tech-stack"
import { FileStructure } from "@/components/tabs/file-structure"
import { CodebaseBasics } from "@/components/tabs/codebase-basics"
import { Components } from "@/components/tabs/components"

export function Tabs() {
  const [activeTab, setActiveTab] = useState("getting-started")

  const tabContent = {
    "getting-started": <GettingStarted />,
    "tech-stack": <TechStack />,
    "file-structure": <FileStructure />,
    "codebase-basics": <CodebaseBasics />,
    components: <Components />,
  }

  return (
    <div className="space-y-6">
      <TabsComponent defaultValue="getting-started" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6">
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
          <TabsTrigger value="file-structure">File Structure</TabsTrigger>
          <TabsTrigger value="codebase-basics">Codebase Basics</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
        </TabsList>
      </TabsComponent>

      <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.3,
            }}
            className="p-6"
          >
            {tabContent[activeTab as keyof typeof tabContent]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

