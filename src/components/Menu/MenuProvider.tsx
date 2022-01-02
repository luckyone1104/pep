import { createContext, FC, useContext, useState } from 'react';

type MenuContextValue = {
	isMobileMenuOpened: boolean;
	isDesktopMenuExtended: boolean;
	toggleMobileMenu: () => void;
	extendDesktopMenu: () => void;
	narrowDesktopMenu: () => void;
};

const MenuContext = createContext(null as unknown);

export const MenuProvider: FC = ({ children }) => {
	const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
	const [isDesktopMenuExtended, setIsDesktopMenuExtended] = useState(true);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpened((prev) => !prev);
	};

	const extendDesktopMenu = () => {
		setIsDesktopMenuExtended(true);
	};

	const narrowDesktopMenu = () => {
		setIsDesktopMenuExtended(false);
	};

	return (
		<MenuContext.Provider
			value={{
				isMobileMenuOpened,
				isDesktopMenuExtended,
				toggleMobileMenu,
				extendDesktopMenu,
				narrowDesktopMenu,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};

export const useMenuContext = () => useContext(MenuContext) as MenuContextValue;
