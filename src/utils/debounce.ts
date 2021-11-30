/* eslint-disable @typescript-eslint/ban-types */

export const debounce = <T extends Function = Function>(func: T, ms = 0) => {
	let isCooldown = false;

	return (...args: unknown[]) => {

		if (isCooldown) {
			return;
		}

		func.apply(this, args);

		isCooldown = true;
		setTimeout(() => isCooldown = false, ms);
	};
};
