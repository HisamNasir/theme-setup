'use client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        defaultTheme='dark'
        themes={['light', 'dark', 'purple','amber','green','sky','red','brown']}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}