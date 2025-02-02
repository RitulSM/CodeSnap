"use client"

import { RefObject } from "react"
import { Highlight, themes } from "prism-react-renderer"
import type { CodeFormatterState } from "@/types/code-formatter"
import { cn } from "@/lib/utils"

interface CodePreviewProps extends CodeFormatterState {
  className?: string
  previewRef: RefObject<HTMLDivElement>
}

const themeMap = {
  coldarkDark: themes.oneDark, // Using oneDark as fallback for coldarkDark
  dracula: themes.dracula,
  nightOwl: themes.nightOwl,
  oneDark: themes.oneDark,
  github: themes.github,
  vsDark: themes.vsDark,
  vsLight: themes.vsLight,
  nord: themes.oneDark, // Using oneDark as fallback for nord
  oceanicNext: themes.oceanicNext,
  material: themes.dracula // Using dracula as fallback for material
} as const

export function CodePreview({ 
  code, 
  language, 
  theme, 
  fontSize, 
  gradient, 
 
  className,
  previewRef 
}: CodePreviewProps) {
  return (
    <div
      ref={previewRef}
      className={cn(
        "relative overflow-hidden rounded-lg shadow-2xl",
        "bg-gradient-to-r",
        gradient.from,
        gradient.to,
        className,
      )}
    >
      <div className="relative rounded-lg bg-zinc-950">
        <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
        </div>
        <div className="group">
          <Highlight 
            theme={themeMap[theme]} 
            code={code.trim()} 
            language={language}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={cn("overflow-x-auto p-4 text-left", className)}
                style={{
                  ...style,
                  backgroundColor: "transparent",
                  fontSize: `${fontSize}px`,
                }}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })} className="table-row">
                    <span className="table-cell pr-4 text-sm text-zinc-500">{i + 1}</span>
                    <span className="table-cell">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </span>
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  )
}