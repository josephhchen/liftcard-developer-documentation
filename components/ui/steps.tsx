"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: string
    description?: string
  }[]
}

export function Steps({ items, className, ...props }: StepsProps) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex gap-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="flex h-8 w-8 items-center justify-center rounded-full border bg-background text-sm font-medium"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
            >
              {index + 1}
            </motion.div>
            {index < items.length - 1 && (
              <motion.div
                className="h-full w-px bg-border"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              />
            )}
          </div>
          <div className="pb-6 pt-1">
            <h3 className="font-medium">{item.title}</h3>
            {item.description && <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

