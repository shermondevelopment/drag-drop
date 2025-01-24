import { createContext, useContext, useState } from 'react'

interface MenuContextProps {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuContext = createContext({} as MenuContextProps)


interface MenuContextProviderProps {
	children: React.ReactNode
}

export function MenuProvider({children}: MenuContextProviderProps) {

	const [open, setOpen] = useState(true)

	return (
		<MenuContext.Provider value={{open, setOpen}}>
			{children}
		</MenuContext.Provider>
	)
}

export const useMenuContext = () => {
	const context = useContext(MenuContext)
  
	if (!context) {
	  throw new Error('useMenuContext must be used within a MenuProvider')
	}
  
	return context
  }
  