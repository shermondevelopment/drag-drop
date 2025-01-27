import { Menu } from 'lucide-react'
import { useMenuContext } from '../../contexts/menu'
import { Button } from '../Button'

export function Header() {

  const { setOpen } = useMenuContext()
  return (
    <header className="h-[90px] border-b">
      <nav className="border-gray-200 bg-white p-8 lg:px-6 dark:bg-white">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <Button className="flex items-center" onClick={() => setOpen((prevValue) => !prevValue)}>
            <Menu />
          </Button>
        </div>
      </nav>
    </header>
  )
}
