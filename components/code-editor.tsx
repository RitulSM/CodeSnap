"use client"

import { Textarea } from "@/components/ui/textarea"

interface CodeEditorProps {
  code: string
  onChange: (value: string) => void
}

export function CodeEditor({ code, onChange }: CodeEditorProps) {
  return (
    <Textarea
      value={code}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Paste your code here..."
      className="min-h-[200px] w-full rounded-lg bg-[#F7FAFC] dark:bg-[#1A202C] p-4 font-mono text-sm text-[#1A202C] dark:text-[#F7FAFC] placeholder-[#4A5568] dark:placeholder-[#A0AEC0] border-[#E2E8F0] dark:border-[#2D3748]"
    />
  )
}
