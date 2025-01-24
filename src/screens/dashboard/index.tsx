import { Header } from '../../components/Header'
import { SideBar } from '../../components/SideBar'

export function Dashboard() {
	return (
		<>
		  <main className="mx-auto flex h-screen">
		    <SideBar />
			<div className="flex w-full flex-col sm:ml-64">
			  <Header />
			  <div className="box-border flex size-full justify-center p-10">
				 <div className="flex-1">
					adasdosakdo qewq
				 </div>
			  </div>
			</div>
		  </main>
		</>
	)
}