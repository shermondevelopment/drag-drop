import { useState, useCallback } from 'react'
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable'
import { Grid } from '../Grid'
import { CardItem } from '../Card'
import SortableCardItem from '../CardSortable'

export function GridArea() {

	const [items, setItems] = useState([
		{ id: 0, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 1, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 2, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 3, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 4, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 5, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 6, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 7, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 8, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 9, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 10, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 11, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 12, col: 1, row: 1, title: 'ola bezerra' }
	])

	const [activeId, setActiveId] = useState<string | null>(null)
	const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

	const handleDragStart = useCallback((event: DragStartEvent) => {
		setActiveId(event?.active?.id as string)
	}, [])

	const handleDragEnd = useCallback((event: DragEndEvent) => {
		const { active, over } = event

		if (active.id !== over?.id) {
		  setItems((items) => {
			const oldIndex = items.findIndex((item) => item.id === active.id)
			const newIndex = items.findIndex((item) => item.id === over?.id)			
			return arrayMove(items, oldIndex, newIndex)
		  })
		}
	
		setActiveId(null)
	  }, [])

	const handleDragCancel = useCallback(() => {
		setActiveId(null)
	}, [])

	return (
		<DndContext
		  sensors={sensors}
		  collisionDetection={closestCenter}
		  onDragStart={handleDragStart}
		  onDragEnd={handleDragEnd}
		  onDragCancel={handleDragCancel}
		>
		  <SortableContext items={items} strategy={rectSortingStrategy}>
			<Grid columns={5}>
			  {items.map((item) => (
				<SortableCardItem key={item.id} id={item.id as never}>
					{item.title}
				</SortableCardItem>
			  ))}
			</Grid>
		  </SortableContext>
		  <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
			{activeId ? <CardItem id={activeId as never} isDragging /> : null}
		  </DragOverlay>
		</DndContext>
	)
}