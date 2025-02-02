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
      className="min-h-[200px] w-full rounded-lg bg-[#FFF7F7] dark:bg-[#1230AE] p-4 font-mono text-sm text-[#1230AE] dark:text-[#FFF7F7] placeholder-[#6C48C5] dark:placeholder-[#C68FE6] border-[#6C48C5]"
    />
  )
}

