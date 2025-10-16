'use client'

import React, { createContext, useContext, useState } from 'react'

export interface LayoutContextValue {
  isOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
  openMenu: () => void
}

const layoutContext = createContext<LayoutContextValue | null>(null)

export const useLayout = () => {
  const context = useContext(layoutContext)
  if (!context) {
    throw new Error('useLayout must be used within NavProvider')
  }
  return context
}

export const LayoutContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const openMenu = () => {
    setIsOpen(true)
  }

  return (
    <layoutContext.Provider value={{ isOpen, toggleMenu, closeMenu, openMenu }}>
      {children}
    </layoutContext.Provider>
  )
}
