'use client'

import { Menu, X } from 'lucide-react'
import { useLayout } from '@/context/layout-context'
import { Button } from '@/components/ui/button'

export const MobileMenuButton = () => {
  const { isOpen, toggleMenu } = useLayout()

  return (
    <div className="md:hidden">
      <Button
        onClick={toggleMenu}
        variant="outline"
        size="icon"
        aria-label="Toggle menu"
        className="hover:cursor-pointer"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
    </div>
  )
}
