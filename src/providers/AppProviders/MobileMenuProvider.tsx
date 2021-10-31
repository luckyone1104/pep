import { createContext, FC, useMemo, useContext, useState } from 'react';

type MobileMenuContextValue = {
	mobileOpen: boolean;
	handleMenuToggle: () => void;
}

const MobileMenuContext = createContext(null as unknown);

export const MobileMenuProvider: FC = ({ children }) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleMenuToggle = () => {
		setMobileOpen(prev => !prev);
	};

	const value = useMemo(() => ({
		mobileOpen,
		handleMenuToggle,
	}), [handleMenuToggle]);

	return (
		<MobileMenuContext.Provider value={value}>
			{children}
		</MobileMenuContext.Provider>
	);
};

export const useMobileMenuContext = () => useContext(MobileMenuContext) as MobileMenuContextValue;