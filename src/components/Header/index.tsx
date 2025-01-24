import { Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="h-[90px] border-b">
      <nav className="border-gray-200 bg-white p-8 lg:px-6 dark:bg-white">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <a href="/" className="flex items-center">
            <Menu />
          </a>
        </div>
      </nav>
    </header>
  )
}
