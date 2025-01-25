import { twMerge } from 'tailwind-merge'


export function CardItem({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={twMerge('rounded-lg cursor-pointer w-[300px] h-[100px] bg-red-300', className)} {...props}>
			
		</div>
	)
}