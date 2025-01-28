import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { CardItem, CardItemProps } from '../Card'
import { X } from 'lucide-react'
import { CSSProperties, useState } from 'react'
import { Alert } from '../Alert'
import { twMerge } from 'tailwind-merge'

export function SortableCardItem(props: CardItemProps) {
  const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  }

  const [showButtonDelete, setShowButtonDelete] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)

  const styleContainer: CSSProperties = {
    gridColumn: props.col ? `span ${props.col}` : 'auto',
    gridRow: props.row ? `span ${props.row}` : 'auto',
  }

  return (
    <div
      className={twMerge('relative card-container')}
      onMouseEnter={() => setShowButtonDelete(true)}
      onMouseLeave={() => setShowButtonDelete(false)}
      style={styleContainer}
    >
      <CardItem ref={setNodeRef} style={style} withOpacity={isDragging} {...props} {...attributes} {...listeners} />
      {showButtonDelete && props.onDelete && (
        <button
          id="deleteButton"
          data-modal-target="deleteModal"
          data-modal-toggle="deleteModal"
          className="absolute right-2 top-2 flex size-9 cursor-pointer items-center justify-center rounded-full  shadow-md"
          onClick={() => (props.onDelete ? setVisibleModal(true) : undefined)}
        >
          <X className="text-red-500" />
        </button>
      )}
      {props.onDelete !== undefined && (
        <Alert
          visible={visibleModal}
          onDelete={() => (props.onDelete ? props.onDelete(props.id) : undefined)}
          setVisibleModal={setVisibleModal}
        />
      )}
    </div>
  )
}

export default SortableCardItem
