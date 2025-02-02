"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { GRADIENTS, SUPPORTED_LANGUAGES, THEMES, MIN_FONT_SIZE, MAX_FONT_SIZE } from "@/lib/constants"
import type { CodeFormatterState, GradientStyle, Language, Theme } from "@/types/code-formatter"
import { Download } from "lucide-react"
import type React from "react"
import { downloadImage } from "@/utils/downloadImage"

interface ControlsProps extends CodeFormatterState {
  onLanguageChange: (language: Language) => void
  onThemeChange: (theme: Theme) => void
  onFontSizeChange: (size: number) => void
  onGradientChange: (gradient: GradientStyle) => void
  onDarkModeChange: (enabled: boolean) => void
  previewRef: React.RefObject<HTMLDivElement>
}

export function Controls({
  language,
  theme,
  fontSize,
  gradient,
  darkMode,
  onLanguageChange,
  onThemeChange,
  onFontSizeChange,
  onGradientChange,
  onDarkModeChange,
  previewRef,
}: ControlsProps) {
  const handleExport = async () => {
    await downloadImage(previewRef.current, `codesnap-studio-${language}-${theme}.png`)
  }

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg bg-[#C68FE6] dark:bg-[#6C48C5] p-4 text-[#1230AE] dark:text-[#FFF7F7]">
      <div className="flex flex-col">
        <label htmlFor="gradient" className="mb-2 text-[#1230AE] dark:text-[#FFF7F7]">Select Gradient</label>
        <Select
          defaultValue={gradient.name}
          onValueChange={(value) => {
            const selectedGradient = GRADIENTS.find((g) => g.name === value)
            if (selectedGradient) {
              onGradientChange(selectedGradient)
            }
          }}
        >
          <SelectTrigger className="w-[180px] bg-[#FFF7F7] dark:bg-[#1230AE] text-[#1230AE] dark:text-[#FFF7F7] border-[#6C48C5]">
            <SelectValue placeholder="Select gradient" />
          </SelectTrigger>
          <SelectContent className="bg-[#FFF7F7] dark:bg-[#1230AE] text-[#1230AE] dark:text-[#FFF7F7] border-[#6C48C5]">
            {GRADIENTS.map((g) => (
              <SelectItem key={g.name} value={g.name}>
                {g.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="theme" className="mb-2 text-[#1230AE] dark:text-[#FFF7F7]">Select Theme</label>
        <Select defaultValue={theme} onValueChange={(value) => onThemeChange(value as Theme)}>
          <SelectTrigger className="w-[180px] bg-[#FFF7F7] dark:bg-[#1230AE] text-[#1230AE] dark:text-[#FFF7F7] border-[#6C48C5]">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent className="bg-[#FFF7F7] dark:bg-[#1230AE] text-[#1230AE] dark:text-[#FFF7F7] border-[#6C48C5]">
            {THEMES.map((theme) => (
              <SelectItem key={theme} value={theme}>
                {theme}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="language" className="mb-2 text-[#1230AE] dark:text-[#FFF7F7]">Select Language</label>
        <Select defaultValue={language} onValueChange={(value) => onLanguageChange(value as Language)}>
          <SelectTrigger className="w-[180px] bg-[#FFF7F7] dark:bg-[#1230AE] text-[#1230AE] dark:text-[#FFF7F7] border-[#6C48C5]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent className="bg-[#FFF7F7] dark:bg-[#1230AE] text-[#1230AE] dark:text-[#FFF7F7] border-[#6C48C5]">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <SelectItem key={lang} value={lang}>
                {lang}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="font-size" className="mb-2 text-[#1230AE] dark:text-[#FFF7F7]">Font Size</label>
        <Select 
          defaultValue={fontSize.toString()} 
          onValueChange={(value) => onFontSizeChange(Number(value))}
        >
          <SelectTrigger className="w-[100px] bg-[#FFF7F7] dark:bg-[#1230AE] text-[#1230AE] dark:text-[#FFF7F7] border-[#6C48C5]">
            <SelectValue placeholder="Font size" />
          </SelectTrigger>
          <SelectContent className="bg-[#FFF7F7] dark:bg-[#1230AE] text-[#1230AE] dark:text-[#FFF7F7] border-[#6C48C5]">
            {Array.from(
              { length: (MAX_FONT_SIZE - MIN_FONT_SIZE) / 2 + 1 }, 
              (_, i) => MIN_FONT_SIZE + i * 2
            ).map((size) => (
              <SelectItem key={size} value={size.toString()}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        onClick={handleExport}
        variant="outline"
        size="icon"
        className="bg-[#FFF7F7] dark:bg-[#1230AE] text-[#1230AE] dark:text-[#FFF7F7] border-[#6C48C5]"
      >
        <Download className="h-4 w-4" />
      </Button>

      <div className="flex items-center space-x-2">
        <Switch id="dark-mode" checked={darkMode} onCheckedChange={onDarkModeChange} />
        <label htmlFor="dark-mode" className="text-[#1230AE] dark:text-[#FFF7F7]">
          Dark Mode
        </label>
      </div>
    </div>
  )
}
