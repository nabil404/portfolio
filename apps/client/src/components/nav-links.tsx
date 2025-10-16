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
            'text-gray-300 hover:bg-slate-600 hover:text-white',
            isMobile
              ? 'block px-3 py-2 rounded-md text-base font-medium'
              : 'px-3 py-2 rounded-md text-sm font-medium',
            'transition-colors duration-200',
          )}
        >
          {link.label}
        </a>
      ))}
    </>
  )
}
