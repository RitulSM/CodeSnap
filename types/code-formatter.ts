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

export interface CodeFormatterState {
  code: string
  language: Language
  theme: Theme
  fontSize: number
  darkMode: boolean
}