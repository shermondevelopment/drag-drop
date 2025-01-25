import { GridArea } from '../../components/GridArea'
import { Header } from '../../components/Header'
import { SideBar } from '../../components/SideBar'


export function Dashboard() {


	return (
		<>
		  <main className="mx-auto flex h-screen">
		    <SideBar />
			<div className="flex w-full flex-col sm:ml-64">
			  <Header />
			  <div className="box-border flex size-full flex-col justify-center gap-10 p-9">
				 <div className="flex-1">
					<GridArea />
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