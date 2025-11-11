// components/header.tsx
import Menubar from "./menubar"
import NavigationMenu from "./navigation-menu"

export function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-neutral-900 shadow-md">
      <Menubar />
      <NavigationMenu />
    </header>
  )
}
