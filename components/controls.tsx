"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { SUPPORTED_LANGUAGES, THEMES, MIN_FONT_SIZE, MAX_FONT_SIZE } from "@/lib/constants"
import type { CodeFormatterState, Language, Theme } from "@/types/code-formatter"
import { Download } from "lucide-react"
import type React from "react"
import { downloadImage } from "@/utils/downloadImage"

interface ControlsProps extends CodeFormatterState {
  onLanguageChange: (language: Language) => void
  onThemeChange: (theme: Theme) => void
  onFontSizeChange: (size: number) => void
  onDarkModeChange: (enabled: boolean) => void
  previewRef: React.RefObject<HTMLDivElement>
}

export function Controls({
  language,
  theme,
  fontSize,
  darkMode,
  onLanguageChange,
  onThemeChange,
  onFontSizeChange,
  onDarkModeChange,
  previewRef,
}: ControlsProps) {
  const handleExport = async () => {
    await downloadImage(previewRef.current, `codesnap-studio-${language}-${theme}.png`)
  }

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg bg-[#EDF2F7] dark:bg-[#2D3748] p-4 text-[#1A202C] dark:text-[#F7FAFC]">
      <Select defaultValue={theme} onValueChange={(value) => onThemeChange(value as Theme)}>
        <SelectTrigger className="w-[180px] bg-[#FFFFFF] dark:bg-[#1A202C] text-[#1A202C] dark:text-[#F7FAFC] border-[#E2E8F0] dark:border-[#4A5568]">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent className="bg-[#FFFFFF] dark:bg-[#1A202C] text-[#1A202C] dark:text-[#F7FAFC] border-[#E2E8F0] dark:border-[#4A5568]">
          {THEMES.map((theme) => (
            <SelectItem key={theme} value={theme}>
              {theme}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select defaultValue={language} onValueChange={(value) => onLanguageChange(value as Language)}>
        <SelectTrigger className="w-[180px] bg-[#FFFFFF] dark:bg-[#1A202C] text-[#1A202C] dark:text-[#F7FAFC] border-[#E2E8F0] dark:border-[#4A5568]">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent className="bg-[#FFFFFF] dark:bg-[#1A202C] text-[#1A202C] dark:text-[#F7FAFC] border-[#E2E8F0] dark:border-[#4A5568]">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <SelectItem key={lang} value={lang}>
              {lang}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select 
        defaultValue={fontSize.toString()} 
        onValueChange={(value) => onFontSizeChange(Number(value))}
      >
        <SelectTrigger className="w-[100px] bg-[#FFFFFF] dark:bg-[#1A202C] text-[#1A202C] dark:text-[#F7FAFC] border-[#E2E8F0] dark:border-[#4A5568]">
          <SelectValue placeholder="Font size" />
        </SelectTrigger>
        <SelectContent className="bg-[#FFFFFF] dark:bg-[#1A202C] text-[#1A202C] dark:text-[#F7FAFC] border-[#E2E8F0] dark:border-[#4A5568]">
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

      <div className="flex items-center space-x-2">
        <Button
          onClick={handleExport}
          variant="outline"
          size="icon"
          className="bg-[#FFFFFF] dark:bg-[#1A202C] text-[#1A202C] dark:text-[#F7FAFC] border-[#E2E8F0] dark:border-[#4A5568]"
        >
          <Download className="h-4 w-4" />
        </Button>

        <div className="flex items-center space-x-2">
          <Switch id="dark-mode" checked={darkMode} onCheckedChange={onDarkModeChange} />
          <label htmlFor="dark-mode" className="text-[#1A202C] dark:text-[#F7FAFC]">
            Dark Mode
          </label>
        </div>
      </div>
    </div>
  )
}