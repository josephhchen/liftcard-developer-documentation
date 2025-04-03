"use client"

import * as React from "react"
import { ChevronDown, ChevronRight, File, Folder } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileTreeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function FileTree({ children, className, ...props }: FileTreeProps) {
  return (
    <div className={cn("rounded-lg border bg-muted/50 p-2", className)} {...props}>
      <div className="select-none">{children}</div>
    </div>
  )
}

interface FileTreeNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  type?: "directory" | "file"
  active?: boolean
  defaultOpen?: boolean
  children?: React.ReactNode
}

export function FileTreeNode({
  name,
  type = "file",
  active,
  defaultOpen,
  children,
  className,
  ...props
}: FileTreeNodeProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen || false)
  const hasChildren = React.Children.count(children) > 0

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <div
        className={cn(
          "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 transition-colors duration-200 hover:bg-muted",
          active && "bg-accent text-accent-foreground",
        )}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {type === "directory" && hasChildren ? (
          isOpen ? (
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
          ) : (
            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
          )
        ) : null}
        {type === "directory" ? (
          <Folder className="h-4 w-4 shrink-0 text-muted-foreground" />
        ) : (
          <File className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}
        <span className="text-sm">{name}</span>
      </div>
      {hasChildren && (
        <div
          className={cn(
            "ml-6 mt-1 border-l pl-2 overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

