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
  coldarkDark: themes.oneDark,
  dracula: themes.dracula,
  nightOwl: themes.nightOwl,
  oneDark: themes.oneDark,
  github: themes.github,
  vsDark: themes.vsDark,
  vsLight: themes.vsLight,
  nord: themes.oneDark,
  oceanicNext: themes.oceanicNext,
  material: themes.dracula
} as const

export function CodePreview({ 
  code, 
  language, 
  theme, 
  fontSize,
  darkMode,
  className,
  previewRef 
}: CodePreviewProps) {
  return (
    <div
      ref={previewRef}
      className={cn(
        "relative overflow-hidden rounded-lg shadow-2xl",
        darkMode ? "bg-[#1A202C]" : "bg-[#F7FAFC]",
        className
      )}
    >
      <div className="relative rounded-lg">
        <div className="flex items-center gap-1.5 border-b border-[#E2E8F0] dark:border-[#2D3748] px-4 py-2">
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
                    <span className="table-cell pr-4 text-sm text-[#A0AEC0] dark:text-[#4A5568]">{i + 1}</span>
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