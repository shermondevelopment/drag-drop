import { useState } from 'react'

export function AddNewCard() {
  const [titleCard, setTitleCard] = useState('')
  const [line, setLine] = useState(1)
  const [cols, setCols] = useState(1)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(titleCard)
    console.log(line)
    console.log(cols)
    console.log(event)
  }

  return (
    <div
      id="crud-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50  hidden h-[calc(100vh)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/70 md:inset-0"
    >
      <div className="relative max-h-full w-full max-w-md p-4">
        <div className="relative rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 md:p-5">
            <h3 className="text-center text-lg font-semibold text-gray-900">Adicionar novo card</h3>
            <button
              type="button"
              className="ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="size-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5" onSubmit={onSubmit}>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
                  Titulo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setTitleCard(e.currentTarget.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Exemplo: Lembrete pagar as contas"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="price" className="mb-2 block text-sm font-medium text-gray-900">
                  Linhas
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  min={1}
                  onChange={(e) => setLine(+e.currentTarget.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="$2999"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="price" className="mb-2 block text-sm font-medium text-gray-900">
                  Colunas
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
				  onChange={(e) => setCols(+e.currentTarget.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
				  min={1}
                  placeholder="1"
                  required={true}
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                className="-ms-1 me-1 size-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Adicionar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
