"use client"

import { useRef, useState } from "react"
import { CodeEditor } from "@/components/code-editor"
import { CodePreview } from "@/components/code-preview"
import { Controls } from "@/components/controls"
import { GRADIENTS } from "@/lib/constants"
import type { CodeFormatterState } from "@/types/code-formatter"

export default function CodeFormatter() {
  const previewRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement)
  const [state, setState] = useState<CodeFormatterState>({
    code: "",
    language: "javascript",
    theme: "coldarkDark",
    fontSize: 14,
    gradient: GRADIENTS[0],
    darkMode: true,
  })

  return (
    <div className={state.darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-[#0D0D0D] dark:bg-[#111827] p-4 transition-colors">
        <div className="mx-auto max-w-5xl space-y-4">
          <h1 className="text-center text-4xl font-bold text-[#1E90FF] dark:text-[#38BDF8]">CodeSnaps</h1>
          <p className="text-center text-[#A0AEC0] dark:text-[#CBD5E0]">
            Craft, style, and share your code snippets with ease
          </p>

            <CodeEditor code={state.code} onChange={(code) => setState((prev) => ({ ...prev, code }))} />

            <CodePreview {...state} previewRef={previewRef} />

          <Controls
            {...state}
            previewRef={previewRef}
            onLanguageChange={(language) => setState((prev) => ({ ...prev, language }))}
            onThemeChange={(theme) => setState((prev) => ({ ...prev, theme }))}
            onFontSizeChange={(fontSize) => setState((prev) => ({ ...prev, fontSize }))}
            onGradientChange={(gradient) => setState((prev) => ({ ...prev, gradient }))}
            onDarkModeChange={(darkMode) => setState((prev) => ({ ...prev, darkMode }))}
          />
        </div>
      </main>
    </div>
  )
}
