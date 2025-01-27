import { useState } from 'react'
import { CardItemType } from '../../../screens/dashboard'
import { X } from 'lucide-react'
import { Button } from '../../Button'

export interface AddNewCardProps {
  setItemsGrid: React.Dispatch<React.SetStateAction<CardItemType[]>>;
  itemsGrid: CardItemType[];
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}

export function AddNewCard({ setItemsGrid, itemsGrid, openModal, setOpenModal }: AddNewCardProps) {
  const [titleCard, setTitleCard] = useState('')
  const [line, setLine] = useState(1)
  const [cols, setCols] = useState(1)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const id = itemsGrid.length

    const newCard = {
      id,
      col: cols,
      row: line,
      title: titleCard,
    }
    setItemsGrid([...itemsGrid, newCard])
    setTitleCard('')
    setLine(1)
    setCols(1)
    setOpenModal((prevValue) => !prevValue)
  }

  return (
    <div
      id="crud-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`fixed inset-x-0 top-0  z-50 ${openModal ? 'flex' : 'hidden'} h-[calc(100vh)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/70`}
    >
      <div className="relative max-h-full w-full max-w-md p-4">
        <div className="relative rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 md:p-5">
            <h3 className="text-center text-lg font-semibold text-gray-900">Adicionar novo card</h3>
            <Button
              type="button"
              onClick={() => setOpenModal(false)}
              className="ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              data-modal-toggle="crud-modal"
            >
              <X />
              <span className="sr-only">Close modal</span>
            </Button>
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
                  value={titleCard}
                  minLength={4}
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
                  name="line"
                  id="line"
                  value={line}
                  min={1}
                  onChange={(e) => setLine(+e.currentTarget.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="1"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="price" className="mb-2 block text-sm font-medium text-gray-900">
                  Colunas
                </label>
                <input
                  type="number"
                  name="cols"
                  id="cols"
                  value={cols}
                  onChange={(e) => setCols(+e.currentTarget.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  min={1}
                  placeholder="1"
                  required={true}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Adicionar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
