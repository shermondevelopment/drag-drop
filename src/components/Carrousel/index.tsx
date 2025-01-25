import { useRef } from 'react'

export interface CarrouselProps {
  children: React.ReactNode;
}

export function Carrousel({ children }: CarrouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)


  return <div className="no-scrollbar flex  gap-5 overflow-x-auto  px-[100px]" ref={containerRef}>{children}</div>
}
