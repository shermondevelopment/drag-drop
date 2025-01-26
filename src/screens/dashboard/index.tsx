import { Button } from '../../components/Button'
import { GridArea } from '../../components/DragDrop'
import { Header } from '../../components/Header'
import { AddNewCard } from '../../components/Modal/AddNewCard/indxe'


export function Dashboard() {

	const itemsGrid = [
		{ id: 0, col: 1, row: 1, title: 'Lembrete: Pagar conta' },
		{ id: 1, col: 1, row: 1, title: 'Aviso: Conta' },
		{ id: 2, col: 1, row: 1, title: 'Acordar cedo' },
		{ id: 3, col: 1, row: 1, title: 'Fazer cadastro' },
		{ id: 4, col: 1, row: 1, title: 'Levantar cedo' },
		{ id: 5, col: 1, row: 1, title: 'Novos lembrete' },
		{ id: 6, col: 1, row: 1, title: 'Código em produção' },
		{ id: 7, col: 1, row: 1, title: 'JavaScrip' },
		{ id: 8, col: 1, row: 1, title: 'HTML5' },
		{ id: 9, col: 1, row: 1, title: 'ReactJS' },
	]

	const itemsCarrousel = [
		{ id: 0, col: 1, row: 1, title: 'Lembrete: Pagar conta' },
		{ id: 1, col: 1, row: 1, title: 'Aviso: Conta' },
		{ id: 2, col: 1, row: 1, title: 'Acordar cedo' },
		{ id: 3, col: 1, row: 1, title: 'Fazer cadastro' },
		{ id: 4, col: 1, row: 1, title: 'Levantar cedo' },
		{ id: 5, col: 1, row: 1, title: 'Novos lembrete' },
		{ id: 6, col: 1, row: 1, title: 'Código em produção' },
	]


	return (
		<>
		  <main className="mx-auto flex">
			<div className="flex w-full flex-col">
			  <Header />
			  <div className="box-border flex size-full flex-col justify-center gap-8 p-9">
				<div className="flex justify-center">
					<div className="flex w-full md:max-w-[70vw]">
						<Button>Adicionar</Button>
					</div>
				</div>
				 <div className="flex w-full  justify-center overflow-x-hidden">
					<div className="w-full rounded-md bg-[#ECEDF0] p-5 md:max-w-[70vw] ">
					  <GridArea strategy='vertical'  cardItem={itemsGrid} />
					</div>
				 </div>
				 <div className="flex justify-center">
					<div className="flex h-[200px] w-full items-center justify-center overflow-x-hidden md:max-w-[70vw]">
						<GridArea  strategy='horizontal' cardItem={itemsCarrousel}/>
					</div>
				 </div>
			  </div>
			</div>
		  </main>
		  <AddNewCard />
		</>
	)
}