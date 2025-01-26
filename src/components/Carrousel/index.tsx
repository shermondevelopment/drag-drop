import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export interface CarrouselProps {
  children: React.ReactNode;
}

export function Carrousel({ children }: CarrouselProps) {


  return (
    <Carousel
      autoPlay
      draggable={false}
      responsive={responsive}
      className="size-full flex-1 gap-7 rounded-md bg-[#ECEDF0] px-5"
      pauseOnHover
      swipeable={false}
    >
      {children}
    </Carousel>
  )
}
