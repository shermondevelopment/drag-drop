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
import { CardItemType } from '../../screens/dashboard'


export interface GridProps {
  strategy: 'horizontal' | 'vertical';
  setItemsCard: React.Dispatch<React.SetStateAction<CardItemType[]>>;
  itemsCard: CardItemType[];
}

export function GridArea({ strategy, itemsCard, setItemsCard }: GridProps) {

  const [activeId, setActiveId] = useState<string | null>(null)
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event?.active?.id as string)
  }, [])

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event

    if (active.id !== over?.id) {
      setItemsCard((items) => {
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

  const onDeleteCard = (id: number) => {
    const filterItems = itemsCard.filter((item) => item.id !== id)
    setItemsCard(filterItems)
  }

  const strategyDragDrop = strategy === 'vertical' ? rectSortingStrategy : horizontalListSortingStrategy


  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={itemsCard} strategy={strategyDragDrop}>
        {strategy === 'vertical' && (
          <Grid columns={4}>
            {itemsCard.map((item) => (
              <SortableCardItem key={item.id} id={item.id as never} onDelete={onDeleteCard} col={item.col} row={item.row}>
                {item.title}
              </SortableCardItem>
            ))}
          </Grid>
        )}
        {strategy === 'horizontal' && (
          <Carrousel>
            {itemsCard.map((item) => (
              <SortableCardItem key={item.id} id={item.id as never} style={{ width: 300 }}>
                {item.title}
              </SortableCardItem>
            ))}
          </Carrousel>
        )}
      </SortableContext>
      <DragOverlay adjustScale>
        {activeId !== null ? <CardItem id={activeId as never} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  )
}
