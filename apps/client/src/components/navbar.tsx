import { NavLinks } from '@/components/nav-links'
import { MobileMenuButton } from '@/components/mobile-menu-button'
import { MobileMenu } from '@/components/mobile-menu'
import { SiteName } from '@/components/site-name'

export const Navbar = () => {
  return (
    <nav className="fixed w-screen glass-effect">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <SiteName />
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLinks />
            </div>
          </div>
          {/* Mobile Hamburger Button */}
          <MobileMenuButton />
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu />
    </nav>
  )
}
