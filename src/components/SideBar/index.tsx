import ControlleLogo from '../../assets/icons/controlle.svg'

export function SideBar() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-gray-50 px-3 py-8">
        <a href="/" className="mb-5 flex items-center ps-2.5">
          <ControlleLogo />
        </a>
        <ul className="space-y-2 font-medium">
          <li>
            <a href="#" className="group flex items-center rounded-lg bg-gray-100 p-2 text-gray-900  hover:bg-gray-100">
              <span className="ms-3">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
