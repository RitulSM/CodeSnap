export type Language = "javascript" | "python" | "java" | "cpp" | "html" | "css" | "typescript" | "ruby" | "go" | "rust"

export type Theme =
  | "coldarkDark"
  | "dracula"
  | "nightOwl"
  | "oneDark"
  | "github"
  | "vsDark"
  | "vsLight"
  | "nord"
  | "oceanicNext"
  | "material"

export type GradientStyle = {
  name: string  
  from: string
  to: string
}

export interface CodeFormatterState {
  code: string
  language: Language
  theme: Theme
  fontSize: number
  gradient: GradientStyle
  darkMode: boolean
}

