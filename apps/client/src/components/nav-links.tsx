'use client'

import { useLayout } from '@/context/layout-context'
import { cn } from '@/lib/utils'
import { navLinks } from '@/constants'

export const NavLinks = ({ isMobile = false }) => {
  const { closeMenu } = useLayout()

  const handleClick = () => {
    if (isMobile) {
      closeMenu()
    }
  }

  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={handleClick}
          className={cn(
            'text-gray-300 hover:bg-secondary hover:text-white px-2 py-1 rounded-sm font-bold',
            isMobile ? 'block text-base' : 'text-sm',
            'transition-colors duration-200',
          )}
        >
          {link.label}
        </a>
      ))}
    </>
  )
}
