"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Steps } from "@/components/ui/steps"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function GettingStarted() {
  return (
    <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
      <motion.div variants={item}>
        <h2 className="text-2xl font-bold tracking-tight">Getting Started</h2>
        <p className="text-muted-foreground mt-2">
          Welcome to the Lift Card developer documentation. Follow these steps to set up your development environment.
        </p>
      </motion.div>

      <motion.div variants={item}>
        <Card className="overflow-hidden">
          <CardHeader className="bg-muted/50">
            <CardTitle>Prerequisites</CardTitle>
            <CardDescription>Make sure you have the following installed before proceeding</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <ul className="list-disc pl-5 space-y-2">
              <li>Node.js (v16 or later)</li>
              <li>npm or yarn</li>
              <li>Xcode (for iOS development)</li>
              <li>Android Studio (for Android development)</li>
              <li>Git</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Steps
          items={[
            {
              title: "Clone the repository",
              description: "git clone https://github.com/your-org/lift-card.git",
            },
            {
              title: "Install dependencies",
              description: "cd lift-card && npm install",
            },
            {
              title: "Set up environment variables",
              description: "Copy .env.example to .env and fill in the required values",
            },
            {
              title: "Start the development server",
              description: "npm run start",
            },
            {
              title: "Run on a device or simulator",
              description: "npm run ios or npm run android",
            },
          ]}
        />
      </motion.div>

      <motion.div variants={item}>
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            Make sure you have access to the Firebase project. Contact the project admin if you need access.
          </AlertDescription>
        </Alert>
      </motion.div>

      <motion.div variants={item}>
        <Card>
          <CardHeader className="bg-muted/50">
            <CardTitle>Useful Commands</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="rounded-md bg-muted p-4 transition-all hover:bg-muted/70">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  <p className="font-mono text-sm">npm run start</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Start the Metro bundler</p>
              </div>

              <div className="rounded-md bg-muted p-4 transition-all hover:bg-muted/70">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  <p className="font-mono text-sm">npm run ios</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Run on iOS simulator</p>
              </div>

              <div className="rounded-md bg-muted p-4 transition-all hover:bg-muted/70">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  <p className="font-mono text-sm">npm run android</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Run on Android emulator</p>
              </div>

              <div className="rounded-md bg-muted p-4 transition-all hover:bg-muted/70">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  <p className="font-mono text-sm">npm run test</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Run tests</p>
              </div>

              <div className="rounded-md bg-muted p-4 transition-all hover:bg-muted/70">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  <p className="font-mono text-sm">npm run lint</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Run linter</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

