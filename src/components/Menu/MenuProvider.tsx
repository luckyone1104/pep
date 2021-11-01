import { createContext, FC, useMemo, useContext, useState } from 'react';

type MenuContextValue = {
	mobileOpen: boolean;
	handleMenuToggle: () => void;
}

const MenuContext = createContext(null as unknown);

export const MenuProvider: FC = ({ children }) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleMenuToggle = () => {
		setMobileOpen(prev => !prev);
	};

	const value = useMemo(() => ({
		mobileOpen,
		handleMenuToggle,
	}), [handleMenuToggle]);

	return (
		<MenuContext.Provider value={value}>
			{children}
		</MenuContext.Provider>
	);
};

export const useMenuContext = () => useContext(MenuContext) as MenuContextValue;