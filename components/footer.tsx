"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      className="border-t py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container flex flex-col items-center justify-between gap-2 md:flex-row md:gap-0">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Lift Card. All rights reserved.
        </p>
        <p className="text-center text-sm text-muted-foreground md:text-right">Built with Next.js and Tailwind CSS</p>
      </div>
    </motion.footer>
  )
}

