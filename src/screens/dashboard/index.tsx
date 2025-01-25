import { CardItem } from '../../components/Card'
import { Header } from '../../components/Header'
import { SideBar } from '../../components/SideBar'
import { useState } from 'react'


export function Dashboard() {

	 const [cards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

	return (
		<>
		  <main className="mx-auto flex h-screen">
		    <SideBar />
			<div className="flex w-full flex-col sm:ml-64">
			  <Header />
			  <div className="box-border flex size-full flex-col justify-center gap-10 p-10">
				 <div className="grid flex-1 grid-cols-4 border-8 border-dashed border-cyan-100 p-5">
					{cards.map((_, index) => (
						<CardItem key={index}  />
					))}
				 </div>
				 <div className="flex h-[200px] w-full items-center justify-center border-8 border-dashed border-cyan-950">
					Carrousel
				 </div>
			  </div>
			</div>
		  </main>
		</>
	)
}