import {twMerge} from 'tailwind-merge'

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  
  const style = twMerge('mb-2 me-2 rounded-lg border border-dashed border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800', props.className)
  return (
    <button
      className={style}
	  {...props}
	>
      {children}
    </button>
  )
}
