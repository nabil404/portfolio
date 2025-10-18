import { NavLinks } from '@/components/header/nav-links'
import { MobileMenu } from '@/components/header/mobile-menu'
import { SiteName } from '@/components/header/site-name'

export const Navbar = () => {
  return (
    <nav className="fixed w-screen glass-effect z-50 top-0" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <SiteName />
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLinks />
            </div>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
