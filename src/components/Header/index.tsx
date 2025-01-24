import ControlleLogo from '../../assets/icons/controlle.svg'

export function Header() {
  return (
    <header className="shadow-inner">
      <nav className="border-gray-200 bg-white p-8 lg:px-6 dark:bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="/" className="flex items-center">
            <ControlleLogo  />
          </a>
        </div>
      </nav>
    </header>
  )
}
