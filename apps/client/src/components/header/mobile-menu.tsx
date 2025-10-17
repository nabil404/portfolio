'use client'

import { NavLinks } from '@/components/header/nav-links'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { SiteName } from '@/components/header/site-name'
import { Menu, X } from 'lucide-react'
import { useLayout } from '@/context/layout-context'

export const MobileMenu = () => {
  const { isOpen, toggleMenu } = useLayout()

  return (
    <Sheet open={isOpen} onOpenChange={toggleMenu}>
      <SheetTrigger className="md:hidden" asChild>
        <Button variant="outline">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>
            <SiteName />
          </SheetTitle>
          <SheetClose asChild>
            <Button variant="outline" size="icon" className="absolute top-4 right-4 hover:bg-muted">
              <X className="h-6 w-6" />
            </Button>
          </SheetClose>
        </SheetHeader>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLinks isMobile />
        </div>
      </SheetContent>
    </Sheet>
  )
}
