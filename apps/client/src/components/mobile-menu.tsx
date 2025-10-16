'use client'

import { useLayout } from '@/context/layout-context'
import { cn } from '@/lib/utils'
import { NavLinks } from '@/components/nav-links'

export const MobileMenu = () => {
  const { isOpen } = useLayout()

  return (
    <div
      className={cn(
        'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
      )}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-700">
        <NavLinks isMobile />
      </div>
    </div>
  )
}
