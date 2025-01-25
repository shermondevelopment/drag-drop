import { Button } from '../../components/Button'
import { GridArea } from '../../components/DragDrop'
import { Header } from '../../components/Header'


export function Dashboard() {

	const itemsGrid = [
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
	]

	const itemsCarrousel = [
		{ id: 0, col: 1, row: 1, title: 'bezerra' },
		{ id: 1, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 2, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 3, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 4, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 5, col: 1, row: 1, title: 'ola meu nome' },
		{ id: 6, col: 1, row: 1, title: 'shermon' },
	]


	return (
		<>
		  <main className="mx-auto flex h-screen">
			<div className="flex w-full flex-col">
			  <Header />
			  <div className="box-border flex size-full flex-col justify-center gap-10 p-9">
				<div>
					<Button>Adicionar</Button>
				</div>
				 <div className="flex-1">
					<GridArea strategy='vertical'  cardItem={itemsGrid} />
				 </div>
				 <div className="flex justify-center">
					<div className="flex h-[200px] w-full max-w-[1200px] items-center justify-center overflow-x-hidden  border-8  border-dashed">
						<GridArea  strategy='horizontal' cardItem={itemsCarrousel}/>
					</div>
				 </div>
			  </div>
			</div>
		  </main>
		</>
	)
}