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
import { arrayMove, SortableContext, rectSortingStrategy, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { Grid } from '../Grid'
import { CardItem } from '../Card'
import SortableCardItem from '../CardSortable'
import { Carrousel } from '../Carrousel'

export interface CardItems {
  id: number;
  col: number;
  row: number;
  title: string;
}
export interface GridProps {
  strategy: 'horizontal' | 'vertical';
  cardItem: CardItems[];
}

export function GridArea({ strategy, cardItem }: GridProps) {
  const [items, setItems] = useState(cardItem)

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

  const strategyDragDrop = strategy === 'vertical' ? rectSortingStrategy : horizontalListSortingStrategy

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
	  autoScroll
    >
      <SortableContext items={items} strategy={strategyDragDrop}>
        {strategy === 'vertical' && (
          <Grid columns={5}>
            {items.map((item) => (
              <SortableCardItem key={item.id} id={item.id as never}>
                {item.title}
              </SortableCardItem>
            ))}
          </Grid>
        )}
        {strategy === 'horizontal' && (
          <Carrousel>
            {items.map((item) => (
              <SortableCardItem key={item.id} id={item.id as never}>
                {item.title}
              </SortableCardItem>
            ))}
          </Carrousel>
        )}
      </SortableContext>
      <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
        {activeId ? <CardItem id={activeId as never} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  )
}
