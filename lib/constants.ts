import type { Language, Theme } from "@/types/code-formatter"

export const SUPPORTED_LANGUAGES: Language[] = [
  "javascript",
  "python",
  "java",
  "cpp",
  "html",
  "css",
  "typescript",
  "ruby",
  "go",
  "rust",
]

export const THEMES: Theme[] = [
  "coldarkDark",
  "dracula",
  "nightOwl",
  "oneDark",
  "github",
  "vsDark",
  "vsLight",
  "nord",
  "oceanicNext",
  "material",
]

export const MIN_FONT_SIZE = 14
export const MAX_FONT_SIZE = 50