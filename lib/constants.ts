import type { GradientStyle, Language, Theme } from "@/types/code-formatter"

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

export const GRADIENTS: GradientStyle[] = [
  {
    name: "Teal to Blue",
    from: "from-teal-400",
    to: "to-blue-500",
  },
  {
    name: "Purple to Pink",
    from: "from-purple-400",
    to: "to-pink-500",
  },
  {
    name: "Orange to Red",
    from: "from-orange-400",
    to: "to-red-500",
  },
  {
    name: "Green to Emerald",
    from: "from-green-400",
    to: "to-emerald-500",
  },
  {
    name: "Blue to Indigo",
    from: "from-blue-400",
    to: "to-indigo-500",
  },
]

export const MIN_FONT_SIZE = 14
export const MAX_FONT_SIZE = 50
